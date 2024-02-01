import React, { useState } from "react";

export const useCombinedSort = (initialItems) => {
  const [sortAZ, setSortAZ] = useState();
  const [sortMajor, setSortMajor] = useState();
  const [items, setItems] = useState([...initialItems]);

  const handleSortChangeAZ = (selectedOption) => {
    setSortAZ(selectedOption);
    updateItems(selectedOption, sortMajor);
  };

  const handleSortChangeMajor = (selectedOption) => {
    setSortMajor(selectedOption);
    updateItems(sortAZ, selectedOption);
  };

  const updateItems = (azOption, majorOption) => {
    let sortedItems = [...initialItems];

    if (azOption === "أ - ي") {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name, "ar"));
    } else if (azOption === "ي - أ") {
      sortedItems.sort((a, b) => b.name.localeCompare(a.name, "ar"));
    }

    if (majorOption !== "الجميع") {
      sortedItems = sortedItems.filter((item) => item.major === majorOption);
    }

    setItems(sortedItems);
  };

  return {
    items,
    handleSortChangeAZ,
    handleSortChangeMajor,
  };
};
