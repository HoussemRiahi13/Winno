import React from "react";

import "./Fields.css";

const Pet = (props) => {
  const options = [
    { text: "Chat", handler: props.actionProvider.handleCat, id: 1 },
    { text: "Chien", handler: props.actionProvider.handleDog, id: 2 },
  ];

  const optionsMarkup = options.map((option) => (
    <button className="Option-button" key={option.id} onClick={option.handler}>
      {option.text}
    </button>
  ));

  return <div className="Fields-container">{optionsMarkup}</div>;
};

export default Pet;
