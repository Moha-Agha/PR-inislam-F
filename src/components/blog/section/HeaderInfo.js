import React from "react";

const HeaderInfo = ({ title = '', description = '' }) => {

  return (
    <div className="header-info">
      <h2>مقالات قسم</h2>
      <h1>{title}</h1>
      <p>{description} </p>
    </div>
  );
};

export default HeaderInfo;
