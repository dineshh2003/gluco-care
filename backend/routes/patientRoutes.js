const express = require('express');
const {updatePatient , getPatient} = require('../controllers/PatientController')

const router = express.Router();

router.put('/updatepatients/', updatePatient);
router.get('/patients/' ,getPatient);

module.exports = router;
