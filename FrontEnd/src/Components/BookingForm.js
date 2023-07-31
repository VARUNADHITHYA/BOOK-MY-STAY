import React from 'react';
import "./BookingForm.css";
import PaymentTab from './PaymentTab';
import { useState } from 'react';
import axios from 'axios';
const BookingForm = ({ hotel, onClose, onSubmit, checkInDate, checkOutDate, guests , rooms , mobiles , emails , guestnames}) => {
    const [days, setDays] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [datein, setDatein] = useState(checkInDate);
  const [dateout, setDateout] = useState(checkOutDate);
  const [guest, setGuests] = useState(guests);
  const [mobile, setMobiles] = useState(mobiles);
  const [email, setEmails] = useState(emails);
  const [room, setRooms] = useState(rooms);
  const [guestname, setGuestName] = useState(guestnames);


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ hotel, guest, days, room, datein, dateout, guests, mobiles, guestnames, emails });
    setSubmitted(true);

    const data = {
      in: datein,
      out: dateout,
      guest: guest,
      rooms: room,
      days: days,
      type: (hotel.room),
      pd: (hotel.price),
      tamt: hotel.price * days * room * guest,
      name: guestname,
      mob: mobile,
      email: email
    };

    console.log(data);

    axios.post("http://127.0.0.1:8080/postbook", data)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
          } else {
            console.log('Error:', error.message);
          }
        });
  };
  const handleDateinChange = (event) => {
    setDatein(event.target.value);
  };

  const handleDateoutChange = (event) => {
    setDateout(event.target.value);
  };
  
    const handleFormSubmit = (BookingForm) => {
      console.log('Form data:', BookingForm);
    };
  
    const handleGoToPayment = () => {
      console.log('Proceed to payment');
    };
  
    if (submitted) {
      return (
        <PaymentTab
          hotel={hotel}
          days={days}
          onClose={onClose}
          checkInDate={datein}
          checkOutDate={dateout}
          guests={guest}
          rooms = { room } 
          mobiles = {mobile}
          guestnames = {guestname}
          emails = {email}
          onGoBack={() => setSubmitted(false)}
          onGoToPayment={handleGoToPayment}
        />
      );
    }
  return (
    <div className="modal">
    <div className="modal-content">
    <h2 style={{textAlign:'center'}}>Book rooms @ <span style={{color: 'orange'}}>{hotel.hname}</span></h2>
    <form onSubmit={handleSubmit} className='bookform'>
    <div id='fbox'>
    <h4 style={{marginLeft:'10px'}}>Confirm your checkin and checkout Date:</h4>
    <div style={{ display: 'flex'}}>
    <div style={{marginLeft:'10px' ,marginTop:'-20px'}}>
        <p>Check-In Date : <span>{datein}</span>
        <input type="datetime-local" title='CheckInDate' className="bookbutton" value={datein} onChange={handleDateinChange} required/></p>
      </div>
      <div style={{marginLeft:'10px' , marginTop:'-20px'}} >
        <p>Check-Out Date : <span>{dateout}</span>
        <input type="datetime-local" title='CheckOutDate' className="bookbutton" value={dateout} onChange={handleDateoutChange} required/></p>
      </div>
      </div>
      </div>
      <div id='nbox'>
      <label className='labelbook' style={{marginLeft:'10px'}}>
        Guests :&nbsp;
        <input type="number" className="bookbuttonn" value={guest} onChange={(e) => setGuests(e.target.value)} min={1}  placeholder='no of geusts' required />
      <label className='labelbook' style={{marginLeft:'30px'}}>
        Rooms :&nbsp; 
        <input type="number" className="bookbuttonn" value={room} onChange={(e) => setRooms(e.target.value)} min={1}  placeholder='no of rooms' required/>
        <label className='labelbook' style={{marginLeft:'30px'}}>
          Days:&nbsp;
          <input type="number" className="bookbuttonn" value={days} onChange={(e) => setDays(e.target.value)} placeholder='no of days'min={1} required/>
        </label>
        </label>
        </label>
        </div>
        <br></br>
        <div id='pbox'>
          <p>Room Type : <span>{hotel.room}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price : &#8377; {hotel.price} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Total Amount : &#8377; <span>{hotel.price * days * room * guest}</span></p>
        </div>
        <div id='dbox'>
      <label className='labelbook' style={{marginLeft:'10px'}}>
        Guest Name :&nbsp;
        <input type="text" title='Name' className="roombutton" value={guestname} onChange={(e) => setGuestName(e.target.value)}  placeholder='Primary Geust Name'  required />
      <label className='labelbook' style={{marginLeft:'20px'}}>
        Mobile Number :&nbsp; 
        <input type="text" title='Mobile no' className="roombutton" value={mobile} onChange={(e) => setMobiles(e.target.value)} min={1}  placeholder='no of rooms' required/>
        <label className='labelbook' style={{marginLeft:'10px'}}>
          Email :&nbsp; 
          <input type="email" title='email' className="emailbutton" value={email} onChange={(e) => setEmails(e.target.value)} placeholder='Email' required/>
          </label>
        </label>
        </label>
        </div>
          <button type="submit" className="okbutton" onSubmit={handleFormSubmit}>Confirm And Pay</button>
          <button type="button" className="cancel" onClick={onClose}>Cancel Booking</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
