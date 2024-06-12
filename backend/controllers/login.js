const Login=require('../models/login')



const handleLogin=async(req,res)=>{
    const {id,name,email}=req.body;
   try{
    const log=await  Login.create({
       id,
       name,
       email
    })
    res.status(201).json({ message: 'Form data received successfully' });
    
   }
   catch (error) {
        console.error("Error fetching items:", error);
      res.status(500).json({ message: "Internal server error" });
    }
}
module.exports={
    handleLogin
}