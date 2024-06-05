const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = 'mongodb://localhost:27017/your-database-name';


mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });