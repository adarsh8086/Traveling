import React from 'react'
import './Footer.css'


//import icons
import {AiFillInstagram} from "react-icons/ai"
import {BiLogoFacebookCircle} from "react-icons/bi"
import {AiFillTwitterCircle} from "react-icons/ai"
import {BsYoutube} from "react-icons/bs"





const Footer = () => {
  return (
    <div className='Footer container'>

          <div className='seecContainer grid'>
             
             <div className='singleSection'>
                 <h2>Yango</h2>

                 <p>
                  Book your trip in minute, get full
                  Control for much longer.
                 </p>
             </div>

             <div className='singleSection'>
               <h3>Company</h3>
               <li>About</li>
               <li>Careers</li>
               <li>Support</li>
             </div>


             <div className='singleSection'>
               <h3>Contact</h3>
               <li>Help/FAQ</li>
               <li>Press</li>
               <li>Afliates</li>
             </div>


             <div className='singleSection'>
               <h3>More</h3>
               <li>Guidlines</li>
               <li>Insurance</li>
               <li>Hotels</li>
            </div>
          
            <div className='singleSection'>
               
               <div className='socials flex'>
                <a href='https://www.instagram.com'>
                  <AiFillInstagram className='icon'/>
                </a>
                <a href='https://www.facebook.com'>
                  <BiLogoFacebookCircle className='icon'/>
                </a>

                <a href='https://www.twitter.com'>
                  <AiFillTwitterCircle className='icon'/>
                </a>

                <a href='https://www.youtube.com'>
                  <BsYoutube className='icon'/>
                </a>

               </div>
               <span className='text'>Discover our app</span>
                
                <span className='flex'>
                  <img src='' alt=''></img>
                  <img src='' alt=''></img>
                       
                </span>
              </div>

            </div>  
                <div className='copy'>
                         copyrights Yango
                </div>
    </div>
  )
}

export default Footer
