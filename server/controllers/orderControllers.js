const Order=require('../models/order.js');
const User=require('../models/user.js');
const amqp=require("amqplib");

let conection, channel
async function connectToRabbitMQ() {
    const amqpServer = "amqp://guest:guest@rabbit:5672";
    conection = await amqp.connect(amqpServer);
    channel = await conection.createChannel();
    await channel.assertQueue('notification-add-queue');
    await channel.assertQueue('notification-update-queue');
}
exports.addOrder=async (req,res,next)=>{
    const products_list=req.body;
    const{is_admin,id}=req.user;

    
    
        try{
            if(products_list===""){
                return res.status(303).json({message:" the fields  required"})
            }
            // console.log(id)
            // console.log(products_list)
            let price=0;
            for (let product of products_list){
                price+=product.price*product.count;
            }
            const user = await User.findById(id);
            
            const order= new Order({
                id:Math.random(9565625)*99552659999,
                products_list,
                user_id:id,
                status:"proccessing",
                is_delivered:false,
                total_price:price
            });
            await order.save().then((ord)=>{
                connectToRabbitMQ().then(() => {
                    channel.sendToQueue("notification-add-queue",
                        Buffer.from(JSON.stringify({
                            ...order,
                            username:user.username,
                            email:user.email,
                        }))
                    );
                    console.log("sending");
                });
                
            });

            
            
            //console.log("test")
            return res.status(200).json({message:"success"});
        }
        catch (e){
            
            return res.status(500).json({message:e});
        }
}
exports.deleteOrder=async (req,res,next)=>{
    const {orderId}=req.params;
    const {id,is_admin}=req.user;
    if(is_admin){
        const verify=Order.findById(orderId);
        if(verify!==null){
            const deleted=await Order.deleteOne({_id:orderId});
            if (deleted.deletedCount>0){
            return res.status(200).json({message:"success"})
            }
        }
        return res.status(404).json({message:"Not found"})
    }
    else{
        return res.status(400).json({message:"access denied"})
    }
}
exports.approveOrder=async (req,res,next)=>{
    const {orderId}=req.params;
    const {id,is_admin}=req.user;
    if(is_admin){
        let user;
        const verify= await Order.findById(orderId);
        if(verify!==null){
            const updeted=await Order.updateOne({_id:orderId},{status:"approved"});
            user=await User.findById(verify.user_id);
            if (updeted.modifiedCount>0){
                
                connectToRabbitMQ().then(() => {
                    channel.sendToQueue("notification-update-queue",
                        Buffer.from(JSON.stringify({id:orderId,username:user.username,email:user.email}))
                    );
                });
             
            return res.status(200).json({message:"success"})
            }
        }
        return res.status(400).json({message:"Not found"})
    }
    else{
        return res.status(400).json({message:"access denied"})
    }
}
// exports.updateOrder=async(req,res,next)=>{
//     try{
//         const {orderId}=req.params;
//         const {status,is_delivered}=req.body;
//         if(status===""||is_delivered===""){
//             return res.status(303).json({message:" the fields  required"})
//         }
//         const verify=await Order.findById(orderId);
//         if(verify!==null){
//             const updated= await Order.updateOne({_id:orderId},{
//                 status,is_delivered,
//             });
//             if (updated.modifiedCount>0){
//                 return res.status(200).json({message:"success"});
//             }
//             next();
//         }
//         else{
//             return res.status(404);
//         }
//     }
//     catch(e){
//         return  res.status(500).json({message:"some thing went wrong"});
//     }
// }
exports.getAllOrders=async (req,res,next)=>{
    const{is_admin,id}=req.user;
    if(is_admin){
        try{
                const orders= await Order.find();
                return res.status(200).json({message:"success",data:{orders:orders}});
            }
        catch{
            return res.status(500).json({message:"some thing went wrong"});
        }
    }
    return res.status(400).json({message:"Access denied"});
}
exports.getUserOrders=async (req,res,next)=>{
    const {userId}=req.params;
    try{
        const orsers= await Order.find({user_id:userId});
        res.status(200).json({message:"success",data:{orders:orders}});
    }
    catch{
        res.status(500).json({message:"failed"});
    }
}
