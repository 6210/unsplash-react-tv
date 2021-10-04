import React from 'react'
import SpanLogo from './img/span-logo.svg';

export const TopicsMenu = (props) => {
  const { onTopicSelected, topics } = props;

  return (
    <div className="TopicsMenuList">
      <div className="TopicsMenuWrapper">
        <a href="https://spandigital.com/" rel="noreferrer" target="_blank">
            <div className="LogoWrapper">
              <img src={SpanLogo}  alt="Span Digital" className="SpanLogo" />
            </div>
        </a>
        {topics.length && topics.map((topic) => 
          <div
              key={topic.id} 
              className="TopicsMenuItem"
              onClick={() => 
                onTopicSelected(topic)
              }
            > 
            <div className="TopicsMenuDisplay">{topic.title}</div>
            <div className="TopicSelectImage">
                <img src={topic.cover_photo.urls.thumb} alt={topic.cover_photo.alt_description} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
};