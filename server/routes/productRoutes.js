//categories/${catId}/products
const express=require('express');
const verifyToken=require('../middlewares/verifyToken.js');
const {deleteProduct, updateProduct, addProduct, getAllProducts, getProduct}=require("../controllers/productControllers")
const router=express.Router();

router.post('/add',verifyToken,addProduct);
router.post('/delete/:productId',verifyToken,deleteProduct);
router.post('/update/:productId',verifyToken,updateProduct);
router.get('/:productId',getProduct);
router.get('/',getAllProducts);
module.exports=router;