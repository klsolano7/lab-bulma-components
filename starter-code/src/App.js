import React from 'react';
import logo from './logo.svg';
import Navbar from './Navbar';
import './App.css';
import Formfield from './Formfield'
import Coolbutton from "./Coolbutton"
import Signup from "./Signup"

function App() {
  return (
    <div className="App">
    <Navbar />
    <Formfield />
    <Coolbutton classes="button is-success rounded"/>
    <Signup />
    </div>
  );
}

export default App;
