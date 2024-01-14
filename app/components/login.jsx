import styles from "@/app/page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo_tvtc from "@/Image/logo_tvtc.svg";
import walking_img from "@/Image/img_walking.svg";
import Image from "next/image";
import Link from "next/link";
import AuthForms from "./infoForm";

export default function Login() {
  return (
    <>
  
            <h1>تسجيل الدخول</h1>
            <form className="d-flex flex-column">
              <label for="username" className={` ${styles.formLabel}`}>
                اسم المستخدم
              </label>
              <input
                type="text"
                placeholder="اسم المستخدم"
                id="username"
                className={`${styles.formInput}`}
              />
              <label for="password" className={` ${styles.formLabel}`}>
                كلمة المرور
              </label>
              <input
                type="password"
                placeholder="كلمة المرور"
                id="password"
                className={`${styles.formInput} ${styles.password}`}
              />

              <span className={`${styles.linksLogin}`}>
                <Link href={"/"}>نسيت كلمة المرور؟</Link>
              </span>
              <span className={`${styles.linksLogin}`}>
                <Link href={"/"}>ليس لديك حساب؟</Link>
              </span>
              <input
                type="submit"
                value="تسجيل الدخول"
                className={`${styles.submitBtn} align-self-center`}
              />
            </form>
        </>
  );
}
