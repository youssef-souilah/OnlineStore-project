const mongoose=require("mongoose");

const Schema=new mongoose.Schema({
    id:{
        type:String,
    },
    username:{
        type:String,
        required:true,
        minlength:5,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:String,
    profile:{
        type:String,
        default:"profile.png"
    },
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    is_admin:{
        type:Boolean,
        default:false
    },
    city:String,
    postal_code:String,
    address:String,
    created_at:{
        type:Date,
        default: Date.now()
    }
});
module.exports=mongoose.model("users",Schema,'users');