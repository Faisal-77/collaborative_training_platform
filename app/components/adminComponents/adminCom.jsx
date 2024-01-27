"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import styles from "@/app/page.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AdminHeader from "./adminHeader";
import SelectForm from "@/app/components/selectForm";
import Link from "next/link";
import aramco from "@/Image/Aramco.svg";
import sabic from "@/Image/Sabic.svg";
import sdaia from "@/Image/sdaia.svg";
import alrajih from "@/Image/alrajihbank.svg";
import mcitt from "@/Image/mcittt.svg";
import ncps from "@/Image/ncps.svg";

import { useState } from "react";
export default function AdminCom() {
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

          <section
            className={`col-lg-10 col-md-12 p-0 m-0 ${styles.mainAdmin}`}
          >
            <main className="container-fluid mt-5">
              <section className={`row align-items-stretch pe-5 ps-5`}>
                <div
                  className={`col-3 flex-grow-1 flex-shrink-1 flex-basis-1 p-0 ${styles.companyCard}`}
                >
                  <CompanyCard
                    logo={aramco}
                    name={"شركة أرامكو السعودية"}
                    info={"مجال العمل: الطاقة والكيميائيات"}
                    contactEmail={"G-SAED@aramco.com"}
                    contactPhone={"+966138772828"}
                  />
                </div>
                <div
                  className={`col-3 flex-grow-1 flex-shrink-1 flex-basis-1 p-0 ${styles.companyCard}`}
                >
                  <CompanyCard
                    logo={sabic}
                    name={"الشركة السعودية للصناعات    الأساسية (سابك)"}
                    info={"مجال العمل: إنتاج الكيماويات"}
                    contactEmail={"IR@SABIC.com"}
                    contactPhone={"+966112258000"}
                  />
                </div>
                <div
                  className={`col-3 flex-grow-1 flex-shrink-1 flex-basis-1 p-0 ${styles.companyCard}`}
                >
                  <CompanyCard
                    logo={alrajih}
                    name={"مصرف الراجحي"}
                    info={
                      "مجال العمل: تقديم التمويل المصغر للأفراد، والتأجير التمويلي وتمويل المشروعات الصغيرة والمتوسطة"
                    }
                    contactEmail={"care@alrajhibank.com"}
                    contactPhone={"+966920003344"}
                  />
                </div>
              </section>
              <section className={`row align-items-stretch pe-5 ps-5`}>
                <div
                  className={`col-3 flex-grow-1 flex-shrink-1 flex-basis-1 p-0 ${styles.companyCard}`}
                >
                  <CompanyCard
                    logo={sdaia}
                    name={"الهيئة السعودية للبيانات والذكاء الاصطناعي"}
                    info={
                      "مجال العمل: الجهة المختصة في المملكة بالبيانات والذكاء الاصطناعي"
                    }
                    contactEmail={"Suggestions@sdaia.gov.sa"}
                    contactPhone={"8001221111"}
                  />
                </div>
                <div
                  className={`col-3 flex-grow-1 flex-shrink-1 flex-basis-1 p-0 ${styles.companyCard}`}
                >
                  <CompanyCard
                    logo={mcitt}
                    name={"وزارة الاتصالات وتقنية المعلومات"}
                    info={
                      "مجال العمل: تطوير وتنظيم قطاع الاتصالات وتكنولوجيا المعلومات"
                    }
                    contactEmail={"info@mcit.gov.sa"}
                    contactPhone={"4444814011"}
                  />
                </div>
                <div
                  className={`col-3 flex-grow-1 flex-shrink-1 flex-basis-1 p-0 ${styles.companyCard}`}
                >
                  <CompanyCard
                    logo={ncps}
                    name={"المركز الوطني لتنمية القطاع غير الربحي"}
                    info={
                      "مجال العمل: دعم وتطوير القطاع الذي يتضمن المنظمات والمؤسسات غير الهادفة للربح"
                    }
                    contactEmail={"mc@ncnp.gov.sa"}
                    contactPhone={"19918"}
                  />
                </div>
              </section>
            </main>
          </section>
        </div>
      </div>
    </>
  );
}
const CompanyCard = ({ logo, name, info, contactEmail, contactPhone }) => {
  const [isChatClicked, setChatClicked] = useState(false);
  const toggleChat = () => {
    setChatClicked(!isChatClicked);
  };
  return (
    <>
      <div className={` `}>
        <div className={`text-center ${styles.logoBox}`}>
          <Image src={logo} className={styles.companyLogos} />
        </div>
        <div className={`${styles.companyContent}`}>
          <h4 className={styles.companyName}>{name}</h4>
          <p className={styles.companyInfo}>{info}</p>
          <div className={styles.chatIcon} onClick={toggleChat}>
            <i className="bi bi-chat-square-text"></i>
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
        </div>
      </div>
    </>
  );
};
