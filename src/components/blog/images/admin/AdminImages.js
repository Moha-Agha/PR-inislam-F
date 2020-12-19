import React, { useContext, useEffect } from 'react';
import ImageContext from '../../../../context/image/imageContext';

import ImageItem from './ImageItem';
import Preloader from '../../../0_1_layout/Preloader';

const AdminImages = () => {

  const imageContext = useContext(ImageContext)
  const { getImages, deleteImage, images } = imageContext;

  useEffect(() => {
    getImages()
    // eslint-disable-next-line 
  }, []);

  if (images !== null) {
    return (
      <div className="container">
        <div className="admin-article">
          {images.length !== 0 ? images.map(image => (<ImageItem key={image._id} image={image} deleteImage={deleteImage} />)) : <h3>No article</h3>}
        </div>
      </div>
    )
  } else {
    return (<Preloader />)
  }

};

export default AdminImages;
