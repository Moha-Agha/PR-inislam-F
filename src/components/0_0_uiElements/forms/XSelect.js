import React from "react";

const Select = ({ type, name, value = '', selectedValue = '', placeholder = '', classs, required = false, onChange, handleChange, options = '' }) => {

  let classesName = 'select ' + classs;
  let firstPlaceholder = { _id: 'DEFULT', slug: placeholder }
  let values;
  let hasValue = null
  // set value for edit case
  console.log(value + ' and the type of it is = ' + typeof value);
  if (typeof value === 'object' && value.length !== 0) {

    // validit to get snake case 
    hasValue = value.toLowerCase().replace(" ", "-")
    let isnum = hasValue.match(/^[0-9]+$/);

    // change hasValue to id 
    if (options.length !== 0 && isnum === null) {
      options.filter((option) => {
        if (option.slug === hasValue) hasValue = option._id
      })
    }
  }


  if (typeof options !== 'object') {
    options.length !== 0 && (values = options.split(','))
  } else {
    values = [firstPlaceholder, ...options]
  }

  return (
    <div className={classesName} >

      <select
        type={type}
        name={name}
        onChange={onChange}
        required={required}
        defaultValue={hasValue}
        multiple={false}
      >
        {/* {values.length !== 0 && values.map((val) => {
          return <option key={val} value={val} hidden={val.includes('*') ? true : false}>{val.replace('+', ' und ')}</option>
        })} */}
        {values.map((value) => {
          return <option
            key={value._id && value._id}
            value={value._id && value._id}
            selected={value._id === hasValue ? true : false}
            hidden={value.slug.includes('*') ? true : false}>
            {value.slug && value.slug}
          </option>
        })}
      </select>

    </div>
  )
};

export default Select;
