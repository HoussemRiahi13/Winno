import React from "react";

import "./Fields.css";

const Fields = (props) => {
  const options = [
    { text: "Aliments", handler: props.actionProvider.handleFood, id: 1 },
    { text: "Santé", handler: props.actionProvider.handleSante, id: 1, id: 2 },
    { text: "Comportement", handler: () => {}, id: 3 },
    { text: "Vétérinaires", handler: () => {}, id: 4 },
    { text: "Sécurité", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button className="Option-button" key={option.id} onClick={option.handler}>
      {option.text}
    </button>
  ));

  return <div className="Fields-container">{optionsMarkup}</div>;
};

export default Fields;
