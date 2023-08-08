const mongoose=require("mongoose");
const registerSchema=new mongoose.Schema({

name:{
    type:String,
    required:true

},
email:{
    type:String,
    required:true
},
phoneNumber:{
    type:Number,
    required:true

},
password:{
    type:String,
    required:true
}
});

const registerMo=new mongoose.model("Register",registerSchema);
module.exports=registerMo;