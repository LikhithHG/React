//import {RES_LOGO_URL} from "../utils/constants.js"
import { CDN_URL } from "../utils/constants.js";

//Inline styles - not preferred way
const styleCard = {
    backgroundColor: "#f0f0f0"
}


const RestauranCard = (props) => {

    const { resData } = props;

    //We will destructure the data object
    const {
        cloudinaryImageId, 
        name, 
        avgRating,
        cuisines, 
    } = resData?.info;//optional chaining

    return(
        <div className='res-card' style={styleCard}>
            <img className='res-logo'
                src={CDN_URL+cloudinaryImageId} 
                alt='public/logo192.png'
            >
            </img>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
        </div>
    )
}

export default RestauranCard;