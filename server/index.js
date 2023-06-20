const express=require("express");
const Pizza=require('./models/pizzaModels')
const db=require("./db.js");
const app=express();
 app.use(express.json());



app.get('/',(req,res)=>{
    res.send("server is up and running")
});



app.get("/getpizzas",(req,res)=>{

   Pizza.find({},(err,docs)=>{
    if(err) {
        console.log(err)
    }
    else{
        console.log(docs)
    }
   }) 

});
const port=process.env.PORT || 5000;


app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
});