import React from 'react'
import Navbar from '../../componets/navbar/Navbar'
import Carousel from '../../componets/carousel/Carousel'
import slides from "../../data/carouselData.json";
import Articles from '../../componets/articlesData/Articles';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Carousel data={slides} />
        <Articles />
    </div>
  )
}

export default Home