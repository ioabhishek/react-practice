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
               <li>Home</li>
               <li>About Us</li>
               <li>Contact Us</li>
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
