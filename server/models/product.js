const mongoose=require("mongoose");

const Schema=new mongoose.Schema({
    id:{
        type:String,
    },
    name:{
        type:String,
        required:true,
    },
    category_id:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    photos_list:[String],
    created_at:{
        type:Date,
        default: Date.now()
    }
});
module.exports=mongoose.model("products",Schema,'products');