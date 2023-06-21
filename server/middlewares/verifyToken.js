const jwt =require("jsonwebtoken");

const verifyToken=(req,res,next)=>{
    const Authorization=req.headers.authorization;
    const token = Authorization && Authorization.split(" ")[1];
    if(token==null){
        res.status(400).json(({message:"token required !"}));
    }
    else {
        jwt.verify(token,process.env.SECRET_KEY,(err,userData)=>{
            if(!err){
                req.user=userData;
                next();
                return ;
            }
            else{
                res.status(400).json({message:"access denied" ,err:err});
            }
            
        });
    }
}
module.exports=verifyToken