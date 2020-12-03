import React from "react";

const ValidationComponent = (props) => {
  let message = "text too short";
  if (props.length > 5) {
    message = "text too long";
  }
  return <div>{message}</div>;
};

export default ValidationComponent;
