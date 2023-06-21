
const Category=require('../models/category.js')
const Product=require('../models/product.js')
const upload=require('express-fileupload');


exports.addCategory=async (req,res,next)=>{
    const {name}=req.body;
    const{is_admin,id}=req.user;
    if(is_admin){
        try{
            if(name===""){
                return res.status(303).json({message:" the fields  required"})
            }
                const category= new Category({
                    name:name,
                    id:Math.random(9565625)*99552659999,
                });
                //console.log(req.files);
                let file;
                if(req.files){
                    file = req.files.photo;
                    file.mv(`uploads/images/${file.name}`, async(err) => {
                        if (err) {
                          console.error(err);
                          return res.status(500).send(err);
                        }
                    });
                    category.photo=`${file.name}`;
                    await category.save();
                    return res.status(200).json({message:"success"});
                }
                //console.log(req.body);
                return res.status(300).json({message:"failed"});
                
            }
        catch (e){
            if(e.code==11000)return res.status(300).json({message:"this category has already exists"});
            else return res.status(500).json({message:"some thing went wrong", err:e});
        }
    }
    return res.status(304).json({message:"Access denied"});
}
exports.deleteCategory=async (req,res,next)=>{
    const {categoryId}=req.params;
    const {id,is_admin}=req.user;
    if(is_admin){
        const verify=Category.findById(categoryId);
        if(verify!==null){
            const deleted=await Category.deleteOne({_id:categoryId});
            if (deleted.deletedCount>0){
            return res.status(200).json({message:"success"})
            }
        }
        return res.status(404).json({message:"Not found"})
    }
    return res.status(400).json({message:"Access denied"});
}
exports.updateCategory=async(req,res,next)=>{
    try{
        const {categoryId}=req.params;
        const {name}=req.body;
        const {id,is_admin}=req.product;
        if(is_admin){
            if(name===""){
                return res.status(303).json({message:" the fields  required"})
            }
            const verify=await Category.findById(categoryId);
            let file;
            if(req.files){
                file = req.files.photo;
                file.mv(`uploads/images/${file.name}`, async(err) => {
                    if (err) {
                      console.error(err);
                      return res.status(500).send(err);
                    }
                  });
            }
            if(verify!==null){
                const updated= await Category.updateOne({_id:categoryId},{
                    name,photo:`uploads/images/${file.name}`
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
        return res.status(400).json({message:"Access denied"});
    }
    catch(e){
        return  res.status(500).json({message:"some thing went wrong"});
    }
    
}
exports.getCategories=async (req,res,next)=>{
    try{
            const categories= await Category.find();
            return res.status(200).json({message:"success",data:{categories:categories}});
        }
    catch{
        return res.status(500).json({message:"some thing went wrong"});
    }
}

exports.getCategoryProducts=async(req,res,next)=>{
    const {categoryId}=req.params;
    try{
        const products= await Product.find({category_id:categoryId});
        return res.status(200).json({message:"success",data:{products:products}});
    }
    catch{
        return res.status(500).json({message:"some thing went wrong"});
    }
}
exports.getCategory=async(req,res,next)=>{
    const {categoryId}=req.params;
    try{
        const category= await Category.findById(categoryId);
        return res.status(200).json({message:"success",data:{category:category}});
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