// LikeButton.js
import React from 'react';
import './LikeButton.css';

const LikeButton = ({ onLike }) => {
  return (
    <button className="like-button" onClick={onLike}>
      ❤️
    </button>
  );
};

export default LikeButton;
