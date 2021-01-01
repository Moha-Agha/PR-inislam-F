import React from 'react';

const NewMuslimItem = ({ emailItem }) => {

  const {
    email,
    date
  } = emailItem;

  // email card ui
  const uiEmailCard = <>
    <div className="article-section">
      <p>{date.slice(8, 10) + '.' + date.slice(5, 7) + '.' + date.slice(0, 4)}</p>
    </div>
    <p className="article-title">{email}</p>

  </>

  return (
    <div className='article-card'>
      { uiEmailCard}
    </div>
  )


};

export default NewMuslimItem;
