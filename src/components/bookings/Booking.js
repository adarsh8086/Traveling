



import React from 'react';
import './Booking.css';
import  { useState } from 'react';



const Booking = () => {

    const [showPopup, setShowPopup] = useState(false);

    const showPopUp = (event) => {
        event.preventDefault(); // Prevent the form from submitting normally

        setShowPopup(true); // Show the pop-up message

        setTimeout(() => {
            setShowPopup(false); // Hide the pop-up message after 3 seconds
        }, 6000);

        
         event.target.reset();
    };



    return (
        



          
        <div className="body">
        <form className="login-form" action=""  onSubmit={showPopUp}>
            <h1>Booking</h1>
            <div className="form-input-material">
                <input type="text" name="name" id="name" placeholder="Name" required />
            </div>
            <div className="form-input-material">
                <input type="email" name="email" id="email" placeholder="Email" required />
            </div>
            <div className="form-input-material">
                <input type="tel" name="phone" id="phone" placeholder="Phone Number"
                        minlength="10" 
                        maxlength="10" 
                        required 
                        title="Please enter a 10-digit phone number" />
            </div>
            <div className="form-input-material">
                <input type="date" name="booking-date" id="booking-date" required />
            </div>
            <button type="submit">Book Now</button>
        </form>
        {showPopup && <div id="popupMessage" className="popup-message">Booking successful! Thank you for choosing our service. We will contact you shortly with further details.</div>}
     </div>

    );
}

export default Booking;
