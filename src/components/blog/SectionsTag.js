import React from "react";
import { Link } from 'react-router-dom';

const SectionsTag = ({ id, title = '', slug = '', articleNumber = '' }) => {
  return (
    <Link to={`/section/${slug}`} className="sections-tag">
      {articleNumber && articleNumber ? <span className="sections-tag_number">{articleNumber}</span> : null}
      <span className="sections-tag_title">{title}</span>
    </Link>
  );
};

export default SectionsTag;


