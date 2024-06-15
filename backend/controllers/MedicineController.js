const Order = require("../models/medorder");

//post
const createOrder = async (req, res) => {
  try {
    const {
      medicalStoreName,
      location,
      contactStore,
      patientName,
      address,
      contactNo,
      medicineNo,
      quantity,
    } = req.body;

    const order = new Order({
      medicalStoreName,
      location,
      contactStore,
      patientName,
      address,
      contactNo,
      medicineNo,
      quantity,
    });

    await order.save();
    res.status(201).json({ message: 'Order created successfully' });

  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { createOrder };
