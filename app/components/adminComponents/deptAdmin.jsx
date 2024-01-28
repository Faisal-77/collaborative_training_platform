"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/app/page.module.css";
import adminStyle from "./page.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import Link from "next/link";
export default function Orders() {
  return (
    <section className={`col-lg-10 col-md-12 p-0 m-0 ${styles.mainAdmin}`}>
      <main className="container-fluid mt-5">
        <section className={`row align-items-stretch pe-5 ps-5`}>
          <div
            className={`col-3 flex-grow-1 flex-shrink-1 flex-basis-1 p-0 ${styles.companyCard}`}
          >
            <CompanyCard
              dept={"قسم الحاسب وتقنية المعلومات"}
              name="محمد الحربي"
              number={1}
            />
          </div>
          <div
            className={`col-3 flex-grow-1 flex-shrink-1 flex-basis-1 p-0 ${styles.companyCard}`}
          >
            <CompanyCard
              dept={"قسم الحاسب وتقنية المعلومات"}
              name="محمد الحربي"
            />
          </div>
          <div
            className={`col-3 flex-grow-1 flex-shrink-1 flex-basis-1 p-0 ${styles.companyCard}`}
          >
            <CompanyCard dept={"قسم الحاسب وتقنية المعلومات"} number={1} />
          </div>
        </section>
      </main>
    </section>
  );
}
const CompanyCard = ({ dept, name, number = 0 }) => {
  const [isAccepted, setAccepted] = useState(false);
  const toggleAccept = () => {
    setAccepted(!isAccepted);
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
            onClick={toggleAccept}
          >
            إضافة منسق القسم
          </button>
        )}

        <button className={adminStyle.numbBtn}>{number}</button>
        <div
          className={styles.popupContainer}
          style={{ display: isAccepted ? "flex" : "none" }}
        >
          <div className={styles.chatBox}>
            <div className={styles.contentContact}>
              <div
                className={`align-self-end ${styles.closeBtn}`}
                onClick={toggleAccept}
              >
                <i className="bi bi-x-circle"></i>
              </div>
              <h5 className="text-center mt-2 fs-1 text-success">
                <i className="bi bi-check-circle-fill"></i>
              </h5>
              <h5 className="text-center mt-5  ">تمت إضافة الطلب بنجاح</h5>
            </div>
          </div>
        </div>
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
