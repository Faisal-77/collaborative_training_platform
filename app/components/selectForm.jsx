"use client";
import styles from "@/app/page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

const SelectForm = ({ selectedOption, options, onChange, defaultSelected }) => {
  const [isContentSelectVisible, setContentSelectVisible] = useState(false);
  const [titleSelect, setTitleSelect] = useState(selectedOption);
  const clickedSelect = () => {
    setContentSelectVisible(!isContentSelectVisible);
  };

  const chosenOption = (optionValue) => {
    onChange(optionValue);
    setTitleSelect(optionValue);
    clickedSelect();
  };

  return (
    <div className={`${styles.selectForm}`}>
      <span
        className={`${styles.selectedOption} ${styles.titleSelect} ${
          isContentSelectVisible ? "show" : ""
        }`}
        onClick={clickedSelect}
      >
        {titleSelect}
      </span>

      {isContentSelectVisible && (
        <div className={`${styles.contentSelect}`}>
          <div
            className={`${styles.formOption}`}
            onClick={() => chosenOption(defaultSelected)}
          >
            {defaultSelected}
          </div>
          {options.map((val, index) => (
            <div
              key={index}
              className={`${styles.formOption}`}
              onClick={() => chosenOption(options[index])}
            >
              {val}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectForm;
