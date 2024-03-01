import React from 'react'
import Navbar from '../../componets/navbar/Navbar'
import Carousel from '../../componets/carousel/Carousel'
import slides from "../../data/carouselData.json";
import Articles from '../../componets/articlesData/Articles';
import Sponsors from '../../componets/sponsors/Sponsors';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Carousel data={slides} />
        <Articles />
        <Sponsors />
    </div>
  )
}

export default Home