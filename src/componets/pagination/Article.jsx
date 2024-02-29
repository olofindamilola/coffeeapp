// Article.jsx
import React, { useState } from 'react';

const Article = ({ title, imageUrl, date, content }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className='article'>
        <div className="article-content">
            <img src={imageUrl} alt={title} />
            <h2>{title}</h2>
            <p className='date'>{date}</p>
            <p>{showFullContent ? content : `${content.slice(0, 20)}...`}</p>
            <button className='readMore' onClick={toggleContent}>
            {showFullContent ? 'Read Less' : 'Read More'}
            </button>
      </div>
    </div>

        
      
  );
}

export default Article;
