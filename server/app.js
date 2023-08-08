console.log("drama");
const mongoose=require("mongoose")
const express=require("express");
const app=express();
const route=require("./routes/login")
const dotenv=require("dotenv");
dotenv.config();
// app.use(express.urlencoded({extended: true}));
app.use(express.json())


app.use("/",route)


mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true,useUnifiedTopology:true}).
then(()=>{
    console.log("connection to db success")
}).catch((err)=>{
console.log(err)
})

app.listen(6666,()=>{
    console.log("connection to the port 6666");
})

