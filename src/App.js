//import logo from './logo.svg';
import React from 'react';
//import ReactDOM from "react-dom/client"
import './App.css';

//React Element
/*
Header
- Logo
- Navigation
Body
- search
- card container
    - different restro cards
        img
        name
        rating
        cusines
        price
Footer
- copyright
- social media links
*/ 

const Header = () => {
    return(
        <div className="header">
            <div className='logo-container'>
                <img className='logo' src='https://static.vecteezy.com/system/resources/previews/021/953/308/original/food-ordering-app-logo-with-points-and-fork-shapes-in-the-center-free-vector.jpg' alt='public/logo192.png' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

//Inline styles - not preferred way
const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestauranCard = (props) => {

    //const { resname, cusine } = props;

    return(
        <div className='res-card' style={styleCard}>
            <img className='res-logo'
                src='https://b.zmtcdn.com/data/dish_photos/1a0/ffe7eb06f808b1da06032cccda8551a0.jpg' alt='public/logo192.png'>
            </img>
            <h3>{props.resName}</h3>
            <h4>{props.cusine}</h4>
            <h4>{props.rating}</h4>
        </div>
    )
}

const Body = () => {
    return(
        <div className='body'>
            <div className='search'>
                Serach
            </div>
                
            <div className='res-container'>
                {/* Restro Card and we will make a seperate component for that since it will be reused many times */}
                <RestauranCard resName = 'Muthalli Veg' cusine = 'North Indian and South Indian Veg' rating = '4.4 star'/>
                <RestauranCard resName = 'KFC' cusine = 'Burger' rating = '4.3 star'/>

            </div>
        </div>
    )
}

const App = () => {
    return (
      <div className='App'>
        <Header />
        <Body />
      </div>
    );
  }

export default App;
