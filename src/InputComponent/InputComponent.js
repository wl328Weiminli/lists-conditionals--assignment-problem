import React from "react";

const InputComponent = (props) => {
  return (
    <div>
      <input type="text" onChange={props.changed} value={props.value} />
      <p>{props.value}</p>
      <p>length:{props.value.length}</p>
    </div>
  );
};

export default InputComponent;
