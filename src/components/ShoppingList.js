import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const[category, setCategory] = useState('')
  const handleCategory = e => {

  //  const filteredItems = items.filter(item => {  
  //     e.target.value === item.category
  // })
  setCategory(e.target.value)
}

const mappedItems = items => {
  return items.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))
}

const handleFilter = category => {
  if(category === ''){
    return items
  }else{
  return items.filter(item => {
   return category === item.category
  })
}
}

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategory}>
          <option value="">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
         {mappedItems(handleFilter(category))}
      </ul>
    </div>
  );
}

export default ShoppingList;
