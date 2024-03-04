import React from 'react'
import Navbar from '../../componets/navbar/Navbar'
import GridContainer from './GridContainer'
import './grid.scss';

import feed1 from '../../images/instagram-image-1.png';
import feed2 from '../../images/instagram-image-2.png'
import feed3 from '../../images/instagram-image-3.png'
import feed4 from '../../images/instagram-image-4.png'
import feed5 from '../../images/instagram-image-5.png'
import feed6 from '../../images/instagram-image-6.png'
import feed7 from '../../images/instagram-image-7.png'
import feed8 from '../../images/instagram-image-8.png'
import feed9 from '../../images/instagram-image-9.png'
const Grid = () => {
    const grid1Items = [
        {sub:"The vision within The World Barista Cup", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
    ];

    const grid2Items = [
        {imageURL:[feed1,feed2,feed3,feed4,feed5,feed6,feed7,feed8,feed9]}, 
    ];

    const grid3Items = [
        {sub: "World Barista Cup", description1:'Amagertorv 13', address:'1160 Copenhagen K', number: "+45 33 12 04 28", cvr:"CVR: 11427693", email:"Email: info@worldbaristacup.com"}
    ]
  return (
    <div className='app-container'>
        <Navbar />
        <hr />
        <div className="main-container">
            <GridContainer title="About World Barista Cup" items={grid1Items} />
            <GridContainer  title="Instagram feed" items={grid2Items}/>
            <GridContainer  title="Contact" items={grid3Items}/>
        </div>
    </div>
    
  )
}

export default Grid