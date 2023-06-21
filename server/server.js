const express=require('express');
const cors=require("cors");
const mongoConnect=require('./config/database.js');
const verifyToken=require('./middlewares/verifyToken.js');
const authRoute=require('./routes/authRoutes.js');
const userRoute=require('./routes/userRoutes.js');
const categoryRoute=require('./routes/categoryRoutes.js');
const orderRoute=require('./routes/orderRoutes.js');
const productRoute=require('./routes/productRoutes.js');
const dotenv =require('dotenv');
const app=express();
const upload=require('express-fileupload');

const bodyParser=require('body-parser');


dotenv.config();
app.use(upload())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send('hello');
});
app.use("/images",express.static('uploads/images'));
app.use('/auth',authRoute);
app.use('/users',verifyToken,userRoute);
app.use('/categories',categoryRoute);
app.use('/orders',verifyToken,orderRoute);
app.use('/products',productRoute);
// app.get('/api/v1/login',(req,res)=>{
//     res.send(200)
// })

app.listen(3003,()=>{
    mongoConnect()
    console.log("server running on port ",process.env.PORT);
})