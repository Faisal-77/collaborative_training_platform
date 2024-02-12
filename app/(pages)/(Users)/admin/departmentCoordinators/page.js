"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "@/app/page.module.css";
import AdminHeader from "@/app/components/adminComponents/adminHeader";
import Link from "next/link";
import SelectForm from "@/app/components/selectForm";
import { useState, useEffect } from "react";
import DeptAdmin from "@/app/components/adminComponents/deptAdmin";
import AdminSidebar from "@/app/components/adminComponents/adminSidebar";
import { useCombinedSort } from "@/lib/filter";

export default function page() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isAdded, setAdded] = useState(false);
  const toggleAdd = () => {
    setAdded(!isAdded);
  };
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  ///     جلب منسقين الأقسام من قواعد البيانات
  const department_manager_display = async () => {
    try {
      const res = await fetch("../api/get_depart_manager", {
        method: "GET",
      });
      const department = res.json();

      return department;
    } catch (err) {
      console.log(err);
    }
  };
  const [showDepartmentManager, setShowDepartmentManager] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../api/get_depart_manager", {
          method: "GET",
        });
        const data = await response.json();

        setShowDepartmentManager(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // const { items, handleSortChangeAZ } = useCombinedSort();

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
                <Link href={"/admin/"} style={{ color: "white" }}>
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
                  onChange=""
                  defaultSelected={"الترتيب"}
                />
              </div>
              <div className="form-group col-1 pe-5">
                <button className={styles.submitBtn} onClick={toggleAdd}>
                  إضافة منسق جديد
                </button>
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
                {showDepartmentManager !== null ? (
                  showDepartmentManager.map((data, index) => (
                    <DeptAdmin
                      deprtmentName={data.department}
                      nameHead={data.full_name}
                      deptID={data.deptID}
                      noOfStud={data.noOfStud}
                      key={index}
                      isAddOpen={isAdded}
                      add={toggleAdd}
                    />
                  ))
                ) : (
                  <p className="text-center">لا يوجد منسقين</p>
                )}
              </section>
            </main>
          </section>
        </div>
      </div>
    </>
  );
}
