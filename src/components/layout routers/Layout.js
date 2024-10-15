import React from 'react'
import './Layout.css'
import Home from '../home/Home';
import Categories from '../categories/Categories';
import Destinations from '../destinations/Destinations';
import Hotel  from '../hotels/Hotel';
import Guide from '../guide/Guide';
import Sponsors from '../sponsors/Sponsors';
import Subscribe from '../subscribe/Subscribe';

const Layout = () => {
  return (
        

      <div>
        
          <Home/>
          <Categories/>
          <Destinations/>
          <Hotel/>
          <Guide/>
          <Sponsors/>
          <Subscribe/>
     </div>

   

    
  )
 }

export default Layout














