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
import { useState } from "react";
export default function AdminCom() {
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
              <div
                className={`col-2 h-100 text-center p-2  ${styles.colsOftools}`}
              >
                <i className={`bi bi-house  ${styles.iconBtn}`}></i>
                <i className={`bi bi-arrow-clockwise  ${styles.iconBtn}`}></i>
              </div>
              <div className="col-10 ">
                <div className="row align-items-center">
                  <div className="form-group col-lg-2  me-5">
                    <input
                      type="search"
                      className={`${styles.formInput} m-0`}
                      id="search"
                      placeholder="البحث"
                    />
                  </div>
                  <div className="form-group col-4 me-5">
                    <SelectForm
                      selectedOption={"الترتيب"}
                      chosenOption={["أ - ي", "ي - أ", "الأحدث", "الأقدم"]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
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
              <section className="row justify-content-center">
                <div className={`col-md-3 col-sm-10 col-xs-10 p-0 m-5`}>
                  <CompanyCard
                    logo={aramco}
                    name={"شركة أرامكو السعودية"}
                    info={"مجال العمل: الطاقة والكيميائيات"}
                    contact={"تواصل معنا"}
                  />
                </div>
                 <div className={`col-md-3 col-sm-10 col-xs-10 p-0 m-5`}>
                  <CompanyCard
                    logo={sabic}
                    name={"شركة سابك"}
                    info={"مجال العمل: الطاقة والكيميائيات"}
                    contact={"تواصل fff"}
                  />
                </div>
                <div className={`col-md-3 col-sm-10 col-xs-10 p-0 m-5 `}>
                  <CompanyCard
                    logo={sdaia}
                    name={"شركة أرامكو السعودية"}
                    info={"مجال العمل: الطاقة والكيميائيات"}
                    contact={"تواصل fff"}
                  />
                </div>
                <div className={`col-md-3 col-sm-10 col-xs-10 p-0 m-5`}>
                  <CompanyCard
                    logo={aramco}
                    name={"شركة أرامكو السعودية"}
                    info={"مجال العمل: الطاقة والكيميائيات"}
                    contact={"تواصل fff"}
                  />
                </div>

                <div className={`col-md-3 col-sm-10 col-xs-10 p-0 m-5`}>
                  <CompanyCard
                    logo={aramco}
                    name={"شركة أرامكو السعودية"}
                    info={"مجال العمل: الطاقة والكيميائيات"}
                    contact={"تواصل fff"}

                  />
                </div>
                <div className={`col-3 col-md-3 col-sm-10 p-0 m-5 `}>
                  <CompanyCard
                    logo={aramco}
                    name={"شركة أرامكو السعودية"}
                    info={"مجال العمل: الطاقة والكيميائيات"}
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
const CompanyCard = ({ logo, name, info,contact }) => {
    const [isChatClicked, setChatClicked] = useState(false);
    const toggleChat = () => {
      setChatClicked(!isChatClicked);
      console.log(isChatClicked);
    }
  return (<>
    <div className={`${styles.companyCard}`}>
      <div className={`text-center ${styles.logoBox}`}>
        <Image src={logo} className={styles.companyLogos} />
      </div>
      <div className={`${styles.companyContent}`}>
        <h4 className={styles.companyName}>{name}</h4>
        <p className={styles.companyInfo}>{info}</p>
        <div className={styles.chatIcon} onClick={toggleChat}>
          <i className="bi bi-chat-square-text"></i>
        </div>
        <div className={styles.popupContainer} style={{ display: isChatClicked ? "flex" : "none" }}>
        <div className={styles.chatBox}>
          <div className={styles.closeBtn} onClick={toggleChat}>
        <i className="bi bi-x-circle float-start"></i>
        </div>
          <p className={styles.chatText}>{contact}</p></div>
        </div>
      </div>
    </div>
        </>
  );
};
