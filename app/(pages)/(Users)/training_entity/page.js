import "bootstrap/dist/css/bootstrap.min.css";
import AdminHeader from "@/app/components/adminComponents/adminHeader";
import styles from "@/app/components/adminComponents/page.module.css";
import Link from "next/link";
import CardServices from "@/app/components/adminComponents/adminHome";

export default function page() {
  const links = [
    {
      title: "الطلبات",
      url: "/training_entity/requist_training",
    },
    {
      title: "التدريب",
      url: "/training_entity/training",
    },
    {
      title: "الشكاوا والاقتراحات",
      url: "/training_entity",
    },
    {
      title: "الشكاوى والاقتراحات",
      url: "/training_entity",
    },
  ];
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 border-bottom">
            <AdminHeader />
          </div>
        </div>
        <div className={`row `}>
          <div className={`col-12 p-5  ${styles.bgHome}`}>
            <div className="container-fluid">
              <div className="row p-5 ">
                <div className="col-12 p-5">
                  <h1 className={` text-break  ${styles.AdminHeader}`}>
                    مرحبًا بك، <b>&nbsp; اسم المستخدم &nbsp;</b> في منصة التدريب
                    التعاوني
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 p-5 border-bottom ">
            <div className="container-fluid shadow border rounded bg-light">
              <div className="row p-5  flex-wrap">
                <div className="col-12 p-5 ">
                  <h1
                    className={`${styles.AdminHeader} ${styles.ServicesTitle}`}
                  >
                    الخدمات
                  </h1>
                </div>
                <div className={styles.rowServices}>
                  <CardServices links={links} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
