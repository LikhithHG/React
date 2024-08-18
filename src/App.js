//import logo from './logo.svg';
import React from 'react'; //default import
import Header from "./components/Header"
import Body from './components/Body';
//import ReactDOM from "react-dom/client"
import './App.css';

const App = () => {
    return (
      <div className='App'>
        <Header />
        <Body />
      </div>
    );
  }

export default App;
