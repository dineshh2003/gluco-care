const { strict } = require('assert');
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
            id : {
                type : string,
                required : true
            },
            patientPhoto: {
                type : String,
                required : true
            },
            firstName : {
                type : string,
                required : true
            },
            LastName : {
                type : string,
                required : true
            },
            firstName : {
                type : string,
                required : true
            },
            Gender : {
                type : string,
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
                type: string,
                required : true
            },
            state : {
                type: string,
                required : true
            },
            ZipCode : {
                type: string,
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