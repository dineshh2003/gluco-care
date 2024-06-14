const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const patientRoutes = require('./routes/patientRoutes')
const cors = require('cors');


dotenv.config()




const app = express();


app.use(cors());
app.use(express.json());

app.use('/api', patientRoutes);



const PORT = process.env.PORT;


const uri = process.env.MONGO_URL;

if (!uri) {
    throw new Error('MONGO_URL is not defined');
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

mongoose.connect(uri)
    .then(() => {
        console.log('Connected to MongoDB');
        // Start the server after successful MongoDB connection
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB:', err);
    });
