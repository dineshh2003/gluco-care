const mongoose=require('mongoose')


const loginSchema=new mongoose.Schema({
    id:{
        type : Number,
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    }
    
})
const Login=mongoose.model("login",loginSchema);

module.exports=Login