// Article.jsx
import React, { useState } from 'react';

const Article = ({ title, imageUrl, date, content }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className='article'>
      <img src={imageUrl} alt={title} />
      <div className="article-content">
        <h2>{title}</h2>
        <p className='date'>{date}</p>
        <p>{showFullContent ? content : `${content.slice(0, 20)}...`}</p>
        <button className='readMore' onClick={toggleContent}>
          {showFullContent ? 'Read Less' : 'Read More'}
        </button>

        <div className='side-grid'>
            <div className="shop">
                <h1>WBC Shop</h1>
                <h6>Your shopping cart is empty</h6>
                <button>Vist the shop</button>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Article;
