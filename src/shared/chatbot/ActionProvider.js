class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  greet() {
    const greetingMessage = this.createChatBotMessage("Bienvenue");
    this.updateChatbotState(greetingMessage);
  }
  handleSante = () => {
    const message = this.createChatBotMessage(
      "Fantastique, allons plus loin, avez-vous un chien courageux ou un chat mignon? ",
      {
        widget: "Pet",
        delay: 500,
      }
    );

    this.updateChatbotState(message);
  };
  handleCat = () => {
    const message = this.createChatBotMessage(
      "Oww, un chat mignon, comment puis-je vous aider?"
    );

    this.updateChatbotState(message);
  };
  handleDog = () => {
    const message = this.createChatBotMessage(
      "Oww, un Doggi, comment puis-je vous aider? "
    );

    this.updateChatbotState(message);
  };
  handleMore = () => {
    const message = this.createChatBotMessage(
      "T'es le bienvenue .. allez posez votre question j'attend"
    );

    this.updateChatbotState(message);
  };
  handleFinish = () => {
    const message = this.createChatBotMessage("T'es le bienvenue .. Merci ");

    this.updateChatbotState(message);
  };
  handleVac = () => {
    const message = this.createChatBotMessage(
      "les chatons sont généralement vaccinés à huit et dix semaines, la deuxième dose étant généralement administrée deux à quatre semaines plus tard. \
      Les vaccinations de routine ou de base protégeront votre chaton des maladies les plus courantes: panleucopénie, rhinotrachéite virale féline (herpès virus félin 1), calicivirus et rage",
      {
        widget: "More",
        delay: 500,
      }
    );

    this.updateChatbotState(message);
  };
  handleVermifuger = () => {
    const message = this.createChatBotMessage(
      "Au moins tous les 3 mois. Selon le mode de vie de votre animal, une vermifugation plus régulière peut être nécessaire et il est recommandé d'en discuter avec votre vétérinaire si vous êtes inquiet.",
      {
        widget: "More",
        delay: 500,
      }
    );

    this.updateChatbotState(message);
  };
  handleDefault = () => {
    const message = this.createChatBotMessage(
      " Je suis toujours un robot, je ne vous ai pas bien compris .. pouvez vous me clarifier ton besoin ",
      {
        widget: "Fields",
        delay: 500,
      }
    );

    this.updateChatbotState(message);
  };
  updateChatbotState(message) {
    // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,

      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
