import { createChatBotMessage } from "react-chatbot-kit";

const botName = "Neogym Assistant";

const config = {
  initialMessages: [createChatBotMessage(`Hi! How can I assist you today?`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
