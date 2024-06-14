const express = require ('express');
const router = express.Router();

const {getStores} = require('../controllers/StoreController');

router.get('/getStores' , getStores );

module.exports = router;
