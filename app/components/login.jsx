"use client";
import styles from "@/app/page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo_tvtc from "@/Image/logo_tvtc.svg";
import walking_img from "@/Image/img_walking.jpg";
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
      <section className={styles.formBackground}>
        <div class={`container h-100`}>
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-lg-10 col-md-12">
              <div class={``}>
                <div class="row no-gutters">
                  <div class="col-md-12 col-lg-6 p-0 d-flex align-items-stretch">
                    <section class={`contact-wrap w-100 p-4 ${styles.form}`}>
                      <h1>تسجيل الدخول</h1>
                      <form onSubmit={handleSubmit}>
                        <div class={`row contact-wrap justify-content-center`}>
                          <div class={`col-md-10 ${styles.colForm}`}>
                            <label
                              htmlFor="username"
                              className={styles.formLabel}
                            >
                              اسم المستخدم
                            </label>
                            <div class="form-group">
                              <input
                                type="text"
                                class={`${styles.formInput}`}
                                id="username"
                                placeholder="اسم المستخدم"
                                onChange={(e) => setUsername(e.target.value)}
                              />
                            </div>
                          </div>
                          <div class={`col-md-10 ${styles.colForm}`}>
                            <label
                              htmlFor="password"
                              className={styles.formLabel}
                            >
                              كلمة المرور
                            </label>
                            <div class="form-group">
                              <input
                                type="password"
                                class={`${styles.formInput} `}
                                id="password"
                                placeholder="كلمة المرور"
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </div>
                          </div>
                          <div class="col-md-10 ">
                            <div className="form-group">
                              <span className={styles.linksLogin}>
                                <Link href={"/"}>نسيت كلمة المرور؟</Link>
                              </span>
                            </div>
                          </div>
                          <div
                            class={`col-md-12 text-center ${styles.colForm}`}
                          >
                            <div class="form-group">
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
                  <div class="col-md-12 col-lg-6 p-0 d-flex align-items-stretch">
                    <section
                      class={`contact-wrap w-100 p-0 ${styles.infoForm}`}
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
                        <Link href={"/registerEntity"} className={`${styles.registerBtn}`}>
                          {" "}
                          جهة التدريب{" "}
                        </Link>
                        <Link href={"/registerStud"} className={styles.registerBtn}>
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
