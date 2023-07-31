import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Profile.css';
import axios from 'axios';

const Profile = () => {
  const { user, getIdTokenClaims } = useAuth0();
  // console.log(user.name);
  // console.log(user.email);
  // console.log(user.picture);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const tokenClaims = await getIdTokenClaims();
        const token = tokenClaims.__raw;
        console.log('JWT Token:', token);

        const datatoken = {
          useremail: user.email,
          username: user.name,
          token: token,
        };

        console.log(datatoken);
        axios
          .post("http://127.0.0.1:8080/posttoken", datatoken)
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
      } catch (error) {
        console.error('Error getting the JWT token:', error.message);
      }
    };

    fetchToken();
  }, [getIdTokenClaims, user.email, user.name]);

        const data = {
          email: user.email,
          uname: user.name,
        };

        axios.post("http://127.0.0.1:8080/add", data)
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

  return (
    <>
      <div className="userimg">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
      </div>
    </>
  );
};

export default Profile;
