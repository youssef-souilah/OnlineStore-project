//categories/${catId}/products
const express=require('express');
const verifyToken=require('../middlewares/verifyToken.js');
const {deleteCategory, updateCategory, addCategory, getCategoryProducts, getCategories, getCategory}=require("../controllers/categoryControllers");
const router=express.Router();
router.post('/add',verifyToken,addCategory);
router.post('/delete/:categoryId',verifyToken,deleteCategory);
router.post('/update/:categoryId',verifyToken,updateCategory);
router.get('/:categoryId',getCategory);
router.get('/:categoryId/products',getCategoryProducts);
router.get('/',getCategories);
module.exports=router;