const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
            id : {
                type : String,
                required : true
            },
            patientPhoto: {
                type : String,
                required : true
            },
            firstName : {
                type : String,
                required : true
            },
            LastName : {
                type : String,
                required : true
            },
            firstName : {
                type : String,
                required : true
            },
            Gender : {
                type : String,
                required : true
            },
            DOB : {
                type : Date,
                required : true   
            },
            BloodType : {
                type : String,
                required : true,
            },
            Address: {
                type : String,
                required : true,
            },
            City:{
                type: String,
                required : true
            },
            state : {
                type: String,
                required : true
            },
            ZipCode : {
                type: String,
                required : true
            },
            KnownMedicalCondition: {
                type : String,
                required : true
            },
            Allergies: {
                type : String,
                required : true  
            },
            Hypertension : {
                type : String,
                required : true 
            },
            HeartDisease :{
                type : String,
                required : true 
            },
            BMI : {
                type : String,
                required : true 
            },
            HBA1CLEVEL:{
                type : String,
                required : true 
            },
            BLOODGLUCOSE:{
                type : String,
                required : true 
            }
            

  });


const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;