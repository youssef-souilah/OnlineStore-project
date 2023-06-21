const mongoose=require("mongoose");

const Schema=new mongoose.Schema({
    id:{
        type:String,
    },
    name:{
        type:String,
        required:true,
    },
    
    photo:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        default: Date.now()
    }
});
module.exports=mongoose.model("categories",Schema,'categories');