// VideoItem.js
import React from 'react';
import './VideoItem.css'; // Assuming you will write the styles separately

const VideoItem = ({ video, onLike }) => {
  return (
    <div className="video-item">
      <video
        className="video-player"
        src={video.videoUrl}
        controls
        autoPlay
        loop
      />
      <div className="video-info">
        <h3>{video.title}</h3>
        <p>{video.author}</p>
      </div>
      <button className="like-button" onClick={onLike}>
        ❤️
      </button>
    </div>
  );
};

export default VideoItem;
