"use client"
import styles from "@/app/page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faPhone,
  faUser,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
    const router = useRouter();
    const [name , setName] = useState("");
    const [phone_number , setPhone] = useState("");
    const [email , setEmail] = useState("");
    const [content , setContent] = useState("");
    
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("../api/suggestions", {
        method: "POST",
        body: JSON.stringify({
          name,
          phone_number,
          email,
          content
        }),
      });

      if (res.ok) {
        const form_seq = e.target;
        form_seq.reset();
        router.push("/");
      } else {
        console.log("خطأ في التسجيل");
      }
    } catch (error) {
      console.log("error api :", error);
    }
  };

  return (
    <>
      <section className="ftco-section">
        <div className={`container`}>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className={`${styles.wrapper}`}>
                <div className="row no-gutters">
                  <div className="col-md-12 col-lg-6 p-0 d-flex align-items-stretch">
                    <section
                      className={`contact-wrap w-100 p-4 ${styles.boxSuggestions}`}
                    >
                      <h3 className={styles.contactTitle}>
                        للاقتراحات والشكوى
                      </h3>
                      <form onSubmit={handelSubmit} method="POST" id="contactForm" name="contactForm">
                        <div className={`row ${styles.contactWrap}`}>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className={`${styles.formInput}`}
                                name="name"
                                id="name"
                                placeholder="الاسم"
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="phone"
                                className={`${styles.formInput}`}
                                name="phone"
                                id="phone"
                                placeholder="رقم الهاتف"
                                onChange={(e) => setPhone(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="Email"
                                className={`${styles.formInput}`}
                                name="email"
                                id="email"
                                placeholder="البريد الإلكتروني"
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                name="message"
                                className={`${styles.formInput}`}
                                id="message"
                                cols="30"
                                rows="7"
                                placeholder="الرسالة"
                                onChange={(e) => setContent(e.target.value)}
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="submit"
                                value="إرسال"
                                className={`${styles.submitBtn}  w-100 `}
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </section>
                  </div>
                  <div className="col-md-12 col-lg-6 d-flex align-items-stretch p-0">
                    <section
                      className={`w-100 p-lg-6   ${styles.boxSuggestions} ${styles.conInfo}`}
                    >
                      <div className={`${styles.conInfoShape}`}>
                        <div
                          className={`${styles.conInfoShape_1} align-self-center`}
                        ></div>
                        <div
                          className={`${styles.conInfoShape_2} align-self-center`}
                        >
                          <div className={`${styles.conInfoEle} w-100`}>
                            <h3
                              className={`${styles.contactTitle} ${styles.conInfoH3}`}
                            >
                              معلومات التواصل
                            </h3>
                            <div className={styles.conList}>
                              <div className={styles.conListItem}>
                                <FontAwesomeIcon
                                  icon={faEnvelope}
                                  className={styles.conListIcon}
                                />
                                <Link
                                  href={"mailto:bct@tvtc.gov.sa"}
                                  className={styles.conListEle}
                                >
                                  bct@tvtc.gov.sa
                                </Link>
                              </div>
                              <div className={styles.conListItem}>
                                <FontAwesomeIcon
                                  icon={faPhone}
                                  className={styles.conListIcon}
                                />
                                <span className={styles.conListEle}>
                                  0112896664
                                </span>
                              </div>
                              <div className={styles.conListItem}>
                                <FontAwesomeIcon
                                  icon={faClock}
                                  className={styles.conListIcon}
                                />
                                <span className={styles.conListEle} dir="ltr">
                                  8:00 am - 2:00 pm{" "}
                                </span>
                              </div>
                            </div>
                            <p className={`${styles.conInfoP}`}>
                              لا تتردد في الاتصال بنا في أي وقت.
                              <br /> سيتم التواصل في أقرب وقت ممكن!
                            </p>
                          </div>
                        </div>
                        <div
                          className={`${styles.conInfoShape_3} align-self-center`}
                        ></div>
                      </div>
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
