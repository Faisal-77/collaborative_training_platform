import styles from "@/app/page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectForm from "./selectForm";
import logo_tvtc from "@/Image/logo_tvtc.svg";
import walking_img from "@/Image/img_walking.svg";
import Image from "next/image";
import Link from "next/link";
import AuthForms from "./infoForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faLock ,faPhone, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function RegisterCom() {
  return (
    <>
      <h1>تسجيل جديد</h1>
      <form className="d-flex flex-column">
      <div className={styles.iconsAuth}>
<FontAwesomeIcon icon={faUser} className={styles.formIcons}/>
</div>
        <label for="username" className={` ${styles.formLabel}`}>
          الاسم كامل
        </label>
        <input
          type="text"
          placeholder="أدخل الاسم كامل"
          id="username"
          className={`${styles.formInput}`}
        />
        
        <div className={styles.iconsAuth}>
<FontAwesomeIcon icon={faEnvelope} className={styles.formIcons}/>
</div>
        <label for="username" className={` ${styles.formLabel}`}>
          البريد الإلكتروني
        </label>
        <input
          type="text"
          placeholder="أدخل البريد الإلكتروني"
          id="username"
          className={`${styles.formInput}`}
        />
        <div className={styles.iconsAuth}>
<FontAwesomeIcon icon={faPhone} className={styles.formIcons}/>
</div>
        <label for="username" className={` ${styles.formLabel}`}>
          رقم الجوال 
        </label>
        <input
          type="text"
          placeholder="أدخل رقم الجوال"
          id="username"
          className={`${styles.formInput}`}
        />
       
        <div className={styles.iconsAuth}>
      <FontAwesomeIcon icon={faLock} className={styles.formIcons}/>
      </div>
        <label for="password" className={` ${styles.formLabel}`}>
          كلمة المرور
        </label>
        <input
          type="password"
          placeholder="أدخل كلمة المرور"
          id="password"
          className={`${styles.formInput} `}
        />

 <div className={styles.iconsAuth}>
      <FontAwesomeIcon icon={faLock} className={styles.formIcons}/>
</div>

        <label for="password" className={` ${styles.formLabel}`}>
          كلمة المرور
        </label>
        <input
          type="password"
          placeholder="أعد كلمة المرور"
          id="password"
          className={`${styles.formInput} ${styles.password}`}
        />
        <div class="container text-center">
          <div class="row">
            <div class="col p-0">
              <SelectForm />
            </div>
            <div class="col p-0">
              <SelectForm />
            </div>
          </div>
        </div>

        <span className={`${styles.linksLogin}`}>
          <Link href={"/"}> لديك حساب؟</Link>
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
