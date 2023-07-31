import React from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Pay.css';
import Footer from './Footer';
import Header1 from "./Header1";
import Navbar from './Navbar';
const Pay = () => {
  const location = useLocation();
  const { name, address, price } = location.state || {};
  const [num, setNum] = useState('');
  const [nameofuser, setNameofuser] = useState('');
  const [days, setDays] = useState('');
  const [datein, setDatein] = useState('');
  const [dateout, setDateout] = useState('');
  const [isAvailable, setIsAvailable] = useState(false); 
  const navigate = useNavigate();
  const handleNumChange = (event) => {
    setNum(event.target.value);
  }

  const handleNameofChange = (event) => {
    setNameofuser(event.target.value);
  }

  const handledaysChange = (event) => {
    setDays(event.target.value);
  }

  const handleDateinChange = (event) => {
    setDatein(event.target.value);
  }

  const handleDateoutChange = (event) => {
    setDateout(event.target.value);
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('No of guests:', num);
    console.log('Name of guest booked:', nameofuser);
    console.log('No of Days:', days);
    console.log('DateIn:', datein);
    console.log('DateOut:', dateout);
    console.log('Total amount:', (1 * (price * num * days) / 2));
    const totalprice = 1 * (price * num * days) / 2;
    navigate('/method', { state: { totalprice } });
    setIsAvailable(true);
    alert("The room is available!!!");
  }

  const handlePayment = () => {
    if (isAvailable) {
      console.log('Payment initiated');
      console.log('Hotel:', name);
      console.log('Address:', address);
      console.log('Price:', price);
    } else {
      alert("Please check availability first!");
    }
  };

  return (
    <>
      <div className='black'>
        <Navbar/>
      {name && (
        <div className='Payid'>
          <h2 className="paym">Check Availability of selected rooms</h2>
          <div className='contain'>
            <h2></h2>
            <p>Name: &#160;&#160;{name}</p>
            <p>Address: &#160;&#160;{address}</p>
            <form onSubmit={handleOnSubmit}>
              <p>No of guests: &#160;&#160;<input id='get' type="number" placeholder='no of guests' onChange={handleNumChange} required min={1} style={{ outline: 'none' }}></input></p>
              <p>Name of the guest who is booking: <input id='get' type="text" placeholder='name of guest' onChange={handleNameofChange} required style={{ outline: 'none' }} ></input></p>
              <p>No of days: &#160;&#160;<input id='get' type="number" placeholder='no of days' onChange={handledaysChange} required style={{ outline: 'none' }} min={1}></input></p>
              <p>Check-in Date: &#160;&#160;<input id='datein' type="datetime-local" placeholder='datein' onChange={handleDateinChange} required style={{ outline: 'none' }} ></input></p>
              <p>Check-out Date: &#160;&#160;<input id='datein' type="datetime-local" placeholder='dateout' onChange={handleDateoutChange} required style={{ outline: 'none' }} ></input></p>
              {num > 2 ? (
                <>
                  <p id='red'>Additional charge for more than 2 guests</p>
                  <p>Total Amount: &#x20b9; {(1 * (price * num * days)) / 2}</p>
                </>
              ) :
                <p>Total Amount: &#x20b9; {1 * (price) * days}</p>}
              <button className='check' onClick={handlePayment} onSubmit={handleOnSubmit}>Check</button>
              {isAvailable ? (
                <Link to='/method'>
                  <button className='pay'>Pay Now</button>
                </Link>
              ) : (
                <button className='pay' onClick={handlePayment}>Pay Now</button>
              )}
            </form>
          </div>
          <p id='proceed'>.....Check availability of rooms and proceed to pay.....</p>
          </div>
          )}
          <Footer />
          </div>
    </>
  );
};
export default Pay;
