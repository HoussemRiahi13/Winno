import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar/BotAvatar";
import Fields from "./Fields/Fields";
import More from "./Fields/More";
import Pet from "./Fields/Pet";
const config = {
  botName: "WinnolBot",
  initialMessages: [
    createChatBotMessage(
      "Salut, je suis là pour vous aider. dans Quels domaines avez-vous besoin d'aide? ",
      {
        widget: "Fields",
        delay: 500,
      }
    ),
  ],

  widgets: [
    {
      widgetName: "Fields",
      widgetFunc: (props) => <Fields {...props} />,
    },
    {
      widgetName: "Pet",
      widgetFunc: (props) => <Pet {...props} />,
    },
    {
      widgetName: "More",
      widgetFunc: (props) => <More {...props} />,
    },
  ],

  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },

  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
};
export default config;
