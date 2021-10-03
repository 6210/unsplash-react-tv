import React, { useState } from 'react';
import { TopicsMenu } from '../../components/TopicsMenu/TopicsMenu';
import { PhotoGrid } from '../../components/PhotoGrid/PhotoGrid';
import './Home.css';

export const Home = () => {
  console.log(`HOME RENDERING`);

  const [selectedSlug, setSelectedSlug] = useState(undefined);

  const onTopicSelected = (topic) => {
    setSelectedSlug(topic.slug);
  };

  console.log(`Home selectedSlug: ${selectedSlug}`);

  return (
    <div className="Home">
      <div>
        <TopicsMenu onTopicSelected={onTopicSelected} />
      </div>
      <div>
        <PhotoGrid slug={selectedSlug} />
      </div>
    </div>
  );
};