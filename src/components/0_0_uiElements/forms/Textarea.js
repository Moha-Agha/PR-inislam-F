import React from "react";

const Textarea = ({ id, type, name, value, placeholder, classs, required, onChange, handleChange }) => {
  let classesName = 'textarea ' + classs;
  return (
    <textarea
      className={classesName}
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    >


    </textarea>
  );
};

export default Textarea;
