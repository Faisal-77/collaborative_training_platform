"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminSidebar from "@/app/components/adminComponents/adminSidebar";
import AdminHeader from "@/app/components/adminComponents/adminHeader";
import SelectForm from "@/app/components/selectForm";
import Link from "next/link";
import styles from "@/app/page.module.css";
import adminStyle from "@/app/components/adminComponents/page.module.css";
import suggestions from "@/app/(pages)/suggestions/page";
import ViewSugg from "@/app/components/adminComponents/viewSugg";

export default function page() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const fakeData = [
    {
      id: 1,
      name: "Faisa",
      history: "12/12/2022",
      suggestion:
        "disease green kitchen band alive means taught differ next change trade organized slipped complex bark prevent pictured daughter planet enough pick pig feet division",
      compl: true,
    },
    {
      id: 2,
      name: "Maud Joseph",
      history: "6/5/2062",
      suggestion:
        "driving newspaper mainly find change outside discussion needed cross bee order build soap leg slave spring bit herd cage also best won music cat",
      compl: false,
    },
    {
      id: 3,
      name: "Fanny Higgins",
      history: "6/1/2085",
      suggestion:
        "value crew point battle keep power aboard anybody rear your building crowd ten actual smile draw active meat say are fought corn be took",
      compl: false,
    },
    {
      id: 4,
      name: "Daniel Moreno",
      history: "3/18/2038",
      suggestion:
        "trip tie several mine vapor brief exactly stock proper gift dream draw statement lot instance everywhere clear declared five space cattle famous origin dig",
      compl: false,
    },
    {
      id: 5,
      name: "Russell Goodwin",
      history: "11/12/2050",
      suggestion:
        "tried further giving thousand way bound finest research smallest throw acres property football meant seat duty part unusual vessels thin television feel darkness wood",
      compl: false,
    },
    {
      id: 6,
      name: "Sue Atkins",
      history: "7/26/2076",
      suggestion:
        "everyone hang gold cat ball although numeral well feel planet shown white watch compound solve stone behind baby longer clothes like could went shall",
      compl: false,
    },
    {
      id: 7,
      name: "Effie Martin",
      history: "9/3/2123",
      suggestion:
        "movement pour dear riding doing floating necessary event western should gray bring arm standard electric equal current fun had under further label frighten refer",
      compl: true,
    },
  ];
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
                    {fakeData.map((sugg, index) => (
                      <div className={`${adminStyle.row}`} key={index}>
                        <div
                          className={` ${adminStyle.typeOfRow} ${
                            sugg.compl ? adminStyle.complaint : adminStyle.sugg
                          }`}
                        ></div>
                        <div className={` ${adminStyle.col}`}>{sugg.name}</div>
                        <div className={` ${adminStyle.col}`}>
                          {sugg.history}
                        </div>

                        <div
                          className={` ${adminStyle.viewBtn}`}
                          onClick={togglePopup}
                        >
                          <i className="bi bi-eye-fill"></i>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>

            <ViewSugg isOpen={isPopupOpen} onClose={togglePopup} />
          </section>
        </div>
      </div>
    </>
  );
}
