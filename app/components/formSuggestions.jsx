import styles from "@/app/page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faClock ,faPhone, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <section class="ftco-section">
        <div class={`container`}>
          <div class="row justify-content-center">
            <div class="col-lg-10 col-md-12">
              <div class={`${styles.wrapper}`}>
                <div class="row no-gutters">
                  <div class="col-md-12 col-lg-6 p-0 d-flex align-items-stretch">
                    <section
                      class={`contact-wrap w-100 p-4 ${styles.boxSuggestions}`}
                    >
                      <h3 class={styles.contactTitle}>للاقتراحات والشكوى</h3>
                      <form method="POST" id="contactForm" name="contactForm">
                        <div class={`row ${styles.contactWrap}`}>
                          <div class="col-md-12">
                            <div class="form-group">
                              <input
                                type="text"
                                class={`${styles.formInput}`}
                                name="name"
                                id="name"
                                placeholder="الاسم"
                              />
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <input
                                type="phone"
                                class={`${styles.formInput}`}
                                name="phone"
                                id="phone"
                                placeholder="رقم الهاتف"
                              />
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <input
                                type="Email"
                                class={`${styles.formInput}`}
                                name="email"
                                id="email"
                                placeholder="البريد الإلكتروني"
                              />
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <textarea
                                name="message"
                                class={`${styles.formInput}`}
                                id="message"
                                cols="30"
                                rows="7"
                                placeholder="الرسالة"
                              ></textarea>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <input
                                type="submit"
                                value="إرسال"
                                class={`${styles.submitBtn}  w-100 `}
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </section>
                  </div>
                  <div class="col-md-12 col-lg-6 d-flex align-items-stretch p-0">
                    <section
                      class={`w-100 p-lg-6   ${styles.boxSuggestions} ${styles.conInfo}`}
                    >
                      <div className={`${styles.conInfoShape}`}>
                        <div
                          className={`${styles.conInfoShape_1} align-self-center`}
                        ></div>
                        <div
                          className={`${styles.conInfoShape_2} align-self-center`}
                        >
                          <div className={`${styles.conInfoEle} w-100`}>
                            <h3  class={`${styles.contactTitle} ${styles.conInfoH3}`}>معلومات التواصل</h3>
                            <div className={styles.conList}>
                            <div className={styles.conListItem}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.conListIcon}/>
                            <span className={styles.conListEle}>cso@tvtc.gov.sa</span>
                            </div>
                            <div className={styles.conListItem}>
                            <FontAwesomeIcon icon={faPhone} className={styles.conListIcon}/>
                            <span className={styles.conListEle}>0112896664</span>
                            </div>
                            <div className={styles.conListItem}>
                            <FontAwesomeIcon icon={faClock} className={styles.conListIcon}/>
                            <span className={styles.conListEle} dir="ltr">8:00 am - 2:00 pm </span>
                            </div>
                            </div>
                            <p class={`${styles.conInfoP}`}>لا تتردد في الاتصال بنا في أي وقت.<br/> سيتم التواصل في أقرب وقت ممكن!</p>
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
