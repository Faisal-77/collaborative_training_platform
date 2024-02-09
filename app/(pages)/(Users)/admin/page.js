import "bootstrap/dist/css/bootstrap.min.css";
import AdminHeader from "@/app/components/adminComponents/adminHeader";
import styles from "@/app/components/adminComponents/page.module.css";

export default function page() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 border-bottom">
            <AdminHeader />
          </div>
        </div>
        <div className={`row`}>
          <div className={`col-12 p-5  ${styles.bgHome}`}>
            <div className="container m-5">
              <div className="row p-5 ">
                <h1 className={`col-12 text-break ${styles.AdminHeader}`}>
                  مرحبًا بك، <b>&nbsp; اسم المستخدم &nbsp;</b> في منصة التدريب
                  التعاوني
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 p-5 border-bottom">
          <div className="container m-5">
            <div className="row">
              <div className="col-12 p-5">
                <h1 className={styles.AdminHeader}>الرئيسية</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
