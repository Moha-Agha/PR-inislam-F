import React from "react";

const Input = ({ id, type, name, value, placeholder, classs, required, onChange, handleChange }) => {
  let classesName = 'input ' + classs;
  return (
    <div className={classesName} >
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Input;
