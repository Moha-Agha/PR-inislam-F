import React from "react";

const Button = ({ value, type, className, useFunction, onSubmit, Loading = false }) => {
  let classesName = 'button ' + className;

  return (
    <div className={Loading ? classesName + ' button-disabled' : classesName} onClick={useFunction} >
      <input type={type} value={Loading ? ' معالجة... ' + value : value} />
    </div>
  );
};

export default Button;
