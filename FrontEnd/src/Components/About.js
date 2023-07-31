import React from "react";
import Header1 from './Header1';
import Navbar from "./Navbar";
import './About.css';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
const About = () =>{
    return(
        <>
        <div className="contenta">
        <Navbar/>
            <div className="boxa">
            <div className="Centre">About Us</div>
            <div className="texta"><p>Just like reading a single page can only give a limited understanding of a book, staying in one place only gives a limited understanding of the larger world. Travelling allows one to see things through different lenses, build diverse perspectives and discover themselves.<br></br><br></br>BookMyStay is more than just a platform for hotel bookings; it is a gateway to fulfilling travel aspirations. We are committed to empowering individuals to turn their travel dreams into reality. Our primary focus is to introduce flexibility and convenience into the hotel booking process, making it easier for our users to find the perfect accommodation for their needs.</p><p id="cl"><br></br>Join us on this exciting journey as we revolutionize the way people plan and experience travel.</p></div>
            </div>
            <div className="homea">
            <Link to='/' title="Home"><FontAwesomeIcon icon={faHouse} beat size="2xl" color="red" /></Link>
            </div>
            </div>
        <Footer/>
        </>
    );
}
export default About;