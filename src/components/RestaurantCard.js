import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import userContext from "../utils/UserContext";


const ResturantCard = (props) => {
   const { resData } = props;
   const { name, cuisines, rating } = resData?.info;
   const {loggedInUser} = useContext(userContext);
   return (
      <div className="res-card">
         <img
            className="res-img"
            src={
               CDN_URL +
               resData.info.cloudinaryImageId
            }
            alt="res-logo"
         />
         <h3>{name}</h3>
         <h4>{cuisines.join(", ")}</h4>
         <h5>{rating}</h5>
         <span>{loggedInUser}</span>
         {/* <h5>{resData.info.sla.deliveryTime}</h5> */}
      </div>
   );
};

// Higer Order Component

// input = REstaurantCard == RstaurantCardPromoted

export const withPromotedLabel = (ResturantCard) => {
   return (props) => {
      return (
         <div>
            <label>Promoted</label>
            <ResturantCard {...props}/>
         </div>
      )
   } 
}


export default ResturantCard;