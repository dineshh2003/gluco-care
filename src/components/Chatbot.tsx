import React, { useState } from 'react';
import { askOpenAI } from './utils/openai';

interface Message {
  text: string;
  fromUser: boolean;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = { text: inputValue, fromUser: true };
    setMessages([...messages, userMessage]);

    const response = await askOpenAI(inputValue);
    const botMessage: Message = { text: response, fromUser: false };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
    setInputValue('');
  };

  return (
    <div className="chatbot">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.fromUser ? 'user-message' : 'bot-message'}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSendMessage();
          }
        }}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chatbot;
