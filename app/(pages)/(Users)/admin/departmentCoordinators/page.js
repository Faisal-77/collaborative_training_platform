"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "@/app/page.module.css";
import AdminHeader from "@/app/components/adminComponents/adminHeader";
import Link from "next/link";
import SelectForm from "@/app/components/selectForm";
import { useState } from "react";
import DeptAdmin from "@/app/components/adminComponents/deptAdmin";
import AdminSidebar from "@/app/components/adminComponents/adminSidebar";
import { useCombinedSort } from "@/lib/filter";

export default function page({ initialItems }) {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  initialItems = [
    {
      id: 1,
      deprtmentName: "الحاسب وتقنية الملعومات",
      name: "محمد الحربي",
      deptID: "IT",
      noOfStud: "5",
    },
    {
      id: 2,
      deprtmentName: "الهندسة المدنية",
      name: "فاطمة العلي",
      deptID: "CE",
      noOfStud: "8",
    },
    {
      id: 3,
      deprtmentName: "الطب",
      name: "علي الصفار",
      deptID: "MD",
      noOfStud: "12",
    },
    {
      id: 4,
      deprtmentName: "الفنون الجميلة",
      name: "أميرة العسيري",
      deptID: "FA",
      noOfStud: "6",
    },
    {
      id: 5,
      deprtmentName: "الاقتصاد",
      name: "يوسف الشهراني",
      deptID: "ECO",
      noOfStud: "10",
    },
    {
      id: 6,
      deprtmentName: "العلوم السياسية",
      name: "نورة المطيري",
      deptID: "POL",
      noOfStud: "7",
    },
  ];
  const { items, handleSortChangeAZ } = useCombinedSort(initialItems);

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
                  options={["أ - ي", "ي - أ", "الأحدث", "الأقدم"]}
                  onChange={handleSortChangeAZ}
                  defaultSelected={"الترتيب"}
                />
              </div>
              <div className="form-group col-1 pe-5">
                <button className={styles.submitBtn}>إضافة منسق جديد</button>
              </div>
            </div>
          </section>
          <AdminSidebar
            isSidebarVisible={isSidebarVisible}
            toggleSidebar={toggleSidebar}
          />
          <section
            className={`col-lg-10 col-md-12 p-0 m-0 ${styles.mainAdmin}`}
          >
            <main className="container-fluid mt-5">
              <section className={`row align-items-stretch pe-5 ps-5`}>
                {items.map((data, index) => (
                  <DeptAdmin
                    deprtmentName={data.deprtmentName}
                    nameHead={data.name}
                    deptID={data.deptID}
                    noOfStud={data.noOfStud}
                    key={index}
                  />
                ))}
              </section>
            </main>
          </section>
        </div>
      </div>
    </>
  );
}
