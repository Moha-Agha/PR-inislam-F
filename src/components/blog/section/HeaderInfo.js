import React from "react";

const HeaderInfo = ({ title = '', description = '' }) => {

  return (
    <div className="header-info">
      <h2>Section articles</h2>
      <h1>{title}</h1>
      <p>{description} </p>
    </div>
  );
};

export default HeaderInfo;
