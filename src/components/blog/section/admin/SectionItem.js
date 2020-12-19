import React, { useState, useContext } from 'react';
import { Link, useHistory } from "react-router-dom";

import sectionContext from '../../../../context/section/sectionContext';

const SectionItem = ({ section }) => {
  let history = useHistory();

  const SectionContext = useContext(sectionContext)
  const { setCurrentSection, deleteSection } = SectionContext;

  const {
    _id,
    slug,
    title,
    description,
    date
  } = section;
  const [deleteUi, setDeleteUi] = useState(false)

  const EditButton = (section) => {
    setCurrentSection(section)
    history.push(`edit-section`)
  }

  const DeleteButton = (id) => {
    deleteSection(id);
  }

  // article card ui if user want delete article
  const uiDeleteMessage = <>
    <i onClick={() => setDeleteUi(false)} className='aicon-x' />
    <div className="article-footer ">
      <button type='button' className="delete-button article-footer_sure-delete" onClick={() => DeleteButton(_id)} >Ja, ich möchte dem Section entfernen</button>
    </div>
  </>

  // section card ui
  const uiArticleCard = <>
    <div className="article-section">
      <p>{date.slice(8, 10) + '.' + date.slice(5, 7) + '.' + date.slice(0, 4)}</p>
    </div>
    <p className="article-title"><Link to={`/section/${slug}`}>{title}</Link></p>
    <p className="article-subtitle">{description}</p>

    <div className="article-footer">
      <button type='button' className="edit-button" onClick={() => EditButton(section)}><i className='aicon-pencil' /></button>
      <button type='button' className="delete-button" onClick={() => setDeleteUi(true)}><i className='aicon-trash' /></button>
    </div>
  </>

  return (
    <div className='article-card'>
      {deleteUi ? uiDeleteMessage : uiArticleCard}
    </div>
  )


};

export default SectionItem;
