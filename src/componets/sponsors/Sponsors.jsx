import React from 'react'
import './sponsors.scss'
import sponsor1 from '../../images/sponsor-1.png';
import sponsor2 from '../../images/sponsor-2.png';
import sponsor3 from '../../images/sponsor-3.png';
import sponsor4 from '../../images/sponsor-4.png';
import sponsor5 from '../../images/sponsor-5.png';
import sponsor6 from '../../images/sponsor-6.png';
import sponsor7 from '../../images/sponsor-7.png';
import sponsor8 from '../../images/sponsor-8.png';
import sponsor9 from '../../images/sponsor-9.png';
import sponsor10 from '../../images/sponsor-10.png';
import sponsor11 from '../../images/sponsor-11.png';
import sponsor12 from '../../images/sponsor-12.png';
import sponsor13 from '../../images/sponsor-13.png';
import sponsor14 from '../../images/sponsor-14.png';
import sponsor15 from '../../images/sponsor-15.png';
import sponsor16 from '../../images/sponsor-16.png';
import sponsor17 from '../../images/sponsor-17.png';
import sponsor18 from '../../images/sponsor-18.png';
import sponsor19 from '../../images/sponsor-19.png';
import sponsor20 from '../../images/sponsor-20.png';

const Sponsors = () => {
    const sponsorImages = [
        sponsor1,sponsor2,sponsor3,sponsor4,sponsor5,sponsor6,sponsor7,sponsor8,sponsor9,
        sponsor10,sponsor11,sponsor12,sponsor13,sponsor14,sponsor15,sponsor16,sponsor17,sponsor18,sponsor19,sponsor20
    ];

    const splitSponsors = (sponsors) => {
        const middleIndex = Math.ceil(sponsors.length / 2);
        const firstColumn = sponsors.slice(0,middleIndex);
        const secondColumn = sponsors.slice(middleIndex);
        return [firstColumn,secondColumn];
    };

    const [column1, column2] = splitSponsors(sponsorImages);
  return (
    <div className="sponsor">
        <hr />
      <h2>World Barista Cup Sponsors</h2>
      
      <div className="sponsor-columns">
        <div className="sponsor-column">
          {column1.map((image, index) => (
            <img key={index} src={image} alt={`Sponsor ${index + 1}`} />
          ))}
        </div>
        <div className="sponsor-column">
          {column2.map((image, index) => (
            <img key={index} src={image} alt={`Sponsor ${index + 11}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sponsors