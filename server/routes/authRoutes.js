const express=require('express');
const {login,register, adminLoging}=require("../controllers/userControllers.js")
const router=express.Router();

router.post('/login',login);
router.post('/login_admin',adminLoging);
router.post('/register',register);

module.exports=router;