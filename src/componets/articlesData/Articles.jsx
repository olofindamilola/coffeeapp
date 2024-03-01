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
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu feugiat pretium nibh ipsum consequat nisl vel. Congue quisque egestas diam in arcu cursus euismod quis viverra. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Consequat interdum varius sit amet mattis vulputate enim nulla. Ipsum consequat nisl vel pretium. Justo eget magna fermentum iaculis eu non. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Urna nunc id cursus metus. Porttitor massa id neque aliquam vestibulum morbi blandit. Sit amet mattis vulputate enim nulla aliquet. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Urna nec tincidunt praesent semper feugiat nibh. Ut sem nulla pharetra diam sit amet nisl suscipit. Nulla aliquet enim tortor at auctor urna nunc id cursus."
    },
    {
        imageUrl: img2,
        published: "published 12/07/2021",
        title: "The most expensive coffee on the market",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu feugiat pretium nibh ipsum consequat nisl vel. Congue quisque egestas diam in arcu cursus euismod quis viverra. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Consequat interdum varius sit amet mattis vulputate enim nulla. Ipsum consequat nisl vel pretium. Justo eget magna fermentum iaculis eu non. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Urna nunc id cursus metus. Porttitor massa id neque aliquam vestibulum morbi blandit. Sit amet mattis vulputate enim nulla aliquet. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Urna nec tincidunt praesent semper feugiat nibh. Ut sem nulla pharetra diam sit amet nisl suscipit. Nulla aliquet enim tortor at auctor urna nunc id cursus."
    },
    {
        imageUrl: img3,
        published: "published 12/07/2021",
        title: "10 type of coffee beans you need to know",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu feugiat pretium nibh ipsum consequat nisl vel. Congue quisque egestas diam in arcu cursus euismod quis viverra. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Consequat interdum varius sit amet mattis vulputate enim nulla. Ipsum consequat nisl vel pretium. Justo eget magna fermentum iaculis eu non. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Urna nunc id cursus metus. Porttitor massa id neque aliquam vestibulum morbi blandit. Sit amet mattis vulputate enim nulla aliquet. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Urna nec tincidunt praesent semper feugiat nibh. Ut sem nulla pharetra diam sit amet nisl suscipit. Nulla aliquet enim tortor at auctor urna nunc id cursus."
    },
    {
        imageUrl: img4,
        published: "published 12/07/2021",
        title: "chanllenge your barista skills to the max",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu feugiat pretium nibh ipsum consequat nisl vel. Congue quisque egestas diam in arcu cursus euismod quis viverra. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Consequat interdum varius sit amet mattis vulputate enim nulla. Ipsum consequat nisl vel pretium. Justo eget magna fermentum iaculis eu non. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Urna nunc id cursus metus. Porttitor massa id neque aliquam vestibulum morbi blandit. Sit amet mattis vulputate enim nulla aliquet. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Urna nec tincidunt praesent semper feugiat nibh. Ut sem nulla pharetra diam sit amet nisl suscipit. Nulla aliquet enim tortor at auctor urna nunc id cursus."
    },
    {
        imageUrl: img5,
        published: "published 12/07/2021",
        title: "The most expensive coffee on the market",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu feugiat pretium nibh ipsum consequat nisl vel. Congue quisque egestas diam in arcu cursus euismod quis viverra. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Consequat interdum varius sit amet mattis vulputate enim nulla. Ipsum consequat nisl vel pretium. Justo eget magna fermentum iaculis eu non. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Urna nunc id cursus metus. Porttitor massa id neque aliquam vestibulum morbi blandit. Sit amet mattis vulputate enim nulla aliquet. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Urna nec tincidunt praesent semper feugiat nibh. Ut sem nulla pharetra diam sit amet nisl suscipit. Nulla aliquet enim tortor at auctor urna nunc id cursus."
    },
    {
        imageUrl: img6,
        published: "published 12/07/2021",
        title: "10 type of coffee beans you need to know",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu feugiat pretium nibh ipsum consequat nisl vel. Congue quisque egestas diam in arcu cursus euismod quis viverra. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Consequat interdum varius sit amet mattis vulputate enim nulla. Ipsum consequat nisl vel pretium. Justo eget magna fermentum iaculis eu non. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Urna nunc id cursus metus. Porttitor massa id neque aliquam vestibulum morbi blandit. Sit amet mattis vulputate enim nulla aliquet. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Urna nec tincidunt praesent semper feugiat nibh. Ut sem nulla pharetra diam sit amet nisl suscipit. Nulla aliquet enim tortor at auctor urna nunc id cursus."
    },
    {
        imageUrl: img7,
        published: "published 12/07/2021",
        title: "Chanllenge your barista skills to the max",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu feugiat pretium nibh ipsum consequat nisl vel. Congue quisque egestas diam in arcu cursus euismod quis viverra. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Consequat interdum varius sit amet mattis vulputate enim nulla. Ipsum consequat nisl vel pretium. Justo eget magna fermentum iaculis eu non. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Urna nunc id cursus metus. Porttitor massa id neque aliquam vestibulum morbi blandit. Sit amet mattis vulputate enim nulla aliquet. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Urna nec tincidunt praesent semper feugiat nibh. Ut sem nulla pharetra diam sit amet nisl suscipit. Nulla aliquet enim tortor at auctor urna nunc id cursus."
    },
    {
        imageUrl: img8,
        published: "published 12/07/2021",
        title: "Wondeful Copenhagen 2021",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu feugiat pretium nibh ipsum consequat nisl vel. Congue quisque egestas diam in arcu cursus euismod quis viverra. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Consequat interdum varius sit amet mattis vulputate enim nulla. Ipsum consequat nisl vel pretium. Justo eget magna fermentum iaculis eu non. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Urna nunc id cursus metus. Porttitor massa id neque aliquam vestibulum morbi blandit. Sit amet mattis vulputate enim nulla aliquet. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Urna nec tincidunt praesent semper feugiat nibh. Ut sem nulla pharetra diam sit amet nisl suscipit. Nulla aliquet enim tortor at auctor urna nunc id cursus."
    },
    {
        imageUrl: img9,
        published: "published 12/07/2021",
        title: "A world full of coffee",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu feugiat pretium nibh ipsum consequat nisl vel. Congue quisque egestas diam in arcu cursus euismod quis viverra. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Consequat interdum varius sit amet mattis vulputate enim nulla. Ipsum consequat nisl vel pretium. Justo eget magna fermentum iaculis eu non. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Urna nunc id cursus metus. Porttitor massa id neque aliquam vestibulum morbi blandit. Sit amet mattis vulputate enim nulla aliquet. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Urna nec tincidunt praesent semper feugiat nibh. Ut sem nulla pharetra diam sit amet nisl suscipit. Nulla aliquet enim tortor at auctor urna nunc id cursus."
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
            <div className='line'>
                <hr></hr>
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
        </div>
        

        <div className="side-grid">
            <div className="shop">
                <h3>WBC Shop</h3>
                <h5>Your shopping cart is empty</h5>
                <button>Vist the shop</button>
            </div>

            <div className="event">
                <h3>Next event</h3>
                <h5>World Barista Cup 2021</h5>
                <h6>Copenhagen Denmark</h6>
                <h6>Dates: 25th-27th August 2011</h6>
                <h6>Theme: SENSORY</h6>
                <button>Sign up now</button>
            </div>

            <div className="scoreboard">
                <h3>Scoreboard</h3>
                <h5>List of winners from last year</h5>
                <p>2021 - ?</p>
                <p>2021 - Denmark</p>
                <p>2021 - Sweden</p>
                <p>2021 - Turkey</p>
                <p>2021 - Italy</p>
                <p>2021 - Canada</p>
                <p>2021 - Germany</p>
            </div>
        </div>
    </div>
  )
}

export default Articles