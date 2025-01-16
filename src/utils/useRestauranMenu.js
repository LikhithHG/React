//Creating Custom hook from RestauranMenu.js to increase modularity and Single Responsibility Principle
import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

//This just fetches data

const useRestauranMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const data = await fetch(MENU_API + resId);
                const json = await data.json();
                //To check if data is valid
                //console.log(json);
                setResInfo(json.data);
            }
            catch(error){
                console.error("Error fetching menu data: ", error);
            }
        }
        fetchData();
    }, [resId]);

    return resInfo;
}

export default useRestauranMenu;