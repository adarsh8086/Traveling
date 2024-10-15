


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Layout from "./components/layout routers/Layout"
import Categories from './components/categories/Categories';
import Destinations from './components/destinations/Destinations';
import Hotel from './components/hotels/Hotel';
import Guide from './components/guide/Guide';
import Sponsors from './components/sponsors/Sponsors';
import Subscribe from './components/subscribe/Subscribe';
import Booking from './components/bookings/Booking';
import Footer from './components/footer/Footer';

function App() {
  return (
  

  <BrowserRouter>
     <Header />
   <div  style={{ marginTop: '110px' }}>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/hotels" element={<Hotel />} />
      <Route path="/guide" element={<Guide />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/bookings" element={<Booking />} />

    </Routes>
  </div>
  <Footer />
</BrowserRouter>
  );
}

export default App;











   

