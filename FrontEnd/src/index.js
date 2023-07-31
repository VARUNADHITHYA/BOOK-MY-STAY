import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import store from './Components/store';
import { Provider } from 'react-redux';
import Mainpage from './Components/Mainpage';
import Temp from './Temp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <Auth0Provider 
  domain="dev-c6e3hxzu5t2s1edx.us.auth0.com"
  clientId="BjpAwJRU3YraYCjYqvNs5sJfLVwVLYje"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >
  <App/>
  </Auth0Provider>,
  </Provider>
);
reportWebVitals();
