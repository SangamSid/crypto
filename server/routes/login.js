const router=require("express").Router();
const UserRegister=require("../models/registerModel")
const bcrypt = require('bcrypt');
const saltRounds = 10;





// -----------------REGISTER---------------------------------------

router.post("/register",async(req,res)=>{

    try{
        const salt= await bcrypt.genSalt(saltRounds);
        const hashpassword = await bcrypt.hash(req.body.password, salt) 
      
    const user=new UserRegister({
        name:req.body.name,
        email:req.body.email,
        phoneNumber:req.body.phoneNumber,
        password:hashpassword
    })
    console.log(req.body);
    const data= await user.save();
    res.status(200).json(data)
}
    catch(err){
        res.status(500).json(err)
    }

})


// ----------------------LOGIN----------------------

router.post("/login",async(req,res)=>{

try{
    const user= await UserRegister.findOne({
        email:req.body.email
    })
    
    !user && res.status(400).json("Invalid Credentials");
 
       const validate=await bcrypt.compare(req.body.password, user.password) 
       !validate && res.status(400).json("invalid credential");

       const {password,...others}=user._doc
       res.status(200).json(others);

}catch(err){
res.status(500).json(err);
}

    })

module.exports=router