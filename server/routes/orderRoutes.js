const express=require("express");
const {addOrder,deleteOrder, getAllOrders, getUserOrders,approveOrder} =require('../controllers/orderControllers.js');
const Router =express.Router();

Router.post("/add",addOrder);
Router.post("/delete/:orderId",deleteOrder);
Router.post("/approve/:orderId",approveOrder);
Router.get("/",getAllOrders);
Router.get("/all/:userId",getUserOrders);

module.exports=Router
