import React, { useCallback, useEffect, useState } from 'react';
import { api } from '../../api/api';

export const PhotoGrid = (props) => {
  const { slug } = props;

  const [photosData, setPhotosData] = useState({
    topicIdOrSlug: slug,
    photos: [],
  });

  const { photos } = photosData;

  const fetchPhotos = useCallback((slug) => {
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
    <div>
      <ul>
        {photos.length && photos.map((photo) => <img key={photo.id} src={photo.urls.thumb} alt={photo.description} />)}
      </ul>
    </div>
  );
};