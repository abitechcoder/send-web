import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.trim()) {
      actions.handleUserMessage(message); // Send message to backend
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
