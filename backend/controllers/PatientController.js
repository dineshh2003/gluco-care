const Patient = require('../models/Patient');

const updatePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const patient = await Patient.findByIdAndUpdate(id, updatedData, { new: true });

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.json(patient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { updatePatient };
