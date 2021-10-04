import React from 'react'

export const TopicsMenu = (props) => {
  const { onTopicSelected, topics } = props;

  return (
    <div className="TopicsMenuList">
      <div className="TopicsMenuWrapper">
        {topics.length && topics.map((topic) => 
          <div
              key={topic.id} 
              className="TopicsMenuItem"
              onClick={() => 
                onTopicSelected(topic)
              }
            > 
            <div className="TopicsMenuDisplay">{topic.title}</div>
            <div className="topicSelectImage">
                <img src={topic.cover_photo.urls.thumb} alt={topic.cover_photo.alt_description} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
};