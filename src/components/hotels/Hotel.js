import React from 'react'

// import icons
import { FaLocationArrow } from 'react-icons/fa'

//import images

import hotel1 from '../../assets/hotel 1.jpg'
import hotel2 from '../../assets/hotel 2.jpg'
import hotel3 from '../../assets/hotel 3.jpg'
import hotel4 from '../../assets/hotel 4.jpg'
import hotel5 from '../../assets/hotels 5.jpg'
import hotel16 from '../../assets/hotel 6.jpg'


const Hotel = () => {
  return (
    <div className='Destinations container section'>
    <div className='secHeader'>
      <span> Best Stays</span>
      <h2> Top Hotels </h2>
     
     </div>


        <div className='seccContainer grid'>


           <div className='singleCard grid'>
              <div className='imgDiv'>
               <img src={hotel1} alt='destination'/>
              </div>
              <div className='infoDiv'>
               <div className='upperSpan flex'>
                 <span className='location'>
                      Rome, Italy
                 </span>
                 <span className='amount'>
                      $1.43k
                 </span>
               </div>
               <div className='lowerSpan flex'>
                 <FaLocationArrow className='icon'/>
                 <span className='distance'>Per Day</span>
               </div>
              </div>
           </div>
           


           <div className='singleCard grid'>
              <div className='imgDiv'>
               <img src={hotel2} alt='destination'/>
              </div>
              <div className='infoDiv'>
               <div className='upperSpan flex'>
                 <span className='location'>
                      London, UK
                 </span>
                 <span className='amount'>
                      $1.43k
                 </span>
               </div>
               <div className='lowerSpan flex'>
                 <FaLocationArrow className='icon'/>
                 <span className='distance'>Per Day</span>
               </div>
              </div>
           </div>




           <div className='singleCard grid'>
              <div className='imgDiv'>
               <img src={hotel3} alt='destination'/>
              </div>
              <div className='infoDiv'>
               <div className='upperSpan flex'>
                 <span className='location'>
                      Full, Europe
                 </span>
                 <span className='amount'>
                      $2.43k
                 </span>
               </div>
               <div className='lowerSpan flex'>
                 <FaLocationArrow className='icon'/>
                 <span className='distance'>Per Day</span>
               </div>
              </div>
           </div>



           





           <div className='singleCard grid'>
              <div className='imgDiv'>
               <img src={hotel4} alt='destination'/>
              </div>
              <div className='infoDiv'>
               <div className='upperSpan flex'>
                 <span className='location'>
                      Paris, France
                 </span>
                 <span className='amount'>
                      $3.43k
                 </span>
               </div>
               <div className='lowerSpan flex'>
                 <FaLocationArrow className='icon'/>
                 <span className='distance'>Per Day</span>
               </div>
              </div>
           </div>



           <div className='singleCard grid'>
              <div className='imgDiv'>
               <img src={hotel5} alt='destination'/>
              </div>
              <div className='infoDiv'>
               <div className='upperSpan flex'>
                 <span className='location'>
                      Norway
                 </span>
                 <span className='amount'>
                      1.4k
                 </span>
               </div>
               <div className='lowerSpan flex'>
                 <FaLocationArrow className='icon'/>
                 <span className='distance'>Per Day</span>
               </div>
              </div>
           </div>



           <div className='singleCard grid'>
              <div className='imgDiv'>
               <img src={hotel16} alt='destination'/>
              </div>
              <div className='infoDiv'>
               <div className='upperSpan flex'>
                 <span className='location'>
                      Dubai,UAE
                 </span>
                 <span className='amount'>
                      1.4k
                 </span>
               </div>
               <div className='lowerSpan flex'>
                 <FaLocationArrow className='icon'/>
                 <span className='distance'>Per Day</span>
               </div>
              </div>
           </div>





        </div>
</div>
  )
}

export default Hotel
