const mongoose=require("mongoose");

const Schema=new mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },
    body:String,
    is_read:Boolean,
    created_at:{
        type:Date,
        default: Date.now()
    }
});
module.exports=mongoose.model("notifications",Schema,'notifications');