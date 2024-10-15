import React from 'react'
import './Destinations.css'


// import icons
import { FaLocationArrow } from 'react-icons/fa'



//import images

import rome from '../../assets/rome.jpg'
import uk from '../../assets/uk1.jpg'
import euro from '../../assets/europe.jpg'
import paris from '../../assets/paris.jpg'
import norway from '../../assets/norway.jpg'
import dubai from '../../assets/dubai.jpg'







const Destinations = () => {
  return (
    <div className='Destinations container section'>
         <div className='secHeader'>
           <span> Top Selling</span>
           <h2>Top Destinations</h2>
          
          </div>


             <div className='seccContainer grid'>


                <div className='singleCard grid'>
                   <div className='imgDiv'>
                    <img src={rome} alt='destination'/>
                   </div>
                   <div className='infoDiv'>
                    <div className='upperSpan flex'>
                      <span className='location'>
                           Rome,Italy
                      </span>
                      <span className='amount'>
                           $5.43k
                      </span>
                    </div>
                    <div className='lowerSpan flex'>
                      <FaLocationArrow className='icon'/>
                      <span className='distance'>10 Days Trip</span>
                    </div>
                   </div>
                </div>
                


                <div className='singleCard grid'>
                   <div className='imgDiv'>
                    <img src={uk} alt='destination'/>
                   </div>
                   <div className='infoDiv'>
                    <div className='upperSpan flex'>
                      <span className='location'>
                           London,UK
                      </span>
                      <span className='amount'>
                           $4.43k
                      </span>
                    </div>
                    <div className='lowerSpan flex'>
                      <FaLocationArrow className='icon'/>
                      <span className='distance'>15 Days Trip</span>
                    </div>
                   </div>
                </div>




                <div className='singleCard grid'>
                   <div className='imgDiv'>
                    <img src={euro} alt='destination'/>
                   </div>
                   <div className='infoDiv'>
                    <div className='upperSpan flex'>
                      <span className='location'>
                           Full,Europe
                      </span>
                      <span className='amount'>
                           $15.43k
                      </span>
                    </div>
                    <div className='lowerSpan flex'>
                      <FaLocationArrow className='icon'/>
                      <span className='distance'>30 Days Trip</span>
                    </div>
                   </div>
                </div>



                





                <div className='singleCard grid'>
                   <div className='imgDiv'>
                    <img src={paris} alt='destination'/>
                   </div>
                   <div className='infoDiv'>
                    <div className='upperSpan flex'>
                      <span className='location'>
                           Paris,France
                      </span>
                      <span className='amount'>
                           $3.43k
                      </span>
                    </div>
                    <div className='lowerSpan flex'>
                      <FaLocationArrow className='icon'/>
                      <span className='distance'>6 Days Trip</span>
                    </div>
                   </div>
                </div>



                <div className='singleCard grid'>
                   <div className='imgDiv'>
                    <img src={norway} alt='destination'/>
                   </div>
                   <div className='infoDiv'>
                    <div className='upperSpan flex'>
                      <span className='location'>
                           Norway
                      </span>
                      <span className='amount'>
                          $4.4k
                      </span>
                    </div>
                    <div className='lowerSpan flex'>
                      <FaLocationArrow className='icon'/>
                      <span className='distance'>12 Days Trip</span>
                    </div>
                   </div>
                </div>



                <div className='singleCard grid'>
                   <div className='imgDiv'>
                    <img src={dubai} alt='destination'/>
                   </div>
                   <div className='infoDiv'>
                    <div className='upperSpan flex'>
                      <span className='location'>
                         Dubai,UAE
                      </span>
                      <span className='amount'>
                           $27.4k
                      </span>
                    </div>
                    <div className='lowerSpan flex'>
                      <FaLocationArrow className='icon'/>
                      <span className='distance'>18 Days Trip</span>
                    </div>
                   </div>
                </div>





             </div>
    </div>
  )
}

export default Destinations
