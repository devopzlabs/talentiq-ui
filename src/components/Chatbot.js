import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    if (input.trim() !== '') {
      setMessages([...messages, { author: 'user', text: input }]);
      await generateBotResponse(input);
      setInput('');
    }
  };

  const generateBotResponse = async (input) => {
    // Assuming server-side API integration for response
    setMessages((msgs) => [...msgs, { author: 'bot', text: 'This is a static response.' }]);
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button onClick={handleToggleOpen} className="chatbot-toggle">
        {isOpen ? 'Close Chat' : 'TalentIQ Agent Chat'}
      </button>

      {isOpen && (
        <div className="chatbot">
          <div className="chat-window">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.author}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;