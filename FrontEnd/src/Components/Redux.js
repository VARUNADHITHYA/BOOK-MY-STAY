import React, { useState } from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Contact.css';

// Redux actions
const setEmail = (email) => {
  return {
    type: 'SET_EMAIL',
    payload: email,
  };
};

const setMobile = (mobile) => {
  return {
    type: 'SET_MOBILE',
    payload: mobile,
  };
};

const setName = (name) => {
  return {
    type: 'SET_NAME',
    payload: name,
  };
};

const setFeedback = (feedback) => {
  return {
    type: 'SET_FEEDBACK',
    payload: feedback,
  };
};

// Redux reducer
const initialState = {
  email: '',
  mobile: '',
  name: '',
  feedback: '',
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.payload,
      };
    case 'SET_MOBILE':
      return {
        ...state,
        mobile: action.payload,
      };
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload,
      };
    case 'SET_FEEDBACK':
      return {
        ...state,
        feedback: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(contactReducer);

// Contact component
const Contact = (props) => {
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  const [feed, setFeed] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    props.setEmail(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
    props.setMobile(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    props.setName(event.target.value);
  };

  const handleFeedChange = (event) => {
    setFeed(event.target.value);
    props.setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email Address:', email);
    console.log('Mobile Number:', mobile);
    console.log('Name:', name);
    console.log('Feedback or Query:', feed);
  };

  return (
    <Provider store={store}>
      <div className="contentc">
        <div className="boxa">
          <div className="centrec">Contact Us</div>
          <div className="emailc">
            Email<a className="mailc" href="mailto:reserve@bookmystay.com">
              : reserve@bookmystay.com
            </a>
          </div>
          <div className="mobilec">Mobile &nbsp;: +91 9715507273</div>
          <div className="linec"></div>
          <div className="get">
            <p id="feed">Feedback & Queries</p>
            <form onSubmit={handleSubmit}>
              <input
                className="emf"
                type="email"
                placeholder="Email Address"
                onChange={handleEmailChange}
                required
              ></input>
              <input
                className="cnf"
                type="text"
                placeholder="Contact Number"
                onChange={handleMobileChange}
              ></input>
              <input
                className="nf"
                type="text"
                placeholder="Name"
                onChange={handleNameChange}
              ></input>
              <textarea
                className="df"
                placeholder="Drop your feedback/query"
                onChange={handleFeedChange}
                required
              ></textarea>
              <button id="button1">Submit</button>
            </form>
          </div>
          <p id="feel">Feel free to contact us</p>
        </div>
        <div className="homea">
          <Link to="/" title="Home">
            <FontAwesomeIcon icon={faHouse} beat size="2xl" color="red" />
          </Link>
        </div>
      </div>
    </Provider>
  );
};

const mapDispatchToProps = {
  setEmail,
  setMobile,
  setName,
  setFeedback,
};

export default connect(null, mapDispatchToProps)(Contact);
