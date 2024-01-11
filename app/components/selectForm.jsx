"use client"
import styles from "@/app/page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useEffect, useState } from 'react'
// components/SelectForm.js
import React, { useState } from 'react';

const SelectForm = () => {
  const [isContentSelectVisible, setContentSelectVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('اختر التخصص');

  const clickedSelect = () => {
    setContentSelectVisible(!isContentSelectVisible);
  };

  const chosenOption = (optionValue) => {
    console.log("Clicked option value: " + optionValue);
    setSelectedOption(optionValue);
    clickedSelect();
  };

  return (
    <div className={`${styles.selectForm}`}>
      <span className={`${styles.selectedOption} ${styles.titleSelect} ${isContentSelectVisible ? 'show' : ''}`} onClick={clickedSelect}>
        {selectedOption}
      </span>
      {isContentSelectVisible && (
        <div className={`${styles.contentSelect}`}>
          <div className={`${styles.formOption}`} onClick={() => chosenOption('برمجيات')}>برمجيات</div>
          <div className={`${styles.formOption}`} onClick={() => chosenOption('دعم فني')}>دعم فني</div>
          <div className={`${styles.formOption}`} onClick={() => chosenOption('شبكات')}>شبكات</div>
        </div>
      )}
    </div>
  );
};

export default SelectForm;

 

    
// //     <div className={`${styles.selectForm}`} >
// //     <span className={`${styles.selectedOption} ${styles.titleSelect}`} onClick={clickedSelect}>اختر التخصص</span>
// //     <div className={`${styles.contentSelect}`} id="contentSelect">
// //         <option value="برمجيات" className={`${styles.formOption}`}>برمجيات</option>
// //         <option value="دعم فني" className={`${styles.formOption}`}>دعم فني</option>
// //         <option value="شبكات" className={`${styles.formOption}`}>شبكات</option>
// //     </div>
// //  </div>
 

