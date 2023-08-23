import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";

const Body = () => {

   const [listOfResturants, setListOfResturants] = useState([]);

   useEffect(() => {
      fetchData();
   }, [])

   const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.949756&lng=77.6997624&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      
      const json = await data.json();
      console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
      setListOfResturants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   }

   if(listOfResturants.length === 0) {
      return <h1>Loading...</h1>
   }

   return (
      <div className="body">
         <div className="filter">
            <button
               className="filter-btn"
               onClick={() => {
                  const filteredList = listOfResturants.filter((res) => res.info.avgRating > 4.3);
                  setListOfResturants(filteredList);
               }}>
               Top Rated Resturants
            </button>
         </div>
         <div className="rest-container">
            {listOfResturants.map((resturant) => (
               <ResturantCard key={resturant.info.id} resData={resturant} />
            ))}
         </div>
      </div>
   );
};

export default Body;
