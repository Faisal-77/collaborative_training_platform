"use client";
import styles from "@/app/page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo_tvtc from "@/Image/logo_tvtc.svg";
import walking_img from "@/Image/img_walking.jpg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

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
      }if (res.ok){
          try{
            const middalware = await fetch("api/middalware", {
              method: "POST",
              body: JSON.stringify(user_name),
            });
            const   user_type   = await middalware.json();
            if(user_type == "Stydent"){
            router.push("/stu_dashbord")
            return;
            }else if(user_type == "Training_entity"){
              router.push("/training_entity");
            return;
            }else if(user_type == "Admin"){
              router.push("/admin");
            return;
            }else if(user_type == "department_manager"){
              router.push("/admin");
            return;
            }
            
          }catch(errpr){
            console.log(error)
          }
      }
    } catch (error) {
      console.error(error);
      setError(" حدث خطأ أثناء تسجيل الدخول");
    }
  };
  
  return (
    <>
      <section className={styles.formBackground}>
        <div className={`container h-100`}>
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-10 col-md-12">
              <div className={``}>
                <div className="row no-gutters">
                  <div className="col-md-12 col-lg-6 p-0 d-flex align-items-stretch">
                    <section
                      className={`contact-wrap w-100 p-4 ${styles.form}`}
                    >
                      <h1>تسجيل الدخول</h1>
                      <form onSubmit={handleSubmit}>
                        <div
                          className={`row contact-wrap justify-content-center`}
                        >
                          <div className={`col-md-10 ${styles.colForm}`}>
                            <label
                              htmlFor="username"
                              className={styles.formLabel}
                            >
                              اسم المستخدم
                            </label>
                            <div className="form-group">
                              <input
                                type="text"
                                className={`${styles.formInput}`}
                                id="username"
                                placeholder="اسم المستخدم"
                                onChange={(e) => setUsername(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className={`col-md-10 ${styles.colForm}`}>
                            <label
                              htmlFor="password"
                              className={styles.formLabel}
                            >
                              كلمة المرور
                            </label>
                            <div className="form-group">
                              <input
                                type="password"
                                className={`${styles.formInput} `}
                                id="password"
                                placeholder="كلمة المرور"
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-10 ">
                            <div className="form-group">
                              <span className={styles.linksLogin}>
                                <Link href={"/"}>نسيت كلمة المرور؟</Link>
                              </span>
                            </div>
                          </div>
                          <div
                            className={`col-md-12 text-center ${styles.colForm}`}
                          >
                            <div className="form-group">
                              {error && (
                                <div className="bg-red-500 text-white w-fit">
                                  {error}
                                </div>
                              )}
                              <input
                                type="submit"
                                value="تسجيل الدخول"
                                className={`${styles.submitBtn} `}
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </section>
                  </div>
                  <div className="col-md-12 col-lg-6 p-0 d-flex align-items-stretch">
                    <section
                      className={`contact-wrap w-100 p-0 ${styles.infoForm}`}
                    >
                      <Image src={logo_tvtc} className={`${styles.infoLogo}`} />

                      <span className={`${styles.sub_header}`}>
                        <h2>مرحبًا بك في مركز التدريب التعاوني</h2>
                      </span>
                      <h3
                        className={`align-self-center ${styles.infoBoxTitle}`}
                      >
                        إذا لم يكن لديك حساب أنشئ حسابك من هنا
                      </h3>
                      <span
                        className={`align-self-center text-center ${styles.registerBtnSpan}`}
                      >
                        <Link
                          href={"/registerEntity"}
                          className={`${styles.registerBtn}`}
                        >
                          {" "}
                          جهة التدريب{" "}
                        </Link>
                        <Link
                          href={"/registerStud"}
                          className={styles.registerBtn}
                        >
                          {" "}
                          المتدرب{" "}
                        </Link>
                      </span>
                      <Image
                        src={walking_img}
                        className={`${styles.infoBoxImg}`}
                      />
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
