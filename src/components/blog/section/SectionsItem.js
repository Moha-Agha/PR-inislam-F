import React from "react";
import { Link } from 'react-router-dom';

const SectionsItem = ({ sectionTitle = 'عنوان القسم', sectionSlug = '', articleCount = '2' }) => {

  return (
    <Link to={`/section/${sectionSlug}`} className='sections-item'>
      {sectionTitle}
      <div className='sections-item_line'></div>
      <div className='sections-item_article-count'>عدد المقالات : {articleCount} مقال</div>
    </Link>
  )
};

export default SectionsItem;
