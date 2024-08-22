import "./Footer.css";
import React from 'react'
import {FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/> 
                <div>
                    <p>Barek Mollar Mor, 60 Feet, Dhaka</p>
                    <p>Bangladesh</p>
                </div>
            </div>
            <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/> 
            +8801319306053</h4>
            </div>

            <div className="email">
            <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/> 
            shahrirhossainthebest@gmail.com</h4>
            </div>
        </div>

        <div className="right">
            <h4>About me</h4>
            <p>I'm a fronted developer. I design Animated & Static web pages using React Js. I like tea over coffee.</p>
            
            
            <div className="social">
            <h4><FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/> 
            </h4>
            
            <h4><FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/> 
            </h4>
            <h4><FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}}/> 
            </h4>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
