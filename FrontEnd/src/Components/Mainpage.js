import React from "react";
import "./Mainpage.css";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";
import { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import BookingForm from "./BookingForm";
import { useDispatch } from "react-redux";
import { setUser } from "./action";

      const Mainpage = () => {
      const dispatch = useDispatch();
      const [search, setSearch] = useState("");
      const [datein, setDatein] = useState("");
      const [dateout, setDateout] = useState("");
      const [guest, setGuest] = useState("");
      const [showForm, setShowForm] = useState(false);
      const [selectedHotel, setSelectedHotel] = useState(null);

  const handleBookNow = (hotel) => {
    setSelectedHotel(hotel);
    setShowForm(true);
    dispatch(setUser(selectedHotel));
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedHotel(null);
    // console.log(selectedHotel);
  };

  const handleFormSubmit = (data) => {
    // console.log('Form data:', data);
  };

      
      const handleSearchChange = (event) => {
        setSearch(event.target.value);
      };
      
      const handleDateinChange = (event) => {
          setDatein(event.target.value);
        };
      
        const handleDateoutChange = (event) => {
            setDateout(event.target.value);
          };
        
          const handleGuestChange = (event) => {
              setGuest(event.target.value);
            };
          
            const handleSubmit = (event) => {
                event.preventDefault();
                console.log("Destination:", search);
                console.log("Check-In:", datein);
                console.log("Checkout:", dateout);
                console.log("Guests:", guest);
              };
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
      <div>
      <div className="bagimg">
      <Navbar/>
      <button className="left"></button>
      <div className="midm">
      <div className="search">
      <form className="form" onSubmit={handleSubmit}>
      <div className="boxss">
      <p id="scons">City / Hotel / Area</p>
      <input
      id="choose"
      type="text"
      title="Destination"
      placeholder="Destination"
      value={address}
      onChange={handleInputChange}
      required
      />
      </div>
      <div className="box">
      <p id="scon">Check-In-Date</p>
      <input
      id="choose"
      type="datetime-local"
      title="Date"
      placeholder="CheckIn Date"
      onChange={handleDateinChange}
      required
      />
      </div>
      <div className="box">
      <p id="scon">Check-Out-Date</p>
      <input
      id="choose"
      type="datetime-local"
      title="Date"
      placeholder="CheckIn Date"
      onChange={handleDateoutChange}
      required
      />
      </div>
      <div className="box">
      <p id="scon">Guests</p>
      <input
      id="chooseguest"
      type="number"
      min={1}
      title="Guest"
      placeholder="Guest"
      defaultValue={1}
      onChange={handleGuestChange}
      required
      />
      </div>
      <div className="box">
      <button className="boxssm">Search</button>
      </div>
      </form>
            </div>
            </div>
            <div className="rooms">
            <div className="mainm0">
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
      <button className="address"><a href="http://localhost:3000/Mainpage">Clear filter's</a></button>
      <div className="boxview">
      {hotels.length === 0 ? (
        <>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGOBo2HfwSuyZ-cLJFIGnz3-HqAuhopFwjEA&usqp=CAU" height='600px' ></img>
        </>
      ) : (
      hotels.map((hotel) => (
        <div key={hotel.id}>
              <div className="bom">
              <div className="boxmt">
                <div className="rect1"><img src={hotel.imgin} alt="Hotel Image" width='200px' height='200px'/></div>
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
                <p id="old"><s>&#x20b9; {hotel.old}</s><span id='offer'>{hotel.offer}%&nbsp;off</span></p>
                <p id="price">&#x20b9; {hotel.price}</p>
                <p id="night">/night for 2 guests</p>
                <div><button id="bookhotels" onClick={() => handleBookNow(hotel)}>Book Now</button></div>
                </div>
                </div>
                </div>
                </div>
                ))
                )}
                </div>
                </div>
                </div>
                </div>
                </div>
                {showForm && selectedHotel && (
                  <BookingForm
                    hotel={selectedHotel}
                    onClose={handleCloseForm}
                    onSubmit={handleFormSubmit}
                  />
                )}
        </div>
        
        
        <div style={{backgroundcolor:'rgb(245, 250, 255)'}}>
        <div className="flowd">
        <div><h2>Why Book Hotels with BookMyStay?</h2></div>
        </div>
        <div className="flowh">
        <div className="flowbox" style={{ backgroundImage: "url('https://www.easemytrip.com/hotels/content/img/homes/hotel-icn.svg')"}}><h4>Extensive Hotel Options</h4><p>Best hotels available for different destinations to offer you the stay of a lifetime.</p></div>
        <div className="flowbox" style={{ backgroundImage: "url('https://www.easemytrip.com/hotels/content/img/homes/wallet-icn.svg')"}}><h4>Savings on Hotel Booking</h4><p>Enjoy hotel bookings with the best offers and discounts and make your stay unforgettable.</p></div>
        <div className="flowbox" style={{ backgroundImage: "url('https://www.easemytrip.com/hotels/content/img/homes/rating-icn.svg')"}}><h3>Hotel Ratings</h3><p>All our hotels have good ratings and recommended by users.</p></div>
        <div className="flowbox" style={{ backgroundImage: "url('https://www.easemytrip.com/hotels/content/img/homes/beach-icn.svg')"}}><h3>Best Price</h3><p>Discover luxurious hotels/resorts at unbeatable prices to indulge your every desire.</p></div>
        </div>
        </div>
        <div className="flowd"></div>
        <Footer/>
        </>
  );
};

export default Mainpage;
