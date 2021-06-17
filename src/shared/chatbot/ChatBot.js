import React from 'react';
import Chatbot from 'react-chatbot-kit';
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";
import styled from 'styled-components';
import { IconButton } from "@material-ui/core";
const Container = styled.div`
  z-index:9;
  width: 20% ;
  position:fixed;
  bottom:1vmin;
  right:1vmin;
  display:flex;
  align-items:center;
  justify-content:space-between;
`
const ChatContainer = styled.div`
z-index:9;

 
 position:absolute;
 right: 10vmin;
 bottom:1vmin;
`
function MyChatBot() {
    const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(!showResults);
    return (
        <Container>
        <button onClick={onClick} className="button">
       
      </button>
      {showResults ? (
        <ChatContainer>
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
        </ChatContainer>
      ) : null}
      </Container>
    )
}

export default MyChatBot
