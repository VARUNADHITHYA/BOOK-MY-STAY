import React from "react";
import './Home.css';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
// import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import Footer from "./Footer";
import Header from "./Header";
import { useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
const Home = () => {
  const [search, setSearch] = useState('');
    const [datein, setDatein] = useState('');
    const [dateout, setDateout] = useState('');
    const [guest , setGeust] = useState('');
    const navigate = useNavigate();
    const handleSearchChange = (event) => {
      setSearch(event.target.value);
    };
    const [address, setAddress] = useState("");
    const handleDateinChange = (event) => {
      setDatein(event.target.value);
    };
    
    useEffect(() => {
      if (address.trim() !== "") {
        fetchHotelsByAddress();
      }
    }, [address]);

    const [hotels, setHotels] = useState([]);

    const fetchHotelsByAddress = () => {
      axios
        .get(`http://127.0.0.1:8080/get/${address}`)
        .then((response) => {
          setHotels(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    const handleInputChange = (event) => {
      const { value } = event.target;
      setAddress(value);
    };


    const handleDateoutChange = (event) => {
        setDateout(event.target.value);
    };
    const handleGuestChange = (event) => {
      setGeust(event.target.value);
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Destination:', search);
      console.log('CheckIn:', datein);
      console.log('Checkout:', dateout);
      console.log('Guests:', guest);

      navigate('/Mainpage');
    };
    
  return (
    <div>
    <div className="flow">
    <div className="mid">
    <div className="contentcentre">
      <button className="left"></button>
      <div className="bottom">Discover the real value of travel</div>
      <div class="centered">Wherever you want to go,we are<br></br><div className="cfont">there for you</div></div>
    </div>
    <div>
    <Navbar/>
    </div>
    <div className="col">
    <div className="search">
    <form className="form" onSubmit={handleSubmit}>
    <div className="boxss"><p id="scons">City / Hotel / Area</p>
    <input
      id="choose"
      type="text"
      title="Destination"
      placeholder="Destination"
      value={address}
      onChange={handleInputChange}
      required
      /></div>
    <div className="box"><p id="scon">Check-In-Date</p><input id='choose' type="date" title='Date' placeholder="CheckIn Date" onChange={handleDateinChange} required/></div>
    <div className="box"><p id="scon">Check-Out-Date</p><input id='choose' type="date" title='Date' placeholder="CheckIn Date" onChange={handleDateoutChange} required/></div>
    <div className="box"><p id="scon">Guests</p><input id="chooseguest" type="number" onkeypress="return event.charCode >= 48" min={1} title='Guest' placeholder="Guest" defaultValue={1} onChange={handleGuestChange} required /></div>
    <div className><button className="boxs">Search</button></div>
    </form>
    </div>
    </div>
    </div>
    <div className="content">
    <div className="features">
      <div className="fea"><img src="https://d1ha4q9jvugw4k.cloudfront.net/static/img/speed.svg"></img><div className="text"><b>FLEXIBLE STAY</b><br></br>Check-in & Check-out of our hotels at your convenience</div></div>
      <div className="fea3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQe3D17oR7Alupv45Jk17Sfc4bBMH3f8lWyR4ViJs1x6C20XHSeNzBhvd3KtmL_7MttyI&usqp=CAU" width={100}></img><div className="text"><b>EXCLUSIVE DISCOUNTS</b><br></br>Unlock special discounts and offers when you book directly on our website</div></div>
      <div className="fea2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKGj1M6PSqxccv_kDlTVMzM9Z9OdZQqkBQoGbZaKKi1gfAfxW_udsRzzNA-Sk4h1A8Ac&usqp=CAU" width={100}></img><div className="text"><b>PAY AT HOTEL</b><br></br>Reserve your stay with a small amount and pay remaining at the hotel</div></div>
      <div className="fea3"><img src="data:image/png;base64,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" width={90}></img><div className="text"><b>FREE CANCELLATION</b><br></br>Enjoy the flexibility to Cancel your reservation with no additional charges or fees</div></div>
      <div className="fea"></div>
    </div>
    <h1 className="top-cities">Popular Destinations</h1>
    <div className="city-container">
    <div className="city">
    <div className="c">
    <Link to='/Mainpage'>
    <img src="https://static.fabhotels.com/cities/android/new-delhi_v3.jpg" alt="New Delhi"/>
    <div className="image-text">New Delhi</div>
    </Link>
    </div>
    <div className="c">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6kGrO_8fglW8e3tJ8yBfnFlIeTqDVeU1Sjw&usqp=CAU" alt="Mumbai"/>
    <div className="image-text">Mumbai</div>
    </div>
    <div className="c">
    <Link to='/Mainpage'>
    <img src="https://static.fabhotels.com/cities/android/chennai_v3.jpg" alt="Chennai"/>
    <div className="image-text">Chennai</div>
    </Link>
    </div>
    <div className="c">
    <Link to='/Mainpage'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4pNbzHpCubOtXe_BFfxWh9MeaB9cgsa5J4g&usqp=CAU" alt="Banglore"/>
    <div className="image-text">Banglore</div>
    </Link>
    </div>
    <div className="c">
    <img src="https://static.fabhotels.com/cities/android/pune_v3.jpg" alt="Pune"/>
            <div className="image-text">Pune</div>
            </div>
            <div className="c">
            <img src="https://hotelstatic.happyeasygo.com/ForFront/pc/hotels-in-kolkata.jpg" alt="Kolkata"/>
            <div className="image-text">kolkata</div>
            </div>
            <div className="c">
            <img src="https://hicc.com/wp-content/uploads/2020/02/Charminar-2.jpg" alt="Hyderabad"/>
            <div className="image-text">Hyderabad</div>
            </div>
            <div className="c">
            <img src="https://static.fabhotels.com/cities/android/jaipur_v3.jpg" alt="Jaipur"/>
            <div className="image-text">Jaipur</div>
            </div>
            </div>
            </div>
            </div>
            <marquee className="move"> Booking has been enabled only for the destination's New Delhi , Chennai & Banglore</marquee>
            <div className="flow"></div>
            <div className="whie"></div>
          <Footer/>
        </div>
        </div>
  );
};
export default Home;