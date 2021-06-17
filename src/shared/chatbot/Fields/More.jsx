import React from "react";

import "./Fields.css";

const More = (props) => {
  const options = [
    {
      text: "Une Autre question",
      handler: props.actionProvider.handleMore,
      id: 1,
    },
    { text: "C'est tout ", handler: props.actionProvider.handleFinish, id: 2 },
  ];

  const optionsMarkup = options.map((option) => (
    <button className="Option-button" key={option.id} onClick={option.handler}>
      {option.text}
    </button>
  ));

  return <div className="Fields-container">{optionsMarkup}</div>;
};

export default More;
