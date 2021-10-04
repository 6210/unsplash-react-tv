import React from 'react'

export const TopicsMenu = (props) => {
  const { onTopicSelected, topics } = props;

  return (
    <div className="TopicsMenuList">
      <div className="TopicsMenuWrapper">
        {topics.length && topics.map((topic) => 
          <div className="TopicsMenuItem">
            <div 
                className="TopicsMenuListItem"
                key={topic.id}
                onClick={() => 
                  onTopicSelected(topic)
                }
              > 
              <div className="TopicsMenuDAlign">
                    <div className="topicSelectImage" key={topic.id}>
                       <div className="TopicsMenuDisplay">{topic.title}</div>
                      <div className="MenuverOlay"></div>
                    </div>
                </div>
            </div>
            </div>
        )}
      </div>
    </div>
  )
};