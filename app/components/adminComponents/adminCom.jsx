"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import styles from "@/app/page.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AdminHeader from "./adminHeader";
import SelectForm from "@/app/components/selectForm";
import Link from "next/link";
import ImgPlace from "@/Image/placeholderImage.png";

import { useState } from "react";
import AdminSidebar from "./adminSidebar";
export default function AdminCom() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  // const [entity, setEntity] = useState(null);
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  ///   لجلب جهات التدريب المقبولة من قاعدة البيانات
  const display_accept_entityse = async () => {
    try {
      const entityes = await fetch("../api/entitiy_allowd", {
        method: "GET",
      });
      const entity = await entityes.json();
      return entity;
    } catch (err) {
      console.log(err);
    }
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
              <div className="form-group col-1">
                <SelectForm
                  selectedOption={"الترتيب"}
                  chosenOption={["أ - ي", "ي - أ", "الأحدث", "الأقدم"]}
                />
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
            <main className="container-fluid mt-5 p-5">
              <section
                className={`d-flex align-items-stretch flex-wrap flex-row gap-2 `}
              >
                {display_accept_entityse().then((data) => (
                  <>
                    {data.map((entity) => (
                      <div
                        className={`col-12 col-md-3 flex-grow-1 flex-shrink-1 flex-basis-1 p-0 ${styles.companyCard}`}
                        key={entity._id}
                      >
                        <CompanyCard
                          name={entity.name}
                          info={entity.field}
                          contactEmail={entity.email}
                          contactPhone={entity.phone_number}
                        />
                      </div>
                    ))}
                  </>
                ))}
              </section>
            </main>
          </section>
        </div>
      </div>
    </>
  );
}
const CompanyCard = ({
  logo = ImgPlace,
  name,
  info,
  contactEmail,
  contactPhone,
}) => {
  const [isChatClicked, setChatClicked] = useState(false);
  const toggleChat = () => {
    setChatClicked(!isChatClicked);
  };
  return (
    <>
      <div className={`text-center ${styles.logoBox}`}>
        <Image
          src={logo}
          className={styles.companyLogos}
          alt="Company Logo"
          title="Company Logo"
        />
      </div>
      <div className={`${styles.companyContent}`}>
        <h4 className={`text-break ${styles.companyName}`}>{name}</h4>
        <p className={`text-break ${styles.companyInfo}`}>{info}</p>
        <div className=" row justify-content-between p-4 align-items-center">
          <button className={`${styles.submitBtn}`}>dfsdf</button>

          <i
            className={`p-0 m-0 bi bi-chat-square-text  ${styles.chatIcon}`}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="معلومات التواصل مع الشركة"
            onClick={toggleChat}
          ></i>
        </div>
      </div>
      <div
        className={styles.popupContainer}
        style={{ display: isChatClicked ? "flex" : "none" }}
      >
        <div className={styles.chatBox}>
          <div className={styles.contentContact}>
            <div
              className={`align-self-end ${styles.closeBtn}`}
              onClick={toggleChat}
            >
              <i className="bi bi-x-circle"></i>
            </div>
            <h5 className="text-center mt-2">للتواصل والاستفسار</h5>
            <span className={styles.contactSpan}>
              <i className="bi bi-at"></i>
              <p className={styles.contactText}>{contactEmail}</p>
            </span>
            <span className={styles.contactSpan}>
              <i className="bi bi-phone"></i>
              <p className={styles.contactText}>{contactPhone}</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
