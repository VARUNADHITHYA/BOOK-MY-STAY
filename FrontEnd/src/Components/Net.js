import React from "react";
import Footer from "./Footer";
import Header1 from "./Header1";
import './Method.css';
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
const Net = () =>{
    return(
        <>
        <div className='blackm'>
        <Header1 />
      </div>
      <div className='Payidm'>
        <div id="cen"><h2>BookMyStay's Payment portal</h2></div>
        <div className="methodbox">
          <div className="methodst">
            <p id="ord">BookMyStay</p>
            <p id="bookid">Booking id : {uuidv4()}</p>
            <p id="bid">Price : &#x20b9;</p>
            <div className="container">
            </div>
            <button id="paynow">Pay &#x20b9;</button>
          </div>
        </div>
      </div>
      <Footer />
        </>
    );
};
export default Net;