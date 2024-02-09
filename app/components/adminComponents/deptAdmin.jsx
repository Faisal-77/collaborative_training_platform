"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/app/page.module.css";
import adminStyle from "./page.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import Link from "next/link";
import styles2 from "@/app/components/training_entity/page.module.css";

export default function deptAdmin({
  deprtmentName,
  nameHead,
  deptID,
  noOfStud = 0,
  isAddOpen,
  add,
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
          isAdded={isAddOpen}
          toggleAdd={add}
        />
      </div>
    </>
  );
}
export const CompanyCard = ({
  dept,
  name,
  deptName,
  number = 0,
  isAdded,
  toggleAdd,
}) => {
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
          href={`departmentCoordinators/${deptName}/`}
          className={adminStyle.numbBtn}
        >
          <button className={adminStyle.numbBtn}>{number}</button>
        </Link>
        {/* edit popup */}
        <div
          className={styles.popupContainer}
          style={{ display: isEdited ? "flex" : "none" }}
        >
          <div className={`${styles2.form_request} container`}>
            <div className={`row`}>
              <div className={`col`}>
                <i
                  className={`${styles2.cancel} bi bi-x-circle`}
                  onClick={toggleEdit}
                ></i>

                <h2 className={`${styles2.form_title} text-center`}>
                  تعديل منسق قسم {dept}
                </h2>
              </div>

              <form>
                <div className={`${styles2.row_content} row`}>
                  <div className={`${styles2.col_content} col`}>
                    <label htmlFor="name"> الاسم </label>
                    <br />
                    <input
                      className={styles2.text_form_input}
                      type="text"
                      placeholder={name}
                      name="name"
                    />
                  </div>

                  <div className={`${styles2.col_content} col`}>
                    <label htmlFor="userName"> اسم المستخدم </label>
                    <br />
                    <input
                      className={styles2.text_form_input}
                      type="text"
                      placeholder="اسم المستخدم"
                      name="userName"
                    />
                  </div>
                </div>
                <div className={`${styles2.row_content} row`}>
                  <div className={`${styles2.col_content} col`}>
                    <label htmlFor="mail"> البريد الالكتروني </label>
                    <br />
                    <input
                      className={styles2.text_form_input}
                      type="text"
                      placeholder="ادخل البريد الالكتروني"
                      name="mail"
                    />
                  </div>

                  <div className={`${styles2.col_content} col`}>
                    <label htmlFor="number"> رقم الجوال </label>
                    <br />
                    <input
                      className={styles2.text_form_input}
                      type="text"
                      placeholder="رقم الجوال"
                      name="number"
                    />
                  </div>
                </div>
                <div className={`${styles2.row_content} row`}>
                  <div className={`${styles2.col_content} col`}>
                    <label htmlFor="dept"> القسم </label>
                    <br />
                    <input
                      className={styles2.text_form_input}
                      type="text"
                      value={dept}
                      name="dept"
                      disabled
                    />
                  </div>

                  <div className={`${styles2.col_content} col`}>
                    <br />
                    <input
                      className={`${styles2.btn_create} text-center`}
                      type="submit"
                      value="تعديل منسق جديد"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* add popup */}
        <div
          className={styles.popupContainer}
          style={{ display: isAdded ? "flex" : "none" }}
        >
          <div className={`${styles2.form_request} container`}>
            <div className={`row`}>
              <div className={`col`}>
                <i
                  className={`${styles2.cancel} bi bi-x-circle`}
                  onClick={toggleAdd}
                ></i>

                <h2 className={`${styles2.form_title} text-center`}>
                  إضافة منسق قسم جديد
                </h2>
              </div>

              <form>
                <div className={`${styles2.row_content} row`}>
                  <div className={`${styles2.col_content} col`}>
                    <label htmlFor="name"> الاسم </label>
                    <br />
                    <input
                      className={styles2.text_form_input}
                      type="text"
                      placeholder="ادخل الاسم"
                      name="name"
                    />
                  </div>

                  <div className={`${styles2.col_content} col`}>
                    <label htmlFor="userName"> اسم المستخدم </label>
                    <br />
                    <input
                      className={styles2.text_form_input}
                      type="text"
                      placeholder="اسم المستخدم"
                      name="userName"
                    />
                  </div>
                </div>
                <div className={`${styles2.row_content} row`}>
                  <div className={`${styles2.col_content} col`}>
                    <label htmlFor="mail"> البريد الالكتروني </label>
                    <br />
                    <input
                      className={styles2.text_form_input}
                      type="text"
                      placeholder="ادخل البريد الالكتروني"
                      name="mail"
                    />
                  </div>

                  <div className={`${styles2.col_content} col`}>
                    <label htmlFor="number"> رقم الجوال </label>
                    <br />
                    <input
                      className={styles2.text_form_input}
                      type="text"
                      placeholder="رقم الجوال"
                      name="number"
                    />
                  </div>
                </div>
                <div className={`${styles2.row_content} row`}>
                  <div className={`${styles2.col_content} col`}>
                    <label htmlFor="dept"> القسم </label>
                    <br />
                    <input
                      className={styles2.text_form_input}
                      type="text"
                      placeholder="ادخل القسم"
                      name="dept"
                    />
                  </div>

                  <div className={`${styles2.col_content} col`}>
                    <br />
                    <input
                      className={`${styles2.btn_create} text-center`}
                      type="submit"
                      value="إضافة منسق جديد"
                    />
                  </div>
                </div>
              </form>
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
export const PopupAdd = ({ isAdded, toggleAdd }) => {
  return <></>;
};
