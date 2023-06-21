const Product=require('../models/product.js');
const upload=require('express-fileupload');
exports.addProduct=async (req,res,next)=>{
    const {name,category_id,price,stock,description}=req.body;
    const{is_admin,id}=req.user;
    if(is_admin){
        try{
                if(name===""||category_id===""||price===""||stock===""||description===""){
                    return res.status(303).json({message:" the fields  required"})
                }
                const product= new Product({
                    name,category_id,price,stock,description,
                    id:Math.random(9565625)*99552659999,
                });
                let files;
                let file;
                let photos_list=[];
                if(req.files){
                    if (Array.isArray(req.files['photos_list'])){
                        files=req.files['photos_list'];
                        for (let file of files){
                            photos_list.push(`${file.name}`);
                            file.mv(`uploads/images/${file.name}`, async(err) => {
                                if (err) {
                                console.error(err);
                                //return res.status(500).send(err);
                                }
                            });

                        };
                        product.photos_list=photos_list;
                        //console.log(product.photos_list) 
                        await product.save();
                        return res.status(200).json({message:"success"});
                    }
                    else{
                        file=req.files['photos_list'];
                        file.mv(`uploads/images/${file.name}`, async(err) => {
                            if (err) {
                              console.error(err);
                              return res.status(300).send(err);
                            }
                        });
                        product.photos_list=[file.name]
                        await product.save();
                        return res.status(200).json({message:"success"});
                    }
                }
                return res.status(300).json({message:"failed"});
            }
        catch (e){
            if(e.code==11000)return res.status(300).json({message:"this product has already exists"});
            else return res.status(500).json({message:"some thing went wrong" ,err:e});
        }
    }
    return res.status(400).json({message:"Access denied"});
}
exports.deleteProduct=async (req,res,next)=>{
    const {productId}=req.params;
    const {id,is_admin}=req.user;
    if(is_admin){
        const verify=Product.findById(productId);
        if(verify!==null){
            const deleted=await Product.deleteOne({_id:productId});
            if (deleted.deletedCount>0){
            return res.status(200).json({message:"success"})
            }
        }
        return res.status(404).json({message:"Not found"})
    }
    return res.status(400).json({message:"Access denied"});
}
exports.updateProduct=async(req,res,next)=>{
    try{
        const {productId}=req.params;
        const {name,category_id,price,stock,description}=req.body;
        if(name===""||category_id===""||price===""||stock===""||description===""){
            return res.status(303).json({message:" the fields  required"})
        }
        if(req.files){
            let files=req.files.photos_list;
            let photos_list=[];
            for (let file of files){
                photos_list.push(`${file.name}`);
                file.mv(`uploads/images/${file.name}`, async(err) => {
                    if (err) {
                      console.error(err);
                      return res.status(500).send(err);
                    }
                });
            };
            const verify=await Product.findById(productId);
            if(verify!==null){
                const updated= await Product.updateOne({_id:productId},{
                    name,category_id,price,stock,description,photos_list
                });
                if (updated.modifiedCount>0){
                    return res.status(200).json({message:"success"});
                }
                next();
            }
            else{
                return res.status(404).json({message:"product not found"});
            }
        }
        return res.status(300).json({message:"failes"});
    }
    catch(e){
        return  res.status(500).json({message:"some thing went wrong"});
    }
    
}
exports.getAllProducts=async (req,res,next)=>{
     const {search}=req.query;
        try{
            if(search){
                const products= await Product.find({name:{$regex:search}});
                return res.status(200).json({message:"success",data:{products:products}});
            }
            const products= await Product.find();
            return res.status(200).json({message:"success",data:{products:products}});
        }
        catch{
            return res.status(500).json({message:"some thing went wrong"});
        }
}
exports.getPaginatedProducts=async (req,res,next)=>{
    const {start,limit}=req.query;
    let skip=(Number(start)-1)*100;

    try{
        const products= await Accounts.find().skip(skip).limit(limit);
        res.status(200).json({message:"success",data:{products:products}});
    }
    catch{
        res.status(500).json({message:"failed"});
    }
}

exports.getProduct=async(req,res,next)=>{
    const {productId}=req.params;
    try{
        const product= await Product.findById(productId);
        return res.status(200).json({message:"success",data:{product:product}});
    }
    catch{
        return res.status(500).json({message:"some thing went wrong"});
    }
}
// exports.getUsersByFirstName=async (req,res,next)=>{
//     const {start,limit}=req.query;
//     const {first_name}=req.params
//     let skip=(Number(start)-1)*100;
//     try{
//         const users= await Accounts.find({first_name}).skip(skip).limit(limit);
//         res.status(200).json({message:"success",data:{users:users}});
//     }
//     catch{
//         res.status(500).json({message:"failed"});
//     }
// }