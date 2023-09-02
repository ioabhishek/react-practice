import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({data}) => {

   const [showItems, setShowItems] = useState(false);
   
   const handleClick = () => {
      // showItems === false ? setShowItems(true) : setShowItems(false);
      // toggle feature or called as shortcut 
      setShowItems(!showItems)
   }

   return (
      <>
         <div className='category'>
            <div className='acc_head' onClick={handleClick}>
               <span>{data.title} ({data.itemCards.length})</span>
               <span>⬇️</span>
            </div>
            {showItems && <ItemList items={data.itemCards}/>}
         </div>
      </>
   )
}

export default RestaurantCategory