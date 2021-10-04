import React, { useState, useEffect, useCallback } from 'react';
import { TopicsMenu } from '../../components/TopicsMenu/TopicsMenu';
import { TopicsOpenBtn } from '../../components/TopicsMenu/TopicsOpenBtn';
import { PhotoGrid } from '../../components/PhotoGrid/PhotoGrid';
import { Loader } from '../../components/Loader';
import { api } from '../../api/api';
import './Home.css';

export const Home = () => {
  
  const [topicsData, setTopicsData] = useState({
    page: 1,
    topics: [],
  });

  const [selectedSlug, setSelectedSlug] = useState(undefined);
  const [selectedTitle, setSelectedTitle] = useState(undefined);
  const [openModal, setOpenNav] = useState(true);

  const { topics } = topicsData;

  const fetchTopics = useCallback((page) => {
    api.topics.list({ page: page })
      .then(data => {
        if (data) {
          let topics = data.response.results;
          setTopicsData({ topics: topics });
        }
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchTopics(1);
  }, [fetchTopics]);

  useEffect(() => {
    if(topicsData.topics.length > 0 && !selectedSlug){
      const topic = topicsData.topics[0]
      setSelectedSlug(topic.slug);
      setSelectedTitle(topic.title);
    }
  },[topicsData, selectedSlug]);

  const onTopicSelected = (topic) => {
    setSelectedSlug(topic.slug);
    setSelectedTitle(topic.title);
    setOpenNav(false);
  };

  const renderContent = () => {
    return (
      <>
        {openModal && 
          <TopicsMenu 
            topics={topics}
            closeModal={setOpenNav}
            onTopicSelected={onTopicSelected} 
          />
        }
        {openModal || 
          <TopicsOpenBtn 
            closeModal={setOpenNav}
          />
        }
        <PhotoGrid 
            topics={topics}
            closeModal={setOpenNav}
            slug={selectedSlug} 
            title={selectedTitle}
        />
      </>
    );
  }

  const renderLoading = () => {
    return (
      <Loader />
    )
  }

  console.log(`Home selectedSlug: ${selectedSlug}`);

  return (
    <div className="HomeWrapper">
      {topics.length === 0 ? renderLoading() : renderContent()}
    </div>
  );
};