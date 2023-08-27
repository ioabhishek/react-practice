import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
   // Locale state variable
   const [listOfRestaurants, setlistOfRestaurants] = useState([]);
   const [filteredRestaurants, setFilteredRestaurants] = useState([]);

   const [searchText, setSearchText] = useState("");
   console.log("body rerendered");

   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = async () => {
      const data = await fetch(
         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.949756&lng=77.6997624"
      );

      const json = await data.json();
      console.log(
         json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
      );

      // optional chaining
      setlistOfRestaurants(
         json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );
      setFilteredRestaurants(
         json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );
   };

   return listOfRestaurants.length === 0 ? (
      <Shimmer />
   ) : (
      <div className="body">
         <div className="filter">
            <div className="search">
               <input
                  type="text"
                  placeholder="Search..."
                  className="search-box"
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
               />
               <button
                  onClick={() => {
                     

                     console.log(searchText);
                     const filteredRestaurant = listOfRestaurants.filter(
                        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                     );
                     setFilteredRestaurants(filteredRestaurant)
                  }}>
                  Search
               </button>
            </div>

            <button
               className="filter-btn"
               onClick={() => {
                  const filteredList = listOfRestaurants.filter(
                     (res) => res.info.avgRating > 4.3
                  );
                  setlistOfRestaurants(filteredList);
               }}>
               Top Rated Resturants
            </button>
         </div>
         <div className="rest-container">
            {filteredRestaurants.map((resturant) => (
               <ResturantCard key={resturant.info.id} resData={resturant} />
            ))}
         </div>
      </div>
   );
};

export default Body;
