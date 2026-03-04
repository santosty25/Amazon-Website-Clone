import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from './firebase'
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from './StateProvider'

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads
    onAuthStateChanged(auth, (authUser) => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // the user just logged in or the user was logged in
        // send information to the data layer
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        // remove user from the data layer
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" 
                element={<Login />} 
          />
          <Route
            path="/checkout"
            element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
