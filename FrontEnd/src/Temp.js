import React, { useEffect, useState } from "react";
import axios from "axios";
import './Temp.css';
import { Button } from "antd";

const Temp = () => {
  const [hotels, setHotels] = useState([]);
  const [address, setAddress] = useState("");
  const [rate, setRate] = useState("");
  const [room, setRoom] = useState("");
  const [hname, setHotel] = useState("");

  useEffect(() => {
        const fetchHotels = () => {
          axios
            .get("http://127.0.0.1:8080/get")
            .then((response) => {
              setHotels(response.data);
            })
            .catch((error) => {
              console.error("Error fetching data:", error);
            });
        };
    
        fetchHotels();
      }, []);

  useEffect(() => {
    if (address.trim() !== "") {
      fetchHotelsByAddress();
    }
  }, [address]);

  useEffect(() => {
    if (room.trim() !== "") {
      fetchHotelsByroom();
    }
  }, [room]);

  useEffect(() => {
    if (rate.trim() !== "") {
      fetchHotelsByRate();
    }
  }, [rate]);

  useEffect(() => {
    if (hname.trim() !== "") {
      fetchHotelsByName();
    }
  }, [hname]);

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

  const fetchHotelsByroom = () => {
    axios
      .get(`http://127.0.0.1:8080/getroom/${room}`)
      .then((response) => {
        setHotels(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const fetchHotelsByName = () => {
    axios
      .get(`http://127.0.0.1:8080/getname/${hname}`)
      .then((response) => {
        setHotels(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const fetchHotelsByRate = () => {
    axios
      .get(`http://127.0.0.1:8080/getrate/${parseFloat(rate)}`)
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

  const handleRateChange = (event) => {
    const { value } = event.target;
    setRate(value);
  };

  const handleRoomChange = (event) => {
    const { value } = event.target;
    setRoom(value);
  };

  const handleHotelChange = (event) => {
    const { value } = event.target;
    setHotel(value);
  };

  const roomOptions = [
    { label:'select room types'},
    { label: 'Premium room', value: 'Premium room'},
    { label: 'Suite room', value: 'Suite room'},
    { label: 'Superior room', value: 'Superior room'},
    { label: 'Deluxe Double Room', value: 'Deluxe Double Room'},
    { label: 'Deluxe Twin Room', value: 'Deluxe Twin Room'}
  ];
  return (
    <>
    <div className="do"></div>
    <div className="data">
    <p id="left">Filter By Location</p>
    <input type="text" className="address" value={address} placeholder="Filter by Cities" onChange={handleInputChange} /><br></br><br></br><hr></hr>
    <div>
    <p id="left">Filter By Hotels</p>
    <input type="text" className="address" value={hname} placeholder="Filter by hotels" onChange={handleHotelChange} /><br></br><br></br><hr></hr>
    <p id="left">Filter By Rating's</p>
    {[1, 2, 3, 4, 5].map((rating) => (
    <label key={rating} className="address">
      <input
        type="radio"
        name="rating"
        value={rating}
        checked={rate === rating}
        onChange={handleRateChange}
      />
      {rating}
      </label>
    ))}
  </div><br></br><br></br><hr></hr>
    <p id="left">Find by Room type's</p>
    <select className="address" value={room} onChange={handleRoomChange}>
      {roomOptions.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
      ))}
      </select><br></br><br></br><hr></hr>
      <button className="addres"><a href="http://localhost:3000/">Clear filter's</a></button>
      {hotels.map((hotel) => (
        <div key={hotel.id}>
        <div className="boxm">
        <div className="boxmt">
        <div className="rect1"></div>
        <div className="rect">
        <h3 id="name">{hotel.hname}</h3>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <p id="place"><i class="material-icons" style={{fontSize:'13px'}}>place</i>{hotel.add} , {hotel.address}</p>
        <div id="review">
        <p id="rate">{hotel.rate} / 5</p>
        <p id="reviews-count">20+ Reviews</p>
        </div>
        <p id="ame">{hotel.ame}</p>
        <p id="roomtype">Room Type : {hotel.room}</p>
        </div>
        <div className="rect2">
        <p id="offer1">&#x2713; Free Cancellation</p>
        <p id="offer2"> &#x2713; Pay @ Hotel</p>
        <p id="old"><s>&#x20b9; {hotel.old}</s></p>
        <p id="price">&#x20b9; {hotel.price}</p>
        <p id="night">/night for 2 guests</p>
        <div><Button id="books">Book Now</Button></div>
        </div>
        </div>
        </div>
        </div>
        ))}
        </div>
        </>
  );
};

export default Temp;
