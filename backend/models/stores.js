const mongoose = require('mongoose');

const pharmacySchema = new mongoose.Schema({
  position: {
    type: [Number],
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  store: {
    type: String,
    required: true,
  },
  medicines: {
    type: [String],
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
});

const Pharmacy = mongoose.model('Pharmacy', pharmacySchema);

module.exports = Pharmacy;
