const express = require('express');
const {updatePatient} = require('../controllers/PatientController')

const router = express.Router();

router.post('/patients/:id', updatePatient);

module.exports = router;
