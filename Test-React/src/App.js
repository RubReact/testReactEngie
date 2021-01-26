//import logo from './logo.svg';
//import './App.css';
import React from 'react';

//import {BrowserRouter as Router,Route} from 'react-router-dom';
import ToAgency from './MyLists';
import AgencyList from './Myagencies';
//import Nav from './Nav';

import "./App.css";


function App() {
  return (



     <div className="App">
         <AgencyList/>
         <ToAgency/>

      </div>


  );
}

export default App;
