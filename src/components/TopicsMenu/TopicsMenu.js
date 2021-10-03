import React from 'react'

export const TopicsMenu = (props) => {
  const { onTopicSelected, topics } = props;

  return (
    <div>
      {topics.length && topics.map((topic) => 
        <div 
            key={topic.id}
            onClick={() => 
              onTopicSelected(topic)
            }
          > 
          <div>{topic.title}</div>
          <img src={topic.cover_photo.urls.thumb} alt={topic.cover_photo.alt_description} />
        </div>)
      }
    </div>
  );
};