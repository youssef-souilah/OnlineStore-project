const express=require('express');
const {deleteUser, updateUser, getUsers}=require("../controllers/userControllers.js")
const router=express.Router();

router.post('/delete/:userId',deleteUser);
router.get('/',getUsers);
//router.post('/update/:userId',updateUser);
module.exports=router;