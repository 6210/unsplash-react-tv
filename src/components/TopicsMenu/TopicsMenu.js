import React, { useCallback, useEffect, useState } from 'react';
import { api } from '../../api/api';

export const TopicsMenu = (props) => {
  const { onTopicSelected } = props;

  const [topicsData, setTopicsData] = useState({
    page: 1,
    topics: [],
  });

  const { topics } = topicsData;

  const fetchTopics = useCallback((page) => {
    api.topics.list({ page: page })
      .then(data => {
        if (data) {
          let topics = data.response.results;
          setTopicsData({ topics: topics });
          onTopicSelected(topics[0]);
        }
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchTopics(1);
  }, [fetchTopics]);

  return (
    <div>
      <ul>
        {topics.length && topics.map((topic) => 
          <div key={topic.id} onClick={() => onTopicSelected(topic)}>{topic.title}</div>)
        }
      </ul>
    </div>
  );
};