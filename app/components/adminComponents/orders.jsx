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
import { ToggleButton } from "react-bootstrap";
export function Orders() {
  return (
    <section className={`col-lg-10 col-md-12 p-0 m-0 ${styles.mainAdmin}`}>
      <main className="container-fluid mt-5">
        <section
          className={`d-flex align-items-stretch flex-wrap flex-row gap-2`}
        >
          <div
            className={`col-12 col-md-3 flex-grow-1 flex-shrink-1 flex-basis-1 p-0 ${styles.companyCard}`}
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
            className={`col-12 col-md-3 flex-grow-1 flex-shrink-1 flex-basis-1 p-0 ${styles.companyCard}`}
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
            className={`col-12 col-md-3 flex-grow-1 flex-shrink-1 flex-basis-1 p-0 ${styles.companyCard}`}
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
          <div
            className={`col-12 col-md-3 flex-grow-1 flex-shrink-1 flex-basis-1 p-0 ${styles.companyCard}`}
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
            className={`col-12 col-md-3 flex-grow-1 flex-shrink-1 flex-basis-1 p-0 ${styles.companyCard}`}
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
            className={`col-12 col-md-3 flex-grow-1 flex-shrink-1 flex-basis-1 p-0 ${styles.companyCard}`}
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

export function Order2({ typeOfRequest }) {
  return (
    <section className={`col-lg-10 col-md-12 p-0 m-0 ${styles.mainAdmin}`}>
      <main className="container-fluid mt-5">
        <section
          className={`d-flex align-items-stretch justify-content-around flex-wrap flex-row gap-5 p-5`}
        >
          {typeOfRequest === "طلبات جديدة" ? (
            <OrdersCard
              companyName={"وزارة الاتصالات وتقنية المعلومات"}
              major={"برمجيات"}
              count={5}
              field={"تقنية المعلومات"}
              shift={"صباحا"}
              hours={8}
            />
          ) : typeOfRequest === "قيد التنفيذ" ? (
            <OrdersCard2
              companyName={"وزارة الاتصالات وتقنية المعلومات"}
              major={"برمجيات"}
              count={5}
              field={"تقنية المعلومات"}
              shift={"صباحا"}
              hours={8}
              supervisor={"محمد"}
              noStudents={15}
              percent={10}
            />
          ) : null}
        </section>
      </main>
    </section>
  );
}
const OrdersCard = ({ companyName, major, count, field, shift, hours }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);

  const toggleClick = () => {
    setIsClicked(!isClicked);
  };
  const toggleClick2 = () => {
    setIsClicked2(!isClicked2);
  };
  return (
    <>
      <div className={`${styles.companyCard2} card p-0 `}>
        <div className={styles.logoBox}>
          <h3 className="p-2 text-center">{companyName}</h3>
        </div>
        <div className="card-body">
          <div className="d-flex align-items-center h-100 justify-content-center">
            <button className={styles.submitBtn} onClick={toggleClick}>
              {major} : {count}
            </button>
          </div>
        </div>
        <div className="row justify-content-around p-2 mb-4">
          <button className={`w-25 ${styles.ordBtn}`}>قبول</button>
          <button className={`w-25 ${styles.ordBtn}`}>رفض</button>
        </div>
      </div>

      <div
        className={styles.popupContainer}
        style={{ display: isClicked ? "flex" : "none" }}
      >
        <div className={styles.chatBox}>
          <div className={styles.contentContact}>
            <div
              className={`align-self-end ${styles.closeBtn}`}
              onClick={toggleClick}
            >
              <i className="bi bi-x-circle"></i>
            </div>
            <ul className={`list-unstyled ${styles.ordUl}`}>
              <li>اسم المنشأة :{companyName}</li>
              <li>مجال العمل : {field}</li>
              <li>عدد الاحتياج : {count}</li>
              <li>التخصص المطلوب : {major}</li>
              <li>فترة العمل : {shift}</li>
              <li>عدد الساعات : {hours}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const OrdersCard2 = ({
  companyName,
  major,
  count,
  field,
  shift,
  hours,
  supervisor,
  noStudents,
  percent,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isIssuingLetter, setIssuingLetter] = useState(false);
  const [isStatus, setIsStatus] = useState(false);
  const toggleClick = () => {
    setIsClicked(!isClicked);
  };
  const toggleLetter = () => {
    setIssuingLetter(!isIssuingLetter);
  };
  const toggleStatus = () => {
    setIsStatus(!isStatus);
  };
  return (
    <>
      <div className={`${styles.companyCard2} card p-0 `}>
        <div className={styles.logoBox}>
          <h3 className="p-2 text-center">{companyName}</h3>
        </div>
        <div className="card-body">
          <div className="d-flex align-items-center h-100 justify-content-center flex-column gap-5">
            <div className={`${styles.percent} align-self-start`}>
              {percent}%
            </div>
            <button className={styles.submitBtn} onClick={toggleClick}>
              {major} : {count}
            </button>
          </div>
        </div>
        <div className="row justify-content-around p-2 mb-4">
          <button className={`w-25 ${styles.ordBtn}`} onClick={toggleStatus}>
            الحالة
          </button>
          <button
            className={`w-50 ${styles.ordBtn}`}
            disabled={percent === 100 ? false : true}
            onClick={toggleLetter}
          >
            إصدار خطابات التدريب
          </button>
        </div>
      </div>
      <div
        className={styles.popupContainer}
        style={{ display: isClicked ? "flex" : "none" }}
      >
        <div className={styles.chatBox}>
          <div className={styles.contentContact}>
            <div
              className={`align-self-end ${styles.closeBtn}`}
              onClick={toggleClick}
            >
              <i className="bi bi-x-circle"></i>
            </div>
            <ul className={`list-unstyled  ${styles.ordUl}`}>
              <li>اسم المنشأة :{companyName}</li>
              <li>مجال العمل : {field}</li>
              <li>عدد الاحتياج : {count}</li>
              <li>التخصص المطلوب : {major}</li>
              <li>فترة العمل : {shift}</li>
              <li>عدد الساعات : {hours}</li>
              <li>عدد المتدربين الذي تم تسجيلهم : {noStudents}</li>
              <li>المشرف الميداني : {supervisor}</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={styles.popupContainer}
        style={{ display: isIssuingLetter ? "flex" : "none" }}
      >
        <div className={styles.chatBox}>
          <div className={styles.contentContact}>
            <div
              className={`align-self-end ${styles.closeBtn}`}
              onClick={toggleLetter}
            >
              <i className="bi bi-x-circle"></i>
            </div>
            <h5 className="text-center mt-2 fs-1 text-success">
              <i className="bi bi-check-circle-fill"></i>
            </h5>
            <h5 className="text-center mt-5  ">تم إصدار الخطابات</h5>
          </div>
        </div>
      </div>
      <div
        className={styles.popupContainer}
        style={{ display: isStatus ? "flex" : "none" }}
      >
        <div className={styles.chatBox}>
          <div className={styles.contentContact}>
            <div
              className={`align-self-end ${styles.closeBtn}`}
              onClick={toggleStatus}
            >
              <i className="bi bi-x-circle"></i>
            </div>
            <h5 className="text-center mt-2  ">حالة الطلب</h5>
            <ul className={`list-unstyled  ${styles.ordUl}`}>
              <li>
                وصل إلى منسق القسم :{" "}
                <i
                  className={`float-start  bi bi-check-circle-fill text-success`}
                  title=" وصل إلى منسق القسم"
                ></i>
              </li>
              <li>
                تسجيل المتدربين :
                <i
                  className="float-start  bi bi-clock-fill text-warning "
                  title="تم تسجيل المتدربين"
                ></i>
              </li>
              <li>
                تعيين المشرفين :{" "}
                <i
                  className="float-start  bi bi-check-circle-fill text-success "
                  title="تم تعيين المشرفين"
                ></i>
              </li>
              <li>
                إصدار خطابات التدريب :{" "}
                <i
                  className="float-start  bi bi-check-circle-fill text-success "
                  title="تم أصدار خطابات التدريب"
                ></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
