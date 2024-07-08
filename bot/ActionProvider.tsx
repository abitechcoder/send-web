import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const createAndSetBotMessage = (text) => {
    const botMessage = createChatBotMessage(text);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleHello = () => {
    createAndSetBotMessage('Hello. Nice to meet you.');
  };

  const sendHistory = () => {
    createAndSetBotMessage('SEND-Sierra Leone is a non-governmental organization officially registered with the Ministry of Finance and Economic Development of the Republic of Sierra Leone. Our mission is to help create a Sierra Leone where the rights and well-being of its people are assured. We are a local NGO firmly rooted in Sierra Leone, focusing on a diverse range of initiatives including community development, WaSH (Water, Sanitation, and Hygiene), healthcare, nutrition and agriculture, climate change adaptation, gender-transformative practices, and the empowerment of women. Our interventions span across various regions in Sierra Leone.');
  };

  const handleMission = () => {
    createAndSetBotMessage('Our mission is to help create a Sierra Leone where the rights and well-being of its people are assured.');
  };

  const handlePrograms = () => {
    createAndSetBotMessage('We focus on a diverse range of initiatives including community development, WaSH (Water, Sanitation, and Hygiene), healthcare, nutrition and agriculture, climate change adaptation, gender-transformative practices, and the empowerment of women.');
  };

  const handleRegions = () => {
    createAndSetBotMessage('Our interventions span across various regions in Sierra Leone.');
  };

  const handleNGOInfo = () => {
    createAndSetBotMessage('SEND Sierra Leone is a non-governmental organization officially registered with the Ministry of Finance and Economic Development of the Republic of Sierra Leone.');
  };

  const handleContact = () => {
    createAndSetBotMessage('You can contact SEND Sierra Leone at their office or through their official website for more information.');
  };

  const handleDefault = () => {
    const botMessage = createChatBotMessage(
      "I'm sorry, I didn't understand that. Here are some things you can ask me about SEND Sierra Leone:",
      {
        widget: "possibleQuestions",
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const possibleQuestions = [
    "Tell me about SEND Sierra Leone",
    "What is SEND Sierra Leone's mission?",
    "What programs does SEND Sierra Leone have?",
    "Which regions does SEND Sierra Leone operate in?",
    "Can you give me information about SEND Sierra Leone as an NGO?",
    "How can I contact SEND Sierra Leone?"
  ];

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            sendHistory,
            handleMission,
            handlePrograms,
            handleRegions,
            handleNGOInfo,
            handleContact,
            handleDefault
          },
          widgets: {
            possibleQuestions,
          }
        });
      })}
    </div>
  );
};

export default ActionProvider;
