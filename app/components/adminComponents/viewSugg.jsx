"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import adminStyle from "@/app/components/adminComponents/page.module.css";
import styles2 from "@/app/components/training_entity/page.module.css";
import styles from "@/app/page.module.css";

const ViewSugg = ({ isOpen, onClose, name, compl, hist }) => {
  return (
    <>
      <div
        className={styles.popupContainer}
        style={{ display: isOpen ? "flex" : "none" }}
      >
        <div className={`${styles2.form_request} container`}>
          <div className={`row`}>
            <div className={`col`}>
              <i
                className={`${styles2.cancel} bi bi-x-circle`}
                onClick={onClose}
              ></i>

              <h2 className={`${styles2.form_title} text-center`}>الاقتراح</h2>
            </div>
            <form>
              <div className="row">
                <div className="col">
                  <label htmlFor="name"> المشتكي </label>
                  <br />
                  <input
                    className={styles2.text_form_input}
                    type="text"
                    value={name}
                    disabled
                    placeholder="المشتكي"
                    name="name"
                  />
                </div>
                <div className="col">
                  <label htmlFor="userName"> الشكوى </label>
                  <br />
                  <textarea
                    className={`${styles2.text_form_input} ${styles2.text_form_textarea}`}
                    type="text"
                    name="userName"
                    placeholder="الشكوى"
                    value={compl}
                    disabled
                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label htmlFor="his"> تاريخ الشكوى </label>
                  <br />
                  <input
                    className={styles2.text_form_input}
                    type="text"
                    placeholder="تاريخ الشكوى"
                    value={hist}
                    disabled
                    name="his"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewSugg;
