import React, { useState } from 'react';


const ImageItem = ({ image, deleteImage }) => {
  const {
    _id,
    date
  } = image;

  const [deleteUi, setDeleteUi] = useState(false)

  const DeleteButton = (id) => {
    deleteImage(id)
  }

  // article card ui if user want delete article
  const uiDeleteMessage = <>
    <i onClick={() => setDeleteUi(false)} className='aicon-x' />
    <div className="article-footer ">
      <button type='button' className="delete-button article-footer_sure-delete" onClick={() => DeleteButton(_id)} >Ja, ich möchte dem Artikel entfernen</button>
    </div>
  </>

  // article card ui
  const uiArticleCard = <>
    <div className="article-section">
      <p>{date.slice(8, 10) + '.' + date.slice(5, 7) + '.' + date.slice(0, 4)}</p>
    </div>
    <div className='article-image'>
      <img src={`http://localhost:5000/image/${_id}`} alt={_id} />
    </div>
    <div className="article-footer">
      <button type='button' className="delete-button" onClick={() => setDeleteUi(true)}><i className='aicon-trash' /></button>
    </div>
  </>

  return (
    <div className='article-card'>
      {deleteUi ? uiDeleteMessage : uiArticleCard}
    </div>
  )


};

export default ImageItem;
