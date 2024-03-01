import React, { useState } from 'react';
import './article.scss';

const Article = ({ title, imageUrl, published, content }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className='article'>
        <div className="img-container">
            <img src={imageUrl} alt={title} />
        </div>
        <div className="article-content">
            <h3>{title}</h3>
            <h6 className='date'>{published}</h6>
            <h5>{showFullContent ? content : `${content.slice(0, 80)}...`}</h5>
            <button className='readMore' onClick={toggleContent}>
            {showFullContent ? 'Read Less' : 'Read More'}
            </button>
      </div>
    </div>

        
      
  );
}

export default Article;
