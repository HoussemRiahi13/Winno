class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (
      lowerCaseMessage.includes("bonjour") ||
      lowerCaseMessage.includes("bonsoir")
    ) {
      return this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("sante")) {
      return this.actionProvider.handleSante;
    }
    if (lowerCaseMessage.includes("chat")) {
      return this.actionProvider.handleCat();
    }
    if (lowerCaseMessage.includes("chien")) {
      return this.actionProvider.handledog();
    }
    if (
      lowerCaseMessage.includes(
        "quand devrais-je avoir ma première vaccination"
      ) ||
      lowerCaseMessage.includes("première vaccination")
    ) {
      return this.actionProvider.handleVac();
    }
    if (
      lowerCaseMessage.includes("À quelle fréquence dois-je vermifuger ?") ||
      lowerCaseMessage.includes("vermifuger") ||
      lowerCaseMessage.includes("fréquence vermifuger")
    ) {
      return this.actionProvider.handleVermifuger();
    }
    return this.actionProvider.handleDefault();
  }
}

export default MessageParser;
