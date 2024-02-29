import React from 'react'
import Pagination from '../pagination/Pagination'
import Article from '../pagination/Article'
import { useState } from 'react';

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
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
    </div>
  )
}

export default Articles