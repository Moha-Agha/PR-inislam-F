import React from "react";
import { Link } from 'react-router-dom';

const SectionsTag = ({ id, goTo, title = '', slug = '', articleNumber = '', className = '' }) => {
  let allClasses = `sections-tag ${className}`
  return (
    <Link to={goTo !== undefined ? goTo : `/section/${slug}`} className={allClasses}>
      {articleNumber && articleNumber ? <span className="sections-tag_number">{articleNumber}</span> : null}
      <span className="sections-tag_title">{title}</span>
    </Link>
  );
};

export default SectionsTag;


