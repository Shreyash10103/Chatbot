import React, { useState, useEffect } from 'react';
import BotMessage from "./components/BotMessage";
import UserMessage from "./components/UserMessage";
import Messages from "./components/Messages";
import Input from "./components/Input";
import API from "./ChatbotAPI"; // Import the API
import "./styles.css";
import Header from "./components/Header";
import Sidebar from './Sidebar';

function Chatbot() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadWelcomeMessage() {
      try {
        const response = await API.GetChatbotResponse();
        setMessages([
          <BotMessage
            key="0"
            message={response.data.message}
            table={response.data.table}
            code={response.data.code}
          />
        ]);
      } catch (error) {
        console.error('Error fetching welcome message:', error);
      }
    }
    loadWelcomeMessage();
  }, []);

  const send = async text => {
    const userMessage = <UserMessage key={messages.length} text={text} />;
    setMessages(prevMessages => [...prevMessages, userMessage]);

    try {
      const response = await API.PostUserMessage(text);
      const botMessage = (
        <BotMessage key={messages.length + 1} message={response.data.message} code={response.data.code} table={response.data.table} />
      );
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error posting user message:', error);
      const errorMessage = (
        <BotMessage key={messages.length + 1} message="Failed to send message" />
      );
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    }
  };

  return (
    <>
      <Sidebar />
      <div className="chatbot">
        <Header />
        <Messages messages={messages} />
        <Input onSend={send} />
      </div>
    </>
  );
}

export default Chatbot;
