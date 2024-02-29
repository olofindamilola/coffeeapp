import React from 'react'
import Pagination from '../pagination/Pagination'
import Article from '../pagination/Article'
import { useState } from 'react';
import './articles.scss';

import img1 from "../../images/instagram-image-1.png";
import img2 from "../../images/instagram-image-2.png";
import img3 from "../../images/instagram-image-3.png";
import img4 from "../../images/instagram-image-4.png";
import img5 from "../../images/instagram-image-5.png";
import img6 from "../../images/instagram-image-6.png";
import img7 from "../../images/instagram-image-7.png";
import img8 from "../../images/instagram-image-8.png";
import img9 from "../../images/instagram-image-9.png";

const articlesData = [
    {
        imageUrl: img1,
        published: "published 12/07/2021",
        title: "Wondeful Copenhagen 2021",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut morbi tincidunt augue interdum velit euismod in."
    },
    {
        imageUrl: img2,
        published: "published 12/07/2021",
        title: "Wondeful Copenhagen 2021",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut morbi tincidunt augue interdum velit euismod in."
    },
    {
        imageUrl: img3,
        published: "published 12/07/2021",
        title: "Wondeful Copenhagen 2021",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut morbi tincidunt augue interdum velit euismod in."
    },
    {
        imageUrl: img4,
        published: "published 12/07/2021",
        title: "Wondeful Copenhagen 2021",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut morbi tincidunt augue interdum velit euismod in."
    },
    {
        imageUrl: img5,
        published: "published 12/07/2021",
        title: "Wondeful Copenhagen 2021",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut morbi tincidunt augue interdum velit euismod in."
    },
    {
        imageUrl: img6,
        published: "published 12/07/2021",
        title: "Wondeful Copenhagen 2021",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut morbi tincidunt augue interdum velit euismod in."
    },
    {
        imageUrl: img7,
        published: "published 12/07/2021",
        title: "Wondeful Copenhagen 2021",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut morbi tincidunt augue interdum velit euismod in."
    },
    {
        imageUrl: img8,
        published: "published 12/07/2021",
        title: "Wondeful Copenhagen 2021",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut morbi tincidunt augue interdum velit euismod in."
    },
    {
        imageUrl: img9,
        published: "published 12/07/2021",
        title: "Wondeful Copenhagen 2021",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut morbi tincidunt augue interdum velit euismod in."
    },
    
]

const Articles = () => {
    const articlesPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articlesData.slice(indexOfFirstArticle,  indexOfLastArticle)

    const totalPages = Math.ceil(articlesData.length / articlesPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  return (
    
    <div className='app'>
        <div className="articles-container">
            {currentArticles.map((article, index) => (
                <Article key={index} imageUrl={article.imageUrl} title={article.title} published={article.published} content={article.content}/>
            ))}
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
        </div>
        

        <div className="side-grid">
        
        <div className="shop">
          <h1>WBC Shop</h1>
          <h6>Your shopping cart is empty</h6>
          <button>Vist the shop</button>
        </div>

        <div className="event">
          <h1>Next event</h1>
          <h2>World Barista Cup 2021</h2>
          <p>Copenhagen Denmark</p>
          <p>Dates: 25th-27th August 2011</p>
          <p>Theme: SENSORY</p>
          <button>Sign up now</button>
        </div>

        <div className="scoreboard">
          <h1>Scoreboard</h1>
          <h2>List of winners from last year</h2>
          <ol>
            <li>2021 - ?</li>
            <li>2020 - Denmark</li>
            <li>2021 - Sweden</li>
            <li>2021 - Turkey</li>
            <li>2021 - Italy</li>
            <li>2021 - Canada</li>
            <li>2021 - Germany</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Articles