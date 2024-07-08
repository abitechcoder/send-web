import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const greetings = /hello|hi|hey|howdy|greetings|what's up|good (morning|afternoon|evening|day)/i;
    if (greetings.test(message)) {
      actions.handleHello();
    } else if (message.includes('send')) {
      actions.sendHistory();
    } else if (message.includes('mission')) {
      actions.handleMission();
    } else if (message.includes('programs')) {
      actions.handlePrograms();
    } else if (message.includes('regions')) {
      actions.handleRegions();
    } else if (message.includes('ngo')) {
      actions.handleNGOInfo();
    } else if (message.includes('contact')) {
      actions.handleContact();
    }
    else {
      actions.handleDefault();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
