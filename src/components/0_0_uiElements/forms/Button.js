import React from "react";

const Button = ({ value, type, className, useFunction, onSubmit }) => {
  let classesName = 'button ' + className;

  return (
    <div className={classesName} onClick={useFunction} >
      <input type={type} value={value} />
    </div>
  );
};

export default Button;
