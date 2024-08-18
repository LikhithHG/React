import RestauranCard from './RestauranCard';
import resList from '../utils/mockData';
import { useState } from 'react'; //This is a type of hook and its a named import

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


    //This is Normal JS Variable
    //let listOfRestaurants = {};

    return(
        <div className='body'>
            <div className='filter'>
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