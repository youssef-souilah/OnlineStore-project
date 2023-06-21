const mongoose=require('mongoose');
const mongoConnect=()=>{
    mongoose.connect(`${process.env.DATABASE_URL}`)
        .then(()=>{
            console.log('mongoDb connected successfully');
        })
        .catch(()=>{
            console.log('mongoDb not connected !');
        })
}
module.exports= mongoConnect