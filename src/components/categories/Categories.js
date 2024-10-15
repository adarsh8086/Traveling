
import React from 'react';
import './Categories.css';
// import images
import satelight from '../../assets/weather.jpg';
import plane from '../../assets/plane.jpg';
import micro from '../../assets/micro.jpg'
import setting from '../../assets/settings.jpg'
const Categories = () => {
  return (
    <div className='Categoriees container section'>
      <div className='secHeader'>
        <span>Category</span>
        <h2>We Offer Best Services</h2>
      </div>
      <div className='secContainer grid'>
        <div className='singleCard grid'>
          <div className='imgDiv'>
            <img src={satelight} alt='' className='mainImage' />
            <img src='' alt='' className='design' />
          </div>
          <span>Calculated Weather</span>
          <p>
              Accurate forecasts to plan your perfect trip.
          </p>
        </div>

        <div className='singleCard grid'>
          <div className='imgDiv'>
            <img src={plane} alt='' className='mainImage' />
            <img src='' alt='' className='design' />
          </div>
          <span>Best Flights</span>
          <p>
              Find top flights with great deals and comfort.
          </p>
        </div>

        <div className='singleCard grid'>
          <div className='imgDiv'>
            <img src={micro} alt='' className='mainImage' />
            <img src='' alt='' className='design' />
          </div>
          <span>Local Events</span>
          <p>
           Discover exciting local events, festivals,
            and connect with the local culture.
          </p>
        </div>

        <div className='singleCard grid'>
          <div className='imgDiv'>
            <img src={setting} alt='' className='mainImage' />
            <img src='' alt='' className='design' />
          </div>
          <span>Seamless Settings</span>
          <p>
             Customizable settings for a personalized journey.
          </p>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Categories;

