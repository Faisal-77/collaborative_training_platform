"use client"
import styles from "@/app/page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';

const SelectForm = ({selectedOption, chosenOption}) => {
  const [isContentSelectVisible, setContentSelectVisible] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState(selectedOption);

  const clickedSelect = () => {
    setContentSelectVisible(!isContentSelectVisible);
  };

  const chosenOption1 = (optionValue) => {
    setSelectedOption1(optionValue);
    clickedSelect();
  };

  return (
    <>
    <div className={`${styles.selectForm}`}>

      <span className={`${styles.selectedOption} ${styles.titleSelect} ${isContentSelectVisible ? 'show' : ''}`} onClick={clickedSelect}>
        {selectedOption1}
      </span>
      
      {isContentSelectVisible && (
        <div className={`${styles.contentSelect}`}>
        {chosenOption.map((index) => (
          <div className={`${styles.formOption}`} onClick={() => chosenOption1(chosenOption[index])}>{chosenOption[index]}</div>
        ))}
        </div>
      )}
    </div>
 </>
  );
};
export default SelectForm;