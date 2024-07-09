// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';


const botName = 'Send Bot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! How can I help?`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
    widgets: [
      {
        widgetName: 'dogPicture',
        // Widget: (props) => <ActionProvider {...props} />
      },
    ],
  },
};

export default config;