import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:3000"; // Update if needed

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const [threadId, setThreadId] = useState<string | null>(null);

  useEffect(() => {
    // Create a new conversation thread in Flask

    if (threadId === null) {
      startConversation();
    }
  }, []);

  // Function to create a conversation thread
  const startConversation = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/thread`);
      setThreadId(response.data.thread_id);
      console.log("✅ Thread Created:", response.data.thread_id);
    } catch (error) {
      console.error("❌ Error creating thread:", error);
    }
  };

  // Function to send user messages
  const handleUserMessage = async (message: string) => {
    if (!threadId) {
      await startConversation();
    }

    try {
      // Send user message
      await axios.post(`${API_BASE_URL}/message`, {
        threadId,
        messageContent: message,
      });

      // Run assistant
      const runResponse = await axios.post(`${API_BASE_URL}/run`, {
        threadId,
      });

      console.log("🤖 Assistant running:", runResponse.data.run_id);

      // Poll for response (max 10 times)
      let botResponse = "Thinking...";
      for (let i = 0; i < 10; i++) {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait 2s
        const messagesResponse = await axios.get(
          `${API_BASE_URL}/messages/${threadId}`
        );
        const messages = messagesResponse.data;

        console.log(messages, "from response");

        if (messages?.content) {
          botResponse = messages.content;
          break;
        }
      }

      console.log(botResponse, "gotten from bke");

      // Create chatbot message and update state
      const chatbotMessage = createChatBotMessage(botResponse);
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, chatbotMessage],
      }));
    } catch (error) {
      console.error("❌ Error handling message:", error);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { handleUserMessage },
        });
      })}
    </div>
  );
};

export default ActionProvider;
