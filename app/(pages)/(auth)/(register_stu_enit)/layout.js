import styles from "@/app/page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "@/Image/btvtcLogo.png";
import Image from "next/image";

export default function RootLayout({ children }) {
  return (
    <>
      <section className={styles.signupBackground}>
        <div className="container h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-10 col-md-12 h-100">
              <div className="row no-gutters justify-content-center align-items-center h-100">
                <div className="col-md-12 col-lg-6 p-0 d-flex align-items-stretch justify-content-center">
                  <section className={`w-100 p-4 ${styles.registerForm}`}>
                    <div className="row justify-content-center">
                      <Image
                        src={logo}
                        className={`${styles.registerLogo}`}
                        alt="TVTC LOGO"
                      />
                    </div>
                    {children}
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
