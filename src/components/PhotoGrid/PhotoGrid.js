import React, { useCallback, useEffect, useState } from 'react';
import { api } from '../../api/api';
import { GridPhoto } from './GridPhoto';

export const PhotoGrid = ( props ) => {
  const { slug, title, closeModal } = props;

  const [photosData, setPhotosData] = useState({
    topicIdOrSlug: slug,
    photos: [],
  });

  const { photos } = photosData;

  const fetchPhotos = useCallback((slug ) => {
    // !!boolean + && Logical/OR operator
    // useEffect
    // useCallback
    !!slug && api.topics.getPhotos({ topicIdOrSlug: slug })
      .then(data => {
        if (data) {
          let photos = data.response.results;
          setPhotosData({ photos: photos });
        }
      });
  }, []);

  useEffect(() => {
    fetchPhotos(slug);
  }, [fetchPhotos, slug]);

  return (
    <div className="grid-photo-wrapper">
        <h3>{title}</h3>

        {/* If open  */}
        <button onClick={() => closeModal(true)}> Browse Topics </button>
        {/* hide this */}

        {photos.length && photos.map((photo) => 
          <GridPhoto key={photo.id} photo={photo}/>
        )}
    </div>
  );
};