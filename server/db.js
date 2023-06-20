const mongoose=require("mongoose")
var mongoURL='mongodb://127.0.0.1:27017/mern-pizza'

mongoose.connect(mongoURL,{ useUnifiedTopology:true,useNewUrlParser:true})
var db=mongoose.connection

db.on('connected',()=>{
    console.log("succes")
})
db.on('error',()=>{
    console.log("fail")
})
module.exports=mongoose;