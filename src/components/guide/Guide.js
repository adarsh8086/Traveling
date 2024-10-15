

import React from 'react';
import './Guide.css';

// Import images
import select from '../../assets/select.jpg';
import cash from '../../assets/money.jpg';
import car from '../../assets/car.jpg';
import view from '../../assets/view point.jpg';

const Guide = () => {
  return (
    <div className='Guide container section'>
      <div className='secContainer'>
        <div className='content'>
          <div className='textDiv'>
            <div className='secHeader'>
              <span>Easy and Fast</span>
              <h2>Book Your Next Trip</h2>
            </div>
            <div className='secContent'>
              <div className='singleSection'>
                <img src={select} alt='' />
                <div className='text'>
                  <span>Make a choice</span>
                      <p>  Choosing your destination is the first step in your adventure. Explore a wide range of locations,
                           from tropical beaches to bustling cities. Our curated list of top destinations ensures that you will find the perfect place for your next getaway.
                           Dive into our travel guides and discover hidden gems, local attractions, and cultural experiences that will make your trip unforgettable.
                      </p>
                </div>
              </div>
              <div className='singleSection'>
                <img src={cash} alt='' />
                <div className='text'>
                  <span>Make Payment</span>
                    <p> Secure and hassle-free payment options make booking your trip easy. We offer multiple payment methods, ensuring you can choose the one that suits you best.
                        With our transparent pricing and no hidden fees, you can confidently plan your travel budget. Our dedicated support team is always ready to assist you with any payment queries,
                        ensuring a smooth transaction process
                      </p>
                </div>
              </div>
              <div className='singleSection'>
                <img src={car} alt='' />
                <div className='text'>
                  <span>Reach Airport on Selected Date</span>
                      <p>  Arrive at the airport on your chosen date with peace of mind. Our comprehensive travel services include transportation arrangements, luggage assistance,
                           and check-in support. We ensure that you have all the information you need for a seamless journey from home to your destination.
                           Enjoy a stress-free start to your adventure, knowing that every detail is taken care of.
                      </p>
                </div>
              </div>
            </div>
          </div>
          <div className='imgDiv'>
            <img src={view} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
