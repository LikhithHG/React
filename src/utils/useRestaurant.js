//This will fetch the data for the restaurants that will be displayed in the body
import { API } from '../utils/constants';
import { useState, useEffect } from 'react';

const useRestaurant = () => {
    const [restaurants , setRestaurants] = useState([]);

    useEffect(() => {
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
        setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return restaurants;
}

export default useRestaurant;