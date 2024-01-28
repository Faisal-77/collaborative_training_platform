"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "@/app/page.module.css";
import AdminHeader from "@/app/components/adminComponents/adminHeader";
import Link from "next/link";
import SelectForm from "@/app/components/selectForm";
import { useState } from "react";
import DeptAdmin from "@/app/components/adminComponents/deptAdmin";

export default function page() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
    console.log("isSidebarVisible: ", isSidebarVisible);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <AdminHeader />
          </div>
          <section
            className={`col-12 align-items-center h-100  ${styles.filterSection}`}
          >
            <div className="row h-100 align-items-center ">
              <div className={`col-3 ${styles.menuBtn}`}>
                <Link
                  href={"#"}
                  onClick={toggleSidebar}
                  style={{ fill: "white" }}
                  className={styles.sidebarAdminBtn}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
                    viewBox="0 -960 960 960"
                    width="28"
                  >
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                  </svg>
                </Link>
              </div>
              <div
                className={`col-2 h-100 text-center p-0 m-0 ${styles.colsOftools} ${styles.hideOnSmall}`}
              >
                <Link href={"/"} style={{ color: "white" }}>
                  <i className={`bi bi-house`}></i>
                </Link>
                <i className={`bi bi-arrow-clockwise me-4`}></i>
              </div>
              <div className="form-group col-4">
                <input
                  type="search"
                  className={`${styles.formInput} ${styles.searchInput} m-0`}
                  id="search"
                  placeholder="البحث"
                />
              </div>
              <div className="form-group col-1">
                <SelectForm
                  selectedOption={"الترتيب"}
                  chosenOption={["أ - ي", "ي - أ", "الأحدث", "الأقدم"]}
                />
              </div>
              <div className="form-group col-1 pe-5">
                <SelectForm
                  selectedOption={"حالة الطلب"}
                  chosenOption={["مقبول", "مرفوض", "معلق"]}
                />
              </div>
            </div>
          </section>
          {isSidebarVisible && (
            <ul className={`${styles.sidebar} ${styles.w_sm_100}`}>
              <li>
                <Link
                  href={"#"}
                  onClick={toggleSidebar}
                  style={{ fill: "white" }}
                  className={styles.text_nav}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
                    viewBox="0 -960 960 960"
                    width="28"
                  >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href={"/"}>جهة التدريب</Link>
              </li>
              <li>
                <Link href={"/"}>منسقين الأقسام</Link>
              </li>
              <li>
                <Link href={"/"}>الطلبات</Link>
              </li>
              <li>
                <Link href={"/"}>الشكاوى والاقتراحات</Link>
              </li>
              <li>
                <Link href={"/"}>البيانات</Link>
              </li>
            </ul>
          )}
          <nav
            className={`col-2 ${styles.navbarAdmin}`}
            h-100
            d-flex
            align-items-center
            p-0
          >
            <ul className={`p-0 ${styles.sidebarAdmin}`}>
              <li className="mb-5">
                <Link href={"/"}>جهة التدريب</Link>
              </li>
              <li className="mb-5">
                <Link href={"/"}>منسقين الأقسام</Link>
              </li>
              <li className="mb-5">
                <Link href={"/"}>الطلبات</Link>
              </li>
              <li className="mb-5">
                <Link href={"/"}>الشكاوى والاقتراحات</Link>
              </li>
              <li className="mb-5">
                <Link href={"/"}>البيانات</Link>
              </li>
            </ul>
          </nav>
          <DeptAdmin />
        </div>
      </div>
    </>
  );
}
