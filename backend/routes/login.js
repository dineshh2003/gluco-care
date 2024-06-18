const express=require('express')
const router=express.Router();
const {handleLogin}=require('../controllers/login')
// const {handleDemandlist}=require('../controllers/demandlist')

router.post('/api/login',handleLogin);

// router.get('/api/demand',handleDemandlist);

module.exports=router;