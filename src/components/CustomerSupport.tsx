import { CustomerSupportIcon } from "../assets";

import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import config from '../../bot/config.js';
import MessageParser from '../../bot/MessageParser.js';
import ActionProvider from '../../bot/ActionProvider.js';
import { useState } from "react";

const CustomerSupport = () => {
  const [showBot, setShowBot] = useState(false)
  return (
    <div className="fixed bottom-[30px] right-[30px] lg:bottom-[60px] lg:right-[60px] z-50">
     


 {showBot ?   <Chatbot
    config={config}
    messageParser={MessageParser}
    actionProvider={ActionProvider}
    headerText={'Chat with SendBot'}
  />
:
<img
        onClick={()=>{setShowBot(true)}}
        src={CustomerSupportIcon}
        className="w-[70px] lg:w-[100px]"
        alt="Customer Support Icon"
        
      />}
    </div>

  );
};

export default CustomerSupport;
