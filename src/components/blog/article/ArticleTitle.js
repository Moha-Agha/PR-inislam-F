import React from "react";

const ArticleTitle = ({ title, subtitle }) => {
  return (
    <div className="article_title">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default ArticleTitle;
