import styles from "@/app/page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InfoForm from "@/app/components/infoForm";

export default function AuthFormsLayout({ children }) {
  return (
    <>
      <div className={`container-fluid`}>
        <div
          className={`row justify-content-center align-items-center  ${styles.formBackground}`}
        >
          <div
            className={`col-sm-12 col-md-6 col-lg-6 h-100 p-0 d-flex justify-content-end align-items-center`}
          >
              <div
                className={`${styles.formSign} ${styles.form} ${styles.h_md_100} ${styles.w_lg_100} ${styles.w_md_100}`}
              >
                {children}
              </div>
            </div>
          
          <div className="col-sm-12 col-md-6 col-lg-6 h-100 p-0 d-flex justify-content-start align-items-center">
            <div
              className={`${styles.infoForm} ${styles.form} ${styles.h_md_100} ${styles.w_lg_100} ${styles.w_md_100}`}
            >
              <InfoForm />
            </div>
          </div>
          </div>
        </div>
   
    </>
  );
}
