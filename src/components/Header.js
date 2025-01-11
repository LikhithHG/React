//import LOGO_URL from contants.js using named import
import { useState } from "react";
import { Link } from "react-router-dom";
import {LOGO_URL} from "../utils/constants.js"

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    return(
        <div className="header">
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} alt='public/logo192.png' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
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