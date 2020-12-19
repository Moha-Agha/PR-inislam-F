import React from "react";

const Breadcrumb = ({ title, slug }) => {
  return (
    <div className="breadcrumb">
      <a href="/" className="breadcrumb_first">Startseite </a>
      /
      <a href={`/section/${slug}`} className="breadcrumb_second">{title}</a>
    </div>
  );
};

export default Breadcrumb;
