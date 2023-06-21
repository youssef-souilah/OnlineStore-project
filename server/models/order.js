const mongoose=require("mongoose");

const Schema=new mongoose.Schema({
    id:{
        type:String,
    },
    products_list:[{
        id:String,
        name:String,
        image:String,
        price:Number,
        conut:Number
    }],
    user_id:{
        type:String,
        required:true
    },
    status:String,
    is_delivered:Boolean,
    total_price:Number,
    delivred_at:{
        type:Date,
        default:Date.now()
    },
    created_at:{
        type:Date,
        default: Date.now()
    }
});
module.exports=mongoose.model("orders",Schema,'orders');