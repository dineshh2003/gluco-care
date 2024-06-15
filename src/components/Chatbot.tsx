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
    <div className="flex flex-col items-center justify-center  h-[80vh] bg-gray-100 p-4">
      <div className="bg-b2 w-[70vw] h-[70vh] rounded-lg shadow-lg flex flex-col ">
        <h1 className="text-2xl font-bold mb-4 text-center font-sans">Diabetes Information Chatbot</h1>
        <form onSubmit={handleSubmit} className="mb-4 mx-auto w-5/6  ">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something about diabetes..."
            rows={4}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-b1 bg-gray-100 "
          />
          <button
            type="submit"
            className="w-full bg-b1 text-white p-2 rounded-lg hover:bg-b2 focus:outline-none focus:ring-2 focus:ring-b1"
          >
            Submit
          </button>
        </form>
        <div className=" p-4 w-[60vw] rounded-lg shadow-lg flex flex-col m-auto bg-gray-100 focus:ring-b1" > 
          <h2 className="text-xl font-semibold mb-2">Response:</h2> 
          <p className="text-gray-800">{response}</p>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
