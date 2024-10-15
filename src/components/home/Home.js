import React from 'react'
import "./Home.css"



// import image

//import main from '../../assets/main image.jpg'
import bag from '../../assets/bag.jpg'

//import icons

import {FaPlay} from "react-icons/fa";







const Home = () => {
  return (
    <div className='Home container section'>
    
       <div className='textDiv grid'>
            <span className='redText'>
              Best Destinations around the world
              </span> 
              <h2>
                 Travel, enjoy and live a new and full life
              </h2>
             <p>
                
                We provide you with the best travel experiences around the globe,
                ensuring that you get to explore the wonders of the world.
                Whether you're looking for serene beaches, bustling cities,
                or picturesque mountains, we've got you covered. 
                Our services are designed to make your travel planning as seamless and enjoyable as possible,
                giving you more time to immerse yourself in the beauty of your destinations.Experience luxury accommodations,
                personalized itineraries,and exceptional customer support, making your travels truly stress-free and memorable.
                Join us on an unforgettable journey and create memories that will last a lifetime.
            </p>
               <div className='buttons flex'>
                    {/* <button className='btn'>Find More</button> */}
                    <a href="https://www.europelanguagejobs.com/blog/benefits-of-travel" className='btn'>Find More</a>
                    <div className='playBtn flex'>
                        <FaPlay className="icon"/>
                        <span>play Demo</span>
                    </div>
               </div>

              
       </div>



      <div className='imgDiv flex'>
          <img src={bag} alt='MainImage' />
          {/* <img src={main} alt='MainImage' /> */}
      </div>

    </div>
  )
}

export default Home 