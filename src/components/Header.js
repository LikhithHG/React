//import LOGO_URL from contants.js using named import
import { useState } from "react";
import { Link } from "react-router-dom";
import {LOGO_URL} from "../utils/constants.js"
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return(
        <div className="header">
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} alt='public/logo192.png' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li> {/** use the key in keyboard windows + . to get emojis */}
                        Online Status: {onlineStatus ? "🟢" : "🔴"} 
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <button
                        className="Login"
                        onClick={() => {
                            //Toggle Functionality
                            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                            //console.log(btnNameReact);
                        }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}

//We need to export this header
export default Header;