import logo from './logo.svg';
import './App.css';
import React, {useContext, useEffect, useState} from "react";
import AppRouter from "./components/AppRouter";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
      <Router>
        <AppRouter/>
      </Router>
  );
}

export default App;
