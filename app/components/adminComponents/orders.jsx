"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import styles from "@/app/page.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import aramco from "@/Image/Aramco.svg";
import sabic from "@/Image/Sabic.svg";
import sdaia from "@/Image/sdaia.svg";
import alrajih from "@/Image/alrajihbank.svg";
import mcitt from "@/Image/mcittt.svg";
import ncps from "@/Image/ncps.svg";
export default function Orders() {
  return (
    <section className={`col-lg-10 col-md-12 p-0 m-0 ${styles.mainAdmin}`}>
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
  );
}
const CompanyCard = ({ logo, name, info }) => {
  const [isAccepted, setAccepted] = useState(false);
  const toggleAccept = () => {
    setAccepted(!isAccepted);
  };
  const [isRejected, setRejected] = useState(false);
  const toggleReject = () => {
    setRejected(!isRejected);
  };
  return (
    <>
      <div className={`text-center ${styles.logoBox}`}>
        <Image src={logo} className={styles.companyLogos} />
      </div>
      <div className={`${styles.companyContent}`}>
        <h4 className={`text-break ${styles.companyName}`}>{name}</h4>
        <p className={`text-break ${styles.companyInfo}`}>{info}</p>
        <div className={`row justify-content-around p-3`}>
          <button className={`w-25 ${styles.submitBtn}`} onClick={toggleAccept}>
            قبول
          </button>

          <button className={`w-25 ${styles.submitBtn}`} onClick={toggleReject}>
            رفض
          </button>
        </div>
        <div
          className={styles.popupContainer}
          style={{ display: isAccepted ? "flex" : "none" }}
        >
          <div className={styles.chatBox}>
            <div className={styles.contentContact}>
              <div
                className={`align-self-end ${styles.closeBtn}`}
                onClick={toggleAccept}
              >
                <i className="bi bi-x-circle"></i>
              </div>
              <h5 className="text-center mt-2 fs-1 text-success">
                <i className="bi bi-check-circle-fill"></i>
              </h5>
              <h5 className="text-center mt-5  ">تمت إضافة الطلب بنجاح</h5>
            </div>
          </div>
        </div>
        <div
          className={styles.popupContainer}
          style={{ display: isRejected ? "flex" : "none" }}
        >
          <div className={styles.chatBox}>
            <div className={styles.contentContact}>
              <div
                className={`align-self-end ${styles.closeBtn}`}
                onClick={toggleReject}
              >
                <i className="bi bi-x-circle"></i>
              </div>
              <h5 className="text-center mt-2 fs-1 text-danger">
                <i className="bi bi-exclamation-circle-fill"></i>
              </h5>
              <h5 className="text-center mt-5  ">هل أنت متأكد من رفض الطلب</h5>
              <div className="row justify-content-around mt-3">
                <button className={`w-25 ${styles.submitBtn}`}>نعم</button>

                <button className={`w-25 ${styles.submitBtn}`}>لا</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
