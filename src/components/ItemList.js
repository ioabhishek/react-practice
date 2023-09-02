import React from "react";

const ItemList = ({ items }) => {
   console.log(items);

   // const {name, description, price} = items[0].card.info

   return (
      <ul>
         {items.map((item) => (
            <li key={item.card.info.id} className="acc_item">
               <div>{item.card.info.name}</div>
               <div>
                  ₹
                  {item.card.info.price
                     ? item.card.info.price / 100
                     : item.card.info.defaultPrice / 100}
               </div>
               <div>{item.card.info.description}</div>
            </li>
         ))}
      </ul>
   );
};

export default ItemList;
