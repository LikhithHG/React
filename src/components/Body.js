import RestauranCard from './RestauranCard';
import resList from '../utils/mockData';

const Body = () => {

    //State Variable - one of the powerful variable
    //For this we use a React Hooks and it is a normaj javascript function given by the react

    //This is Normal JS Variable
    let listOfRestaurants = {};

    return(
        <div className='body'>
            <div className='filter'>
                <button 
                    className='filter-btn' //OnClick takes the callback function
                    onClick={() => {
                        //Filter logic here
                        listOfRestaurants = resList.filter(
                            (item) => item.data.rating >= 4
                        );
                        console.log(listOfRestaurants);
                    }}>
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
                    
                    resList.map((restaurant) => (
                        <RestauranCard key = {restaurant.data.id} resData = {restaurant}/>
                    ))
                }
                
                
            </div>
        </div>
    )
}

export default Body;