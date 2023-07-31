import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [num, setNum] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, message, phone: num };
    try {
      const result = await axios.post("http://localhost:8001/feedback/addf", data);
      console.log(result.data);
      toast.success("Message Sent Successfully!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setName("");
      setEmail("");
      setMessage("");
      setNum("");
    } catch (error) {
      toast.error("Failed to send message!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <>
    <div className="contentc">
    <Navbar />
      <div className="boxc">
        <div className="centrec">Contact Us</div>
        <div className="emailc">Email<a className="mailc" href="mailto:reserve@bookmystay.com">: reserve@bookmystay.com</a></div>
        <div className="mobilec">Mobile  &nbsp;: +91  9715507273</div>
        </div>
        <div className="contact-container">
          <h1>Feedback / Queries</h1>
          <form onSubmit={handleSubmit}>
            <div className="contact-form">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{color:'white'}}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{color:'white'}}
              />
              <input
                type="text"
                placeholder="Your Number"
                value={num}
                onChange={(e) => setNum(e.target.value)}
                required
                style={{color:'white'}}
              />
              <textarea
                placeholder="feedback / queries"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                style={{color:'white'}}
              ></textarea>
              <button type="submit">Send Message</button>
              <p id="feel">Feel free to contact us !!!</p>
            </div>
          </form>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
        <div className="homec">
          <Link to='/' title="Home"><FontAwesomeIcon icon={faHouse} beat size="2xl" color="red" /></Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
