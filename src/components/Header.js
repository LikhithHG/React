//import LOGO_URL from contants.js using named import
import {LOGO_URL} from "../utils/constants.js"

const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

//We need to export this header
export default Header;