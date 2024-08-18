import {RES_LOGO_URL} from "../utils/constants.js"

//Inline styles - not preferred way
const styleCard = {
    backgroundColor: "#f0f0f0"
}


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
                src={RES_LOGO_URL} alt='public/logo192.png'>
            </img>
            <h3>{name}</h3>
            <h4>{cusines.join(",")}</h4>
            <h4>{rating}</h4>
        </div>
    )
}

export default RestauranCard;