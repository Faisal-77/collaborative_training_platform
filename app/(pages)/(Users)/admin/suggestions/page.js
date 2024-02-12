"use client";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminSidebar from "@/app/components/adminComponents/adminSidebar";
import AdminHeader from "@/app/components/adminComponents/adminHeader";
import SelectForm from "@/app/components/selectForm";
import Link from "next/link";
import styles from "@/app/page.module.css";
import adminStyle from "@/app/components/adminComponents/page.module.css";
import suggestions from "@/app/(pages)/suggestions/page";
import ViewSugg from "@/app/components/adminComponents/viewSugg";
import { useCombinedSort } from "@/lib/filter";

export default function page_sugg() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  ///   جلب الأقتراحات من قواعد البيانات
  // const suggestions_display = async () => {
  //   try {
  //     const suggestions = await fetch("../api/get_suggestions", {
  //       method: "GET",
  //     });
  //     const res = suggestions.json();

  //     return res;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const [suggestions, setSuggestions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../api/get_suggestions", {
          method: "GET",
        });
        const data = await response.json();

        setSuggestions(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const { items, handleSortChangeAZ } = useCombinedSort(suggestions);

  const togglePopup = () => {
    setIsPopupOpen((prevState) => {
      return !prevState; // Returning the new state value
    });
  };
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
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
              <div className="form-group col-2">
                <SelectForm
                  selectedOption={"النوع"}
                  options={["إقتراح", "شكوى", "الكل"]}
                  defaultSelected={"النوع"}
                />
              </div>
              <div className="form-group col-2 ">
                <SelectForm
                  selectedOption={"الترتيب"}
                  options={["أ - ي", "ي - أ", "الأحدث", "الأقدم"]}
                  defaultSelected={"الترتيب"}
                  onChange={handleSortChangeAZ}
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
            <main className="container-fluid mt-5">
              <div className={`row p-5`}>
                <div className="row p-5">
                  <div className={`${adminStyle.table}`}>
                    <div className={`${adminStyle.headerRow} `}>
                      <div className={` ${adminStyle.col}`}>
                        المشتكي / المقترح
                      </div>
                      <div className={` ${adminStyle.col}`}>التاريخ</div>
                      <div className={` ${adminStyle.col}`}>عرض</div>
                    </div>
                    {items !== null ? (
                      items.map((sugg, index) => {
                        return (
                          <>
                            <div className={`${adminStyle.row}`} key={index}>
                              <div
                                className={` ${adminStyle.typeOfRow} ${
                                  // sugg.compl
                                  //   ? adminStyle.complaint
                                  adminStyle.sugg
                                }`}
                              ></div>
                              <div className={` ${adminStyle.col}`}>
                                {sugg.name}
                              </div>
                              <div className={` ${adminStyle.col}`}>
                                {sugg.compl}
                              </div>

                              <div
                                className={` ${adminStyle.viewBtn}`}
                                onClick={togglePopup}
                              >
                                <i className="bi bi-eye-fill"></i>
                              </div>
                            </div>
                            <ViewSugg
                              isOpen={isPopupOpen}
                              onClose={togglePopup}
                              compl={sugg.content}
                              name={sugg.name}
                            />
                          </>
                        );
                      })
                    ) : (
                      <h1 className="text-center text-white mt-5">
                        نرجوا الانتظار...
                      </h1>
                    )}
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
