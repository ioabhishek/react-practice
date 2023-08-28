import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
   const [btnNameReact, setBtnNameReact] = useState("Login");

   return (
      <div className="header">
         <div className="logo-wrap">
            <img className="logo" src={LOGO_URL} alt="" />
         </div>
         <div className="nav-items">
            <ul>
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/about">About us</Link>
               </li>
               <li>
                  <Link to="/contact">Contact Us</Link>
               </li>
               <li>Cart</li>
               <button
                  className="login-btn"
                  onClick={() => {
                     btnNameReact === "Login"
                        ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login");
                  }}>
                  {btnNameReact}
               </button>
            </ul>
         </div>
      </div>
   );
};

// module.exports = Header;
export default Header;
