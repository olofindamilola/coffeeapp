import React from 'react'
import Navbar from '../../componets/navbar/Navbar'
import Carousel from '../../componets/carousel/Carousel'
import slides from "../../data/carouselData.json";
import Articles from '../../componets/articlesData/Articles';
import Sponsors from '../../componets/sponsors/Sponsors';
import Grid from '../../componets/grid/Grid';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Carousel data={slides} />
        <Articles />
        <Sponsors />
        <Grid />
    </div>
  )
}

export default Home