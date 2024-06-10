import React, { useState, FormEvent } from 'react';
import axios from 'axios';

const Chatbot: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Update the URL to match your backend endpoint
      const res = await axios.post('http://localhost:4000/predict', { prompt: input });
      setResponse(res.data.response);
    } catch (error) {
      console.error(error);
      setResponse('Error: Could not get response from server.');
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid black', borderRadius: '8px' }}>
      <h1>Diabetes Information Chatbot</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something about diabetes..."
          rows={4}
          cols={50}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <br />
        <button type="submit" style={{ padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>Submit</button>
      </form>
      <div style={{ marginTop: '20px' }}>
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default Chatbot;
