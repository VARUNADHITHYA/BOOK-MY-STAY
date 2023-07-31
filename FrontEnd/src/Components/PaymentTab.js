import React, { useState } from 'react';
import './PaymentTab.css';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const PaymentTab = ({ hotel, guests, days, onClose, guestnames, emails, onGoBack, rooms }) => {
  const user = useSelector((state) => state.user);
  const current = new Date();
  const date = current.toDateString();
  const time = current.toLocaleTimeString();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');
  const [pass, setUpipass] = useState('');

  const handlePayment = () => {
    if (paymentMethod === 'card') {
      alert('Card Payment Successful!');
    } else if (paymentMethod === 'upi') {
      alert('UPI Payment Successful!');
    }
  };

  return (
    <div className="payment-content">
      <div className="PaymentTab">
        <div className='pays'>
          <h3>Payment Gateway @ BookMyStay {user} @ <span style={{color: 'orange'}}>{hotel.hname}</span></h3>
          <div className='ord'>
            <p>Booking Id : {uuidv4()} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Booking Date : {date}&nbsp;&nbsp;{time}</p>
          </div>
          <div className='paym'>
            <h3 id='payb'>Booking Details</h3>
            <p>Name &nbsp;&nbsp; &nbsp;  : &nbsp; {guestnames} </p>
            <p></p>
            <p>Hotel Name &nbsp;&nbsp;  : &nbsp; {hotel.hname}</p>
            <p>Total Guests &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; {guests}</p>
            <p>Number of Days &nbsp;&nbsp;&nbsp;   : &nbsp; {days}</p>
            <p>Number of Rooms &nbsp; : &nbsp; {rooms}</p>
            <p>Total Amount &nbsp; : <span style={{color:'red'}}> &#8377; {hotel.price * guests * days * rooms}</span></p>
          </div>
          <div className='payop'>
            <form onSubmit={handlePayment}>
              <h3 id='payb'>Payment Details</h3>
              <p>Select a Payment Method</p>
              <div className='rad'>
                <label>
                  <input
                    type="radio"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                  />
                  Card
                </label>
                <label>
                  <input
                    type="radio"
                    value="upi"
                    checked={paymentMethod === 'upi'}
                    onChange={() => setPaymentMethod('upi')}
                  />
                  UPI
                </label>
                <label>
                  <input
                    type="radio"
                    value="upi"
                    checked={paymentMethod === 'pay'}
                    onChange={() => setPaymentMethod('pay')}
                  />
                  Pay@hotel 
                </label>
              </div>
              <div className='cardbox'>
                {paymentMethod === 'card' && (
                  <div className="card">
                    <label className="cardNumber">Card Number</label>
                    <input
                      type="text"
                      id="cardNumber"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder="Credit or Debit"
                      required
                    />
                  </div>
                )}
                {paymentMethod === 'card' && (
                  <div className="card">
                    <label className="cardNumber">Expiry Date</label>
                    <input
                      type="text"
                      id="expiryDate"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      placeholder="MM/YYYY"
                      required
                    />
                  </div>
                )}
                {paymentMethod === 'card' && (
                  <div className="card">
                    <label className="cardNumberv">CVV</label>
                    <input
                      type="password"
                      id="cvv"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      placeholder="CVV"
                      pattern="\d{3}"
                      required
                    />
                  </div>
                )}
              </div>
              <div className='upibox'>
                {paymentMethod === 'upi' && (
                  <div className="upi">
                    <label className="upiId">UPI ID</label>
                    <input
                      type="text"
                      id="upiId"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="Enter UPI ID"
                      required
                    />
                  </div>
                )}
                {paymentMethod === 'upi' && (
                  <div className="upi">
                    <label className="upiId">Password</label>
                    <input
                      type="password"
                      id="upiId"
                      value={pass}
                      onChange={(e) => setUpipass(e.target.value)}
                      placeholder="UPI Password"
                      required
                    />
                  </div>
                )}
              </div>
              <div className='checkbox-container'>
              <input
                type="checkbox"
                id="agreeTerms"
                required
              />
              <label id="agreeTerms">I agree to the <a href='#'>terms and conditions</a></label>
            </div>
              <div className="form-actions">
                <button className='back' type="button" onClick={onGoBack}>Go Back</button>
                {paymentMethod !== 'pay' && (
                  <button className='pro' type="submit">Pay Now &#8377; {hotel.price * guests * days * rooms}</button>
                )}
                {paymentMethod == 'pay' && (
                  <button className='pro' type="submit">Book Now</button>
                )}
                <button className='can' type="button" onClick={onClose}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentTab;
