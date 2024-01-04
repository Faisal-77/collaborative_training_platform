import styles from "@/app/page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import logo from "@/Image/white__logo1.png";
import collegeBack from "@/Image/tvtc_buliding.jpg";

const backgroundImage =
  "https://tvtc.gov.sa/ar/MediaCenter/News/PublishingImages/News/%D9%85%D8%A8%D9%86%D9%89%20%D8%A7%D9%84%D9%85%D8%A4%D8%B3%D8%B3%D8%A9.PNG";

export default function Loginform() {
  return (
    <div className={`${styles.formBackground}`}>
      <div className="container">
        <div className={`${styles.boxForm}`}>
          <div className={`${styles.formSign} ${styles.form}`}>
            <h2>تسجيل الدخول</h2>
            <form>
              <label for="username" className={`${styles.formInput} ${styles.formLabel}`}>اسم المستخدم</label>
              {/* <br/> */}
              <input type="text" placeholder="اسم المستخدم" id="username"  className={`${styles.formInput}`}/>
              <label for="password" className={`${styles.formInput} ${styles.formLabel}`}>كلمة المرور</label>
              {/* <br/> */}
              <input type="password" placeholder="كلمة المرور" id="password" className={`${styles.formInput}`}/>
              <input type="submit" value="تسجيل الدخول" />
            </form>
          </div>
          <div className={`${styles.formSign} ${styles.infoForm}`}>
            <h1> الدخول</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
