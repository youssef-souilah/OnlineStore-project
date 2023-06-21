const jwt=require('jsonwebtoken');
const Users =require('../models/user.js');
const bcrypt=require('bcrypt');
const upload=require('express-fileupload');
exports.login = async(req,res,next)=>{
    const {email,password}=req.body;
    console.log(email,password)
    const verify= await Users.findOne({email});
    if(verify==null){
        res.status(300).json({message:"user not found"});
    }
    else{
        bcrypt.compare(password,verify.password,(err,isValid)=>{
            if(isValid){
                jwt.sign({id:verify._id,is_admin:verify.is_admin},process.env.SECRET_KEY,(err,token)=>{
                    if(!err){
                        return res.status(200).json({message:"done",token:token});
                    }
                    return res.status(301).json({message:"some thing went wrong",token:"none"});
                });
            }
            else{
                res.status(300).json({messsage:"invalid username or password"});
            }
        })
    }
}
exports.adminLoging = async(req,res,next)=>{
    const {email,password}=req.body;
    const verify= await Users.findOne({email,is_admin:true});
    if(verify==null){
        res.status(300).json({message:"user not found"});
    }
    else{
        bcrypt.compare(password,verify.password,(err,isValid)=>{
            if(isValid){
                jwt.sign({id:verify._id,is_admin:verify.is_admin},process.env.SECRET_KEY,(err,token)=>{
                    if(!err){
                        return res.status(200).json({message:"done",token:token});
                    }
                    return res.status(301).json({message:"some thing went wrong",token:"none"});
                });
            }
            else{
                res.status(300).json({messsage:"invalid username or password"});
            }
        })
    }
}
exports.register=async (req,res,next)=>{
    const {username,password,email,first_name,last_name,is_admin,city,address,postal_code}=req.body;
    bcrypt.genSalt(10,(err,salt)=>{
        if(!err){
            bcrypt.hash(password,salt,async(err,hashed)=>{
                if(!err){
                    try{
                        const user=new Users({
                            id:Math.random(9565625)*99552659999,
                            username,
                            email,
                            password:hashed,
                            first_name,
                            last_name,
                            is_admin,
                            city,
                            address,
                            postal_code
                        });
                        let file;
                        if(req.files){
                            file=req.files.profile;
                            file.mv(`uploads/images/${file.name}`, async(err) => {
                                if (err) {
                                  console.error(err);
                                  return res.status(500).send(err);
                                }
                            });
                            user.profile=`${file.name}`;
                            await user.save();
                            return res.status(200).json({message:"success"});
                        }
                        else{
                            user.profile=`default.png`;
                            await user.save();
                            return res.status(200).json({message:"success"});
                        }
                        
                    }
                    catch(e){
                        if(e.code==11000)return res.status(300).json({message:"this username or email has already exists"})
                        return res.status(500).json({message:"some thing went wrong" ,err:e});
                    }
                }
            })
        }
    });
}

exports.getUsers=async (req,res,next)=>{
    const{is_admin,id}=req.user;
    if(is_admin){
        try{
                const users= await Users.find();
                return res.status(200).json({message:"success",data:{users:users}});
            }
        catch{
            return res.status(500).json({message:"some thing went wrong"});
        }
    }
    return res.status(400).json({message:"Access denied"});
}
exports.getUsersByFirstName=async (req,res,next)=>{
    const {start,limit}=req.query;
    const {first_name}=req.params
    let skip=(Number(start)-1)*100;
    try{
        const users= await Accounts.find({first_name}).skip(skip).limit(limit);
        res.status(200).json({message:"success",data:{users:users}});
    }
    catch{
        res.status(500).json({message:"failed"});
    }
}
exports.getUserByUsername=async (req,res,next)=>{
    const {username}=req.params;
    const{is_admin,id}=req.user;
    if(is_admin){
        try{
        const user= await Accounts.findOne({username})
        if(user==null){
           return res.status(404).json({message:"not found"});
        }
        res.status(200).json({message:"success",data:{user:user}});
        }
        catch{
            res.status(500).json({message:"failed"});
        }
    }
    return res.status(400).json({message:"Access denied"});
}

exports.deleteUser=async (req,res,next)=>{
    const {userId}=req.params;
    const {id,is_admin}=req.user;
    if(is_admin){
        const verify=Users.findById(userId);
        if(verify!==null){
            const deleted=await Users.deleteOne({_id:userId});
            if (deleted.deletedCount>0){
            return res.status(200).json({message:"success"})
            }
        }
        return res.status(303).json({message:"Not found"})
    }
    return res.status(400).json({message:"Access denied"});
}
exports.updateUser=async(req,res,next)=>{
    try{
        const {userId}=req.params;
        const {username,email,first_name,last_name,is_admin,city,address,postal_code}=req.body;
        const verify=await Users.findById(userId);
        if(verify!==null){
            const updated= await Users.updateOne({_id:userId},{
                username,
                email,
                first_name,
                last_name,
                is_admin,
                city,
                address,
                postal_code
            });
            if (updated.modifiedCount>0){
                return res.status(200).json({message:"success"});
            }
            next();
        }
        else{
            return res.status(404);
        }
    }
    catch(e){
        return  res.status(500).json({message:"some thing went wrong"});
    }
    
}