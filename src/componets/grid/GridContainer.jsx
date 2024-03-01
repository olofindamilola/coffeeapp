import React from 'react';

const GridContainer = ({ title, items }) => {
  return (
    <div className="grid-container">
      <h2>{title}</h2>
      <div className="grid">
        {items.map((item, index) => (
          <div key={index} className="grid-item">
            <h3>{item.sub}</h3>
            <p>{item.description}</p>
            {item.imageURL && item.imageURL.map((image, imageIndex) => (
              <img key={imageIndex} src={image} alt={`Image ${imageIndex + 1}`} />
            ))}
            <h6>{item.description1}</h6>
            <h6>{item.address}</h6>
            <h6>{item.number}</h6>
            <h6>{item.cvr}</h6>
            <h6>{item.email}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridContainer;
