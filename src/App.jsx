import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { AppRouter } from './Routes/AppRputer';

function App() {
  return ( 
    <AppRouter />
  )
}

export default App;