import RestauranCard from './RestauranCard';
//When using the static data this below import statement is needed
//import resList from '../utils/mockData';
import { useState, useEffect } from 'react'; //This is a type of hook and its a named import
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";
import useRestaurant from '../utils/useRestaurant';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {

    //State Variable - one of the powerful variable
    //For this we use a React Hooks and it is a normal javascript function given by the react
    //State variable by react
    //Whatever we pass there will be the default value to the variable(1st parameter)
    //2nd Parameter is the function to update the first variable 

    // Same as the below using array destructuring
    //const arr = useState(resList);
    // const [listOfRestaurants, setListofRestaurant] = arr;
    //const [listOfRestaurants, setListofRestaurant] = useState([]); 

    // Use the custom hook to fetch restaurant data
    const restaurants = useRestaurant();

    //Filtered Restaurants based on the condition
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    // Local states for search functionality and filtered results
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        setFilteredRestaurants(restaurants); // Set the default list for filtered restaurants
    }, [restaurants]);

    /* Now implemented in custom hook
    useEffect(() => {
        //This is the first argument the useEffect callback function
        //The second parameter is the dependency array
        //console.log("use effect called");
        //This will be work once the component is rendered
        fetchData();
    }, []);

    const fetchData = async () => {
        //fetch function given by the browser and fetch data from the API
        //Fetch always return a promise so to resolve it we need to use async and await
        const data = await fetch(API); 

        //once we get data we need to convert it to JSON and JSON is a promise again and so we use await
        const json = await data.json();
        
        //Print the JSON
        //console.log(json);
        //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

        //Optional Chaining
        //json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants

        //use the hooks to render data from API
        setListofRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        //A copy of the restaurants
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    */

    //Shimmer UI
    
    // if (listOfRestaurants.length === 0) {
    //     return <Shimmer/>;
    // }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
    {
        return (
            <h1>
                No internet connection. Check out the connection!
            </h1>
        );
    }
  

    return filteredRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className='body'>
            <div className='filter'>
                <div className='search'>
                    <input type="text" 
                        className="search-box" 
                        value = {searchText} 
                        onChange={(e) => {setSearchText(e.target.value) }}
                    />
                    <button className="search-btn"
                        onClick={() => {
                            //Filter the restaurant cards and update the UI.
                            //Search text from Input box I need to take the value from input box and bind to local state variable
                            //console.log(searchText);

                            //Use filter method from javascript to filter data from API
                            //Always filter from original list of restaurants
                            const filteredRestaurant = restaurants.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );

                            setFilteredRestaurants(filteredRestaurant);
                        }}
                    >
                    Search
                    </button>

                </div>
                <button 
                    className='filter-btn' //OnClick takes the callback function
                    onClick={() => {
                            //Filter logic here
                            //We use the hooks
                            //Always filter from original list of restaurants
                            const filteredList = restaurants.filter(
                                (item) => item.info.avgRating >= 4.3
                            );
                            setFilteredRestaurants(filteredList);
                            //console.log(filteredList);
                        }
                    }
                >
                    Top Restaurants
                </button>
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
                    
                    filteredRestaurants.map((restaurant) => (
                        <Link 
                            key = {restaurant.info.id}
                            to = {"/restaurants/" + restaurant.info.id}
                        >
                            <RestauranCard  resData = {restaurant}/>
                        </Link>
                    ))
                }
                
                
            </div>
        </div>
    )
}

export default Body;