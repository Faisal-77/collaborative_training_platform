"use client";
import styles from "@/app/page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo_tvtc from "@/Image/logo_tvtc.svg";
import walking_img from "@/Image/img_walking.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [user_name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        user_name,
        password,
        redirect: false,
      });
      if (res.error) {
        setError("خطأ في اسم المستخدم أو كلمة المرور");
        return;
      }
      router.replace("stu_dashbord");
    } catch (error) {
      console.error(error);
      setError("حدث خطأ أثناء تسجيل الدخول");
    }
  };

  return (
    <>
      <h1>تسجيل الدخول</h1>
      <form className="d-flex flex-column" onSubmit={handleSubmit}>
        <label htmlFor="username" className={styles.formLabel}>
          اسم المستخدم
        </label>
        <input
          type="text"
          placeholder="اسم المستخدم"
          id="username"
          className={styles.formInput}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password" className={styles.formLabel}>
          كلمة المرور
        </label>
        <input
          type="password"
          placeholder="كلمة المرور"
          id="password"
          className={`${styles.formInput} ${styles.password}`}
          onChange={(e) => setPassword(e.target.value)}
        />


        <span className={styles.linksLogin}>
          <Link href={"/"}>نسيت كلمة المرور؟</Link>
        </span>
        <span className={styles.linksLogin}>
          <Link href={"/register"}>ليس لديك حساب؟</Link>
        </span>
        {error && <div className="bg-red-500 text-white w-fit">{error}</div>}
        <input
          type="submit"
          value="تسجيل الدخول"
          className={`${styles.btnLogin} align-self-center`}
        />
      </form>
    </>
{/*
//               <span className={`${styles.linksLogin}`}>
//                 <Link href={"/"}>نسيت كلمة المرور؟</Link>
//               </span>
//               <span className={`${styles.linksLogin}`}>
//                 <Link href={"/"}>ليس لديك حساب؟</Link>
//               </span>
//               <input
//                 type="submit"
//                 value="تسجيل الدخول"
//                 className={`${styles.submitBtn} align-self-center`}
//               />
//             </form>
//         </>
*/}

  );
}