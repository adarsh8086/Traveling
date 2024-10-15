






import React, { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import './Subscribe.css';

const Subscribe = () => {
 
  const [showPopup, setShowPopup] = useState(false);

  const showPopUp = (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    setShowPopup(true); // Show the pop-up message

    setTimeout(() => {
      setShowPopup(false); // Hide the pop-up message after 3 seconds
    }, 4000);

    // Optionally, you can clear the form fields here
    event.target.reset();
  };



  return (
    <div className='Subscribe container section'>
      <div className='secContent grid'>
        <h1>Subscribe for latest news and interesting offers!</h1>
        <form className='inputDiv flex' onSubmit={showPopUp}>
          <div className='input flex'>
            <HiOutlineMail className="icon" />
            <input
              type='email'
              id='mail'
              placeholder='Your email'
              required
            />
          </div>
          <button className='btn' type='submit'>Subscribe</button>
        </form>
        {showPopup && <div id="popupMessage" className="popup-message">Subscription successful! Thank you for subscribing to our newsletter.</div>}
      </div>
    </div>
  );
};

export default Subscribe;







