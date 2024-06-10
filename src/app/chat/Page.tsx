import { useState, ChangeEvent, FC } from 'react';
import axios from 'axios';

interface Message {
    user: boolean;
    text: string;
}

const Chatbot: FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>('');

    const handleSend = async () => {
        if (input.trim() === '') return;

        // Add user message to chatbox
        setMessages([...messages, { user: true, text: input }]);
        
        // Clear the input field
        setInput('');

        try {
            // Send message to Flask backend
            const response = await axios.post('http://localhost:5000/chat', { message: input });
            const botReply = response.data.response;

            // Add bot reply to chatbox
            setMessages((prevMessages) => [...prevMessages, { user: true, text: input }, { user: false, text: botReply }]);
        } catch (error) {
            console.error('Error sending message to backend:', error);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    return (
        <div>
            <h1>Diabetes Chatbot</h1>
            <div
                id="chatbox"
                style={{
                    width: '500px',
                    height: '400px',
                    border: '1px solid #ccc',
                    padding: '10px',
                    overflowY: 'scroll'
                }}
            >
                {messages.map((msg, index) => (
                    <p key={index}>
                        <strong>{msg.user ? 'You:' : 'Bot:'}</strong> {msg.text}
                    </p>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={handleChange}
                placeholder="Type a message..."
                style={{ width: '400px', padding: '10px' }}
            />
            <button onClick={handleSend} style={{ padding: '10px' }}>Send</button>
        </div>
    );
};

export default Chatbot;
