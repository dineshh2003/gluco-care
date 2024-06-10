const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

const apiKey = process.env.API_KEY;
// Set up Google Generative AI
const genAI = new GoogleGenerativeAI(apiKey);

app.post('/predict', async (req, res) => {
  const { prompt } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    res.json({ response: text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the Gemini Chatbot API');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
