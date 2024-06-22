require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const login = require('./routes/login');
const patientRoutes = require('./routes/patientRoutes');
const orderRoutes = require('./routes/orderRoutes');
const storesRoutes = require('./routes/storesRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Environment variables
const port = process.env.PORT || 5000;
const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
    throw new Error('MONGO_URL environment variable is not set');
}

// MongoDB connection
mongoose.connect(mongoUrl)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

// Routes
app.use('/', login);
app.use('/api', patientRoutes);
app.use('/api', orderRoutes);
app.use('/api', storesRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
