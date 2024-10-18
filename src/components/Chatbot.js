import React, { useState } from 'react';
import './Chatbot.css';
import axios from 'axios';

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
    try {
      const dialogflowResponse = await axios.post(
        'https://dialogflow.googleapis.com/v2/projects/YOUR_PROJECT_ID/agent/sessions/YOUR_SESSION_ID:detectIntent',
        {
          queryInput: {
            text: {
              text: input,
              languageCode: 'en',
            },
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer YOUR_DIALOGFLOW_API_TOKEN`,
          },
        }
      );

      const botReply =
        dialogflowResponse.data.queryResult.fulfillmentText || 'Sorry, I did not understand that.';
      setMessages((msgs) => [...msgs, { author: 'bot', text: botReply }]);
    } catch (error) {
      console.error('Error communicating with Dialogflow API', error);
      setMessages((msgs) => [
        ...msgs,
        { author: 'bot', text: 'There was an error connecting to the server.' },
      ]);
    }
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
