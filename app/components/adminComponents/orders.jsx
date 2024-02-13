"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import styles from "@/app/page.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import ImgPlace from "@/Image/placeholderImage.png";

export function Orders()  {
  ///      لجلب جهات التدريب الموجودة في قاعدة البيانات
  const [entity, setEntity] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("../api/entity", {
  //         method: "GET",
  //       });
  //       const data = await response.json();
  //       setEntity(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  
                  /// to delete training entity
  const deletOne = async (name) => {
    try {
      const req = await fetch("/api/remove_training_entity", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
      console.log(req);
      if (req.ok) {
        const res = await req.json();
        console.log(res);
        return;
      } else {
        console.log("Error:", req.status);
      }
    } catch (err) {
      console.log(err);
    }
  };
  
   

  // const entityes_display = async () => {
  //   try {
  //     const entityes = await fetch("../api/entity", {
  //       method: "GET",
  //     });
  //     const entity = entityes.json();

  //     return entity.name;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  //     تستقبل اسم جهت التدريب وتقوم بقبول جهت التدريب

  return (
    <section className={`col-lg-10 col-md-12 p-0 m-0 ${styles.mainAdmin}`}>
      <main className="container-fluid mt-5">
        <section
          className={`d-flex align-items-stretch flex-wrap flex-row gap-2`}
        >
          {/* {entityes_display().then((entity) => {
            <div
              className={`col-12 col-md-3 flex-grow-1 flex-shrink-1 flex-basis-1 p-0 ${styles.companyCard}`}
            >
              {entity.map((item) => {
                return (
                  <CompanyCard
                    logo={item.logo}
                    name={item.name}
                    info={item.info}
                    contactEmail={item.contactEmail}
                    contactPhone={item.contactPhone}
                  />
                );
              })}
            </div>;
          })} */}

          <button onClick={async()=> await deletOne("aramco")}>button</button>

          {entity !== null ? (
            entity.map((item) => {
              return (
               
                <div
                  className={`col-12 col-md-3 flex-grow-1 flex-shrink-1 flex-basis-1 p-0 ${styles.companyCard}`}
                >
                  <CompanyCard
                    logo={item.logo}
                    name={item.name}
                    info={item.field}
                    contactEmail={item.contactEmail}
                    contactPhone={item.contactPhone}
                  />
                </div>
              );
            })
          ) : (
            <p>الرجاء الانتظار...</p>
          )}
        </section>
      </main>
    </section>
  );
}
const CompanyCard = ({ logo = ImgPlace, name, info }) => {
  const update_to_accept = async (name) => {
    try {
      const entityes = await fetch("../api/accept_entity", {
        method: "PUT",
        body: JSON.stringify({ name }),
      });
      const res = await entityes.json();
      return res;
    } catch (err) {
      console.log(err);
    }
  };
  const [isAccepted, setAccepted] = useState(false);
  const toggleAccept = () => {
    setAccepted(!isAccepted);
    update_to_accept(name);
  };
  const [isRejected, setRejected] = useState(false);
  const toggleReject = () => {
    setRejected(!isRejected);
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
                وصل إلى منسق القسم :
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
                تعيين المشرفين :
                <i
                  className="float-start  bi bi-check-circle-fill text-success "
                  title="تم تعيين المشرفين"
                ></i>
              </li>
              <li>
                إصدار خطابات التدريب :
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
