// models/Order.js

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  medicalStoreName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  contactStore:{
    type: String,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  medicineNo: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
