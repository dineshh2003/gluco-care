const express = require('express');
const {updatePatient , getPatient} = require('../controllers/PatientController')

const router = express.Router();

router.put('/updatepatients/:id', updatePatient);
router.get('/patients/:id' ,getPatient);

module.exports = router;
