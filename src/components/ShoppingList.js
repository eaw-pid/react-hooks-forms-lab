import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemsUpdated }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value)
  }

  function onItemFormSubmit(newItem) {
    onItemsUpdated(newItem)
  }
  
  const itemsToDisplay = items
  .filter((item) => {
    if(selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
  .filter((item) => {
    if (search === "") {
      return true;
    } 
    if (item.name.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }
  })

  
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      
      </ul>
    </div>
  );
}

export default ShoppingList;


// const itemsToDisplay = items.filter((item) => {
  //   //check if the item matches the selected category
  //   //selectedCategory !== "All" checks if the selected category is not = to "All" -> it means a specfici category is selected and we need to filter based on the category.
  //   //item.category !== selectedCategory: checks if the item's category is not equal to the selected category -> means the item does not match the selected category filter
  //   //if EITHER of these conditions is 'true', it means the item does not match the selected cateogry filter
  // //In that case, we return false from the filter function, which removes the item from filteredList array
  //   if (selectedCategory !== "All" && item.category !== selectedCategory) {
  //     return false;
  //   }
  //   // Check if the item name includes the form field value
  //   if (!item.name.toLowerCase().includes(formField.toLowerCase())) {
  //     return false;
  //   }

  //   return true;
  // });

