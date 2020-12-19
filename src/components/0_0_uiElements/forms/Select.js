import React from "react";

const Select = ({ classs, type, name, onChange, required = false, currentValue = '', value = '', placeholder = '', handleChange, options = '' }) => {
  let classesName = 'select ' + classs;

  return (
    <div className={classesName} >
      <label htmlFor={name}>{placeholder}</label>
      <select
        type={type}
        name={name}
        onChange={onChange}
        required={required}
        defaultValue={currentValue}
        multiple={false}
      >

        {options.map((value) => {
          return <option
            key={value._id}
            value={value._id}>
            {value.slug}
          </option>
        })}
      </select>

    </div>
  )
};

export default Select;


