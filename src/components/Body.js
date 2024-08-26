import RestauranCard from './RestauranCard';
import resList from '../utils/mockData';
import { useState, useEffect } from 'react'; //This is a type of hook and its a named import

const Body = () => {

    //State Variable - one of the powerful variable
    //For this we use a React Hooks and it is a normal javascript function given by the react
    //State variable by react
    //Whatever we pass will be the default value to the variable(1st parameter)
    //2nd Parameter is the function to update the first variable 

    // Same as the below using array destructuring
    //const arr = useState(resList);
    // const [listOfRestaurants, setListofRestaurant] = arr;

    const [listOfRestaurants, setListofRestaurant] = useState(resList); 

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
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        ); 

        //once we get data we need to convert it to JSON
        const json = await data.json();
        
        //Print the JSON
        //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

        //Optional Chaining
        //json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants

        //use the hooks to render data from API
        //setListofRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    //This is Normal JS Variable
    //let listOfRestaurants = {};

    const [searchText, setSearchText] = useState("");

    return(
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
                            console.log(searchText);

                            //Use filter method from javascript to filter data from API
                        
                            const filteredRestaurant = listOfRestaurants.filter(
                                (res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())
                            );

                            setListofRestaurant(filteredRestaurant);
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
                            const filteredList = resList.filter(
                                (item) => item.data.rating >= 4
                            );
                            setListofRestaurant(filteredList);
                            console.log(filteredList);
                        }
                    }
                >
                    Top Rated Restaurant
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
                    
                    listOfRestaurants.map((restaurant) => (
                        <RestauranCard key = {restaurant.data.id} resData = {restaurant}/>
                    ))
                }
                
                
            </div>
        </div>
    )
}

export default Body;