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

//This is the array of objects of restaurant list
const resList = [{
    type: "restaurant",
    data: {
        id: "1",
        name: "McDonalds",
        cusines: ["Burgers", "French Fries", "Cool-Drinks"],
        rating: "4.3"
    }
},
{
    type: "restaurant",
    data: {
        id: "2",
        name: "Idli Hotel",
        cusines: ["Idli", "Vada", "Poori"],
        rating: "4.2"
    }
}];

const RestauranCard = (props) => {

    const { resData } = props;

    //We will destructure the data object
    const { 
        name, 
        cusines, 
        rating, 
    } = resData?.data;

    return(
        <div className='res-card' style={styleCard}>
            <img className='res-logo'
                src='https://b.zmtcdn.com/data/dish_photos/1a0/ffe7eb06f808b1da06032cccda8551a0.jpg' alt='public/logo192.png'>
            </img>
            <h3>{name}</h3>
            <h4>{cusines.join(",")}</h4>
            <h4>{rating}</h4>
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
                {
                    /*
                    This is not a good way we need to loop over the array of restaurant list 
                    
                    <RestauranCard resData = { resList[0] }/>
                    <RestauranCard resData = { resList[1] }/>
                    
                    But we wont use the for loop but use the functional programming concepts of map function 
                    Map function interates over all the elements of the loop
                    */
                    
                    resList.map((restaurant) => (
                        <RestauranCard key = {restaurant.data.id} resData = {restaurant}/>
                    ))
                }
                
                
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
