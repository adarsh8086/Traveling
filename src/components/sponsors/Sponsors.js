import React from 'react'
import './Sponsors.css'

//import images

import logo1 from '../../assets/travel.jpg'
import logo2 from '../../assets/travel 1.jpg'
import logo3 from '../../assets/travel 2.jpg'
import logo4 from '../../assets/travel 3.jpg'






const Sponsors = () => {
  return (
    <div className='Sponsors container'>
          
          <div className='logos flex'>
            <img src={logo1} alt=''/>
            <img src={logo2} alt=''/>
            <img src={logo3} alt=''/>
            <img src={logo4} alt=''/>
          </div>

    </div>
  )
}

export default Sponsors