import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesContextProvider } from './store/fav-context';

import App from './App';

import './index.css';


ReactDOM.render(
  <FavoritesContextProvider>
      <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
      </BrowserRouter>
  </FavoritesContextProvider>
  ,
  document.getElementById('root')
);


