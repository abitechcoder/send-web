import React, { useEffect } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const ChatbotComponent = () => {
  useEffect(() => {
    // Create a new conversation thread in Flask
    const createThread = async () => {
      const response = await fetch("https://6965dc6d-d6ca-41be-a43c-b9ca52b263dd-00-noft5d6e43yv.picard.replit.dev/start");
     
     console.log(response)
      const data = await response.json();
      localStorage.setItem("thread_id", data.thread_id);
    };

    if (!localStorage.getItem("thread_id")) {
      createThread();
    }
  }, []);

  return <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />;
};

export default ChatbotComponent;
