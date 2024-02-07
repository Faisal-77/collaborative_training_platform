"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "@/app/page.module.css";
import AdminHeader from "@/app/components/adminComponents/adminHeader";
import Link from "next/link";
import SelectForm from "@/app/components/selectForm";
import { useState } from "react";
import { Orders, Order2 } from "@/app/components/adminComponents/orders";
import AdminSidebar from "@/app/components/adminComponents/adminSidebar";
// import Fillter from "@/app/components/training_entity/fillter";
// import { sortAZ } from "@/lib/filter";

export default function page() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  const [orders, setOrders] = useState("نوع الطلب");
  const [typeOfRequest, setTypeOfRequest] = useState("تصنيف الطلب");

  const handelChange = (selectedOption) => {
    setOrders(selectedOption);
    console.log(orders);
  };
  const handelTypeOfRequest = (selectedOption) => {
    setTypeOfRequest(selectedOption);
    console.log(typeOfRequest);
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
              <div className="form-group col-2">
                <SelectForm
                  selectedOption={"الترتيب"}
                  options={["أ - ي", "ي - أ", "الأحدث", "الأقدم"]}
                  defaultSelected={"الترتيب"}
                />
              </div>
              <div className="form-group col-2 ">
                <SelectForm
                  selectedOption={"نوع الطلب"}
                  options={["توثيق", "تدريب"]}
                  onChange={handelChange}
                  defaultSelected={"نوع الطلب"}
                />
              </div>
              <div className="form-group col-2 ">
                <SelectForm
                  selectedOption={"تصنيف الطلب"}
                  options={["طلبات جديدة", "قيد التنفيذ", "مكتمل", "مرفوض"]}
                  onChange={handelTypeOfRequest}
                  defaultSelected={"تصنيف الطلب"}
                />
              </div>
            </div>
          </section>
          <AdminSidebar
            isSidebarVisible={isSidebarVisible}
            toggleSidebar={toggleSidebar}
          />
          {orders === "تدريب" ? (
            <Order2 typeOfRequest={typeOfRequest} />
          ) : (
            <Orders />
          )}
          {(typeOfRequest, orders)}
        </div>
      </div>
    </>
  );
}
