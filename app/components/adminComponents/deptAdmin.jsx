"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/app/page.module.css";
import adminStyle from "./page.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import Link from "next/link";
export default function deptAdmin({
  deprtmentName,
  nameHead,
  deptID,
  noOfStud = 0,
}) {
  return (
    <>
      <div
        className={`col-12 col-md-3 flex-grow-1 flex-shrink-1 flex-basis-1 p-0 ${styles.companyCard}`}
      >
        <CompanyCard
          dept={deprtmentName}
          name={nameHead}
          deptName={deptID}
          number={noOfStud}
        />
      </div>
    </>
  );
}
const CompanyCard = ({ dept, name, deptName, number = 0 }) => {
  const [isAdded, setAdded] = useState(false);
  const toggleAdd = () => {
    setAdded(!isAdded);
  };
  const [isEdited, setEdited] = useState(false);
  const toggleEdit = () => {
    setEdited(!isEdited);
  };
  const [isDeleted, setDeleted] = useState(false);
  const toggleDelete = () => {
    setDeleted(!isDeleted);
  };

  return (
    <>
      <div className={`text-center ${styles.logoBox}`}>
        <h3>{dept}</h3>
      </div>
      <div className={`${styles.companyContent}`}>
        {name ? (
          <div className={adminStyle.deptList}>
            <h4 className={`text-center text-break mt-5 ${styles.companyName}`}>
              منسق القسم: {name}
            </h4>
            <button
              className={`${adminStyle.deptBtnTools} btn btn-outline-secondary h-50`}
              onClick={toggleEdit}
            >
              <i className="bi bi-pencil"></i>
            </button>
            <button
              className={`${adminStyle.deptBtnTools} btn btn-outline-danger h-50`}
              onClick={toggleDelete}
            >
              <i className="bi bi-trash3-fill"></i>
            </button>
          </div>
        ) : (
          <button
            className={`text-center w-50 mt-5 ${styles.submitBtn} ${adminStyle.addAdminBtn}`}
            onClick={toggleAdd}
          >
            إضافة منسق القسم
          </button>
        )}

        <Link
          href={`/departmentCoordinators/${deptName}/`}
          className={adminStyle.numbBtn}
        >
          <button className={adminStyle.numbBtn}>{number}</button>
        </Link>
        {/* edit popup */}
        <div
          className={styles.popupContainer}
          style={{ display: isEdited ? "flex" : "none" }}
        >
          <div className={styles.chatBox}>
            <div className={styles.contentContact}>
              <div
                className={`align-self-end ${styles.closeBtn}`}
                onClick={toggleEdit}
              >
                <i className="bi bi-x-circle"></i>
              </div>

              <h5 className="text-center mt-2  ">تعديل منسق القسم</h5>
              <div className="form-group mt-5 pe-2 ps-2">
                <input
                  className={`${styles.formInput} ${adminStyle.editInput}`}
                  placeholder={name}
                />
                <div className="row justify-content-around mt-5">
                  <button className={`w-25 ${styles.submitBtn}`}>حفظ</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* add popup */}
        <div
          className={styles.popupContainer}
          style={{ display: isAdded ? "flex" : "none" }}
        >
          <div className={styles.chatBox}>
            <div className={styles.contentContact}>
              <div
                className={`align-self-end ${styles.closeBtn}`}
                onClick={toggleAdd}
              >
                <i className="bi bi-x-circle"></i>
              </div>

              <h5 className="text-center mt-2  ">إضافة منسق القسم</h5>
              <div className="form-group mt-5 pe-2 ps-2">
                <input
                  className={`${styles.formInput} ${adminStyle.editInput}`}
                  placeholder="اسم منسق القسم"
                />
                <div className="row justify-content-around mt-5">
                  <button className={`w-25 ${styles.submitBtn}`}>حفظ</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* delete popup */}
        <div
          className={styles.popupContainer}
          style={{ display: isDeleted ? "flex" : "none" }}
        >
          <div className={styles.chatBox}>
            <div className={styles.contentContact}>
              <div
                className={`align-self-end ${styles.closeBtn}`}
                onClick={toggleDelete}
              >
                <i className="bi bi-x-circle"></i>
              </div>
              <h5 className="text-center mt-2 fs-1 text-danger">
                <i className="bi bi-exclamation-circle-fill"></i>
              </h5>
              <h5 className="text-center mt-5  ">
                هل أنت متأكد من حذف منسق القسم
              </h5>
              <div className="row justify-content-around mt-3">
                <button className={`w-25 ${styles.submitBtn}`}>نعم</button>

                <button className={`w-25 ${styles.submitBtn}`}>لا</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
