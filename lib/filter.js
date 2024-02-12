import React, { useState } from "react";

// export const useCombinedSort = (initialItems) => {
//   const [sortAZ, setSortAZ] = useState();
//   const [sortMajor, setSortMajor] = useState();
//   const [items, setItems] = useState(
//     Array.isArray(initialItems) ? [...initialItems] : []
//   );

//   const handleSortChangeAZ = (selectedOption) => {
//     setSortAZ(selectedOption);
//     updateItems(selectedOption, sortMajor);
//   };

//   const handleSortChangeMajor = (selectedOption) => {
//     setSortMajor(selectedOption);
//     updateItems(sortAZ, selectedOption);
//   };

//   const updateItems = (azOption, majorOption) => {
//     let sortedItems = [...initialItems];

//     if (azOption === "أ - ي") {
//       sortedItems.sort((a, b) => a.name.localeCompare(b.name, "ar"));
//     } else if (azOption === "ي - أ") {
//       sortedItems.sort((a, b) => b.name.localeCompare(a.name, "ar"));
//     }

//     if (majorOption !== "الجميع") {
//       sortedItems = sortedItems.filter((item) => item.major === majorOption);
//     }

//     setItems(sortedItems);
//   };

//   return {
//     items,
//     handleSortChangeAZ,
//     handleSortChangeMajor,
//   };
// };

export const useCombinedSort = (initialItems) => {
  const [sortAZ, setSortAZ] = useState(null); // State to track sorting order

  const sortItems = (items, sortType) => {
    switch (sortType) {
      case "أ - ي":
        return items.slice().sort((a, b) => a.name.localeCompare(b.name, "ar")); // Sorting alphabetically
      case "ي - أ":
        return items.slice().sort((a, b) => b.name.localeCompare(a.name, "ar"));
      case null:
        return items;
      // Add more cases for other sorting types if needed
      default:
        return items;
    }
  };

  const [items, setItems] = useState(sortItems(initialItems, sortAZ)); // Initial sorting

  const handleSortChangeAZ = (selectedOption) => {
    setSortAZ(selectedOption);
    setItems(sortItems(initialItems, selectedOption)); // Update sorted items based on selected sorting order
  };

  return { items, handleSortChangeAZ };
};
