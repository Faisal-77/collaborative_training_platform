"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "@/app/page.module.css";
import adminStyle from "@/app/components/adminComponents/page.module.css";
import AdminHeader from "@/app/components/adminComponents/adminHeader";
import Link from "next/link";
import SelectForm from "@/app/components/selectForm";
import { useState } from "react";
import StudRows from "@/app/components/adminComponents/StudRows";
import AdminSidebar from "@/app/components/adminComponents/adminSidebar";
import { useCombinedSort } from "@/lib/filter";

export default function page({ params, initialItems }) {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  initialItems = [
    {
      name: "محمد",
      trainigNumber: 457900146,
      major: "برمجيات",
      dept: "IT",
    },
    {
      name: "ريان",
      trainigNumber: 236401997,
      major: "شبكات",
      dept: "IT",
    },
    {
      name: "فيصل",
      trainigNumber: 271489021,
      major: "أمن سيبراني",
      dept: "IT",
    },
    {
      name: "عادل",
      trainigNumber: 354701155,
      major: "دعم فني",
      dept: "IT",
    },
    {
      name: "عمران",
      trainigNumber: 561770345,
      major: "وسائط متعددة",
      dept: "IT",
    },
    {
      name: "فيصل",
      trainigNumber: 271489021,
      major: "التسويق",
      dept: "tm",
    },
    {
      name: "محمد",
      trainigNumber: 457900146,
      major: "التأمين",
      dept: "tm",
    },
  ];

  const { items, handleSortChangeAZ, handleSortChangeMajor } =
    useCombinedSort(initialItems);
  const major = initialItems
    .filter((item) => item.dept === params.deptName)
    .map((item) => item.major);
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
                <SelectForm
                  selectedOption={"التخصص"}
                  options={major}
                  defaultSelected={"الجميع"}
                  onChange={handleSortChangeMajor}
                />
              </div>
            </div>
          </section>
          <AdminSidebar
            isSidebarVisible={isSidebarVisible}
            toggleSidebar={toggleSidebar}
          />
          <section
            className={`col-lg-10 col-md-12 p-2 m-0 ${styles.mainAdmin}`}
          >
            <Link
              href={"/admin/departmentCoordinators"}
              className="text-decoration-none text-black"
            >
              <div className={adminStyle.backBtn}>
                <i className="bi bi-play-fill"></i>
              </div>
            </Link>
            <main className="container-fluid mt-5">
              <div className={`row p-5`}>
                <div className="row p-5">
                  <div className={`${adminStyle.table}`}>
                    <div className={`${adminStyle.headerRow} `}>
                      <div className={` ${adminStyle.col}`}>No:</div>
                      <div className={` ${adminStyle.col}`}>الاسم</div>
                      <div className={` ${adminStyle.col}`}>الرقم التدريبي</div>
                      <div className={` ${adminStyle.col}`}>التخصص</div>
                    </div>
                    {items
                      .filter((item) => item.dept === params.deptName)
                      .map((item, index) => (
                        <StudRows
                          key={index}
                          name={item.name}
                          trainigNumber={item.trainigNumber}
                          major={item.major}
                          no={index + 1}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </main>
          </section>
        </div>
      </div>
    </>
  );
}
