// Dashboard.js
import React, { useEffect, useState } from 'react';
import VideoItem from './VideoItem';
import Navbar from './Navbar';
import './Dashboard.css'; // Main styles for layout

const Dashboard = () => {
  const [videos, setVideos] = useState([]);
  
  // You can replace this with an API call or use an array of video objects
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('YOUR_TIKTOK_API_URL'); // replace with API endpoint
        const data = await response.json();
        setVideos(data.videos); // Make sure your API returns this structure
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
    fetchVideos();
  }, []);

  const handleLike = (id) => {
    console.log('Liked video with id:', id);
    // You can update the video object with the liked state here
  };

  return (
    <div className="dashboard">
      <Navbar />
      <div className="video-list">
        {videos.map((video) => (
          <VideoItem key={video.id} video={video} onLike={() => handleLike(video.id)} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
