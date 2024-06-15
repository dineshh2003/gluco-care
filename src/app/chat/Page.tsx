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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 m-3">
            <h1 className="text-2xl font-bold mb-4">Diabetes Chatbot</h1>
            <div
                id="chatbox"
                className="w-full max-w-md h-96 bg-white border border-gray-300 rounded-lg p-4 overflow-y-scroll shadow-lg"
            >
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex mb-2 ${msg.user ? 'justify-end' : 'justify-start'}`}
                    >
                        <p
                            className={`px-4 py-2 rounded-lg ${msg.user ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                        >
                            <strong>{msg.user ? 'You:' : 'Bot:'}</strong> {msg.text}
                        </p>
                    </div>
                ))}
            </div>
            <div className="flex mt-4 w-full max-w-md">
                <input
                    type="text"
                    value={input}
                    onChange={handleChange}
                    placeholder="Type a message..."
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                    onClick={handleSend}
                    className="bg-green-500 text-white px-4 py-2 rounded-r-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
