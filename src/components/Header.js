//import LOGO_URL from contants.js using named import
import { useState } from "react";
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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button
                        className="Login"
                        onClick={() => {
                            //Toggle Functionality
                            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                            console.log(btnNameReact);
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