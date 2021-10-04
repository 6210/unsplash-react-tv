import React, { useCallback, useEffect, useState } from 'react';
import { api } from '../../api/api';
import { GridPhoto } from './Photo';

export const PhotoGrid = ( props ) => {
  const { slug, title, closeModal  } = props;

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

    <div className="TopicsPhotoList">
        <div className="TopicTitle" onClick={() => closeModal(true)}>
          <h3>{title}</h3>
        </div>

      <div className="PhotoGridWrapper">

          <div className="PhotoWrapper">
            {photos.length && photos.map((photo) => 
                <GridPhoto key={photo.id} photo={photo}/>
            )}
          </div>
      </div>
    </div>
  );
};