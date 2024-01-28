"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "../training_entity/page.module.css";

import React, { useState } from 'react'
import Request_form from "./request_form";

export default function Request_content() {
  return (
    
    <div className={`${styles.req_conainer} container`}>
        <div className={`${styles.req_title} row`}>
                
                <div className={`${styles.text} col-12`}>
                    <span className={`${styles.text_req_span}`}> التخصص </span>
                    <span className={`${styles.text_req_span}`}>العدد</span>
                    <span className={`${styles.text_req_span}`}>الفترة</span>
                    <span className={`${styles.text_req_span}`}> الساعات </span>
                    <span className={`${styles.text_req_span}`}> الحالة </span>
                </div>
        </div>
        <CompanyCard 
            state={"مرفوض"}
            mejor={"هندسة البرمجيات"}
            number={12}
            hours={8}
            time={"صباحي"}
            spp={" عدم رفع كامل المرفقات"}
            date_of_rejected={"2024 /10 / 10"}

        />
        <CompanyCard 
            state={"انتظار"}
            mejor={"هندسة البرمجيات"}
            number={12}
            hours={8}
            time={"صباحي"}
            date_of_get_req={"2024 / 10 / 10"}

        />
        <CompanyCard 
            state={"مقبول"}
            mejor={"هندسة البرمجيات"}
            number={12}
            hours={8}
            time={"صباحي"}
            date_of_accept={"2024/5/5"}
            date_of_start={"2024/5/5"}
            spp={" عدم رفع كامل المرفقات"}
            date_of_rejected={"2024 /10 / 10"}
        />
    </div>

  )
}
const CompanyCard = ({state , mejor, number, time , hours , date_of_start, date_of_accept , date_of_get_req , spp , date_of_rejected }) => {
    const [isChatClicked, setChatClicked] = useState(false);
    const toggleChat = () => {
      setChatClicked(!isChatClicked);
      
    };
    return (
      <>
        <div className={` `}>
        <div  className={`${state=="مقبول" ?
                styles.req_conent_accepted 
                : state=="مرفوض" ? styles.req_conent_rejected 
                :styles.req_conent_wating 
            } row`}>
            <div className={`col-12`}>
                <span className={`${styles.text_req_span_content}`}>{mejor}</span>
                <span className={`${styles.text_req_span_content}`}>{number}</span>
                <span className={`${styles.text_req_span_content}`}>{time}</span>
                <span className={`${styles.text_req_span_content}`}>{hours}</span>
                
                <svg className={styles.logo_info} onClick={toggleChat} width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.2352 11.3901L14.622 12.1005L14.3852 13.0428L15.6875 13.2458C16.5332 13.4198 16.7024 13.6807 16.5163 14.4056L14.3852 22.9881C13.827 25.2062 14.6896 26.25 16.7193 26.25C18.2922 26.25 20.1189 25.6266 20.9477 24.7713L21.2014 23.7419C20.6263 24.1769 19.7806 24.3508 19.2225 24.3508C18.4275 24.3508 18.14 23.8724 18.343 23.0316L21.2352 11.3901Z" fill="white"/>
                    <path d="M21.4352 6.22423C21.4352 7.5907 20.1429 8.69845 18.5486 8.69845C16.9544 8.69845 15.662 7.5907 15.662 6.22423C15.662 4.85775 16.9544 3.75 18.5486 3.75C20.1429 3.75 21.4352 4.85775 21.4352 6.22423Z" fill="white"/>
                </svg>
                <span className={`${styles.text_req_span_content_state} text-center 
                    ${state=='مقبول'?styles.req_state_accepted :
                     state == "مرفوض"? styles.req_state_rejected :
                      styles.req_state_wating}`}> {state} </span> 
                
                
            </div>
            <div
              className={styles.popupContainer}
              style={{ display: isChatClicked ? "flex" : "none" }}
            >
              <div className={styles.chatBox}>
                <div className={styles.contentContact}>
                  <div
                    className={`align-self-end ${styles.closeBtn}`}
                    
                    onClick={toggleChat}
                  >
                     <i className="bi bi-x-circle"></i>
                  </div>
                  {state == "مقبول" ?
                    <Accept 
                        date_of_accept={date_of_accept}
                        date_of_start={date_of_start}
                    />
                    :state == "مرفوض" ?
                        <Rejected 
                            spp={spp}
                            date_of_rejected={date_of_rejected}
                        /> : <Prosessing date_of_get_req={date_of_get_req} /> }
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
function Accept({date_of_start, date_of_accept }) {
    return (
      <div>
        <h5 className="text-center mt-2">تاريخ قبول الطلب</h5>
                  <span className={styles.contactSpan}>
                    <p className={styles.contactText}>{date_of_accept}</p>
                  </span>
                  <h5 className="text-center mt-2">تاريخ المباشرة</h5>
                  <span className={styles.contactSpan}>
                    <p className={styles.contactText}>{date_of_start}</p>
                  </span>
      </div>
    )
  }

  function Prosessing({date_of_get_req}) {
    return (
      <div>
        <h5 className="text-center mt-2">تاريخ استلام الطلب</h5>
                  <span className={styles.contactSpan}>
                    <p className={styles.contactText}>{date_of_get_req}</p>
                  </span>
                  <h5 className="text-center mt-2"> سيتم إشعارك عند الانتهاء من كافة الإجراءات </h5>
                  
      </div>
    )
  }
  function Rejected ({spp , date_of_rejected}) {
    return (
      <div>
        <h5 className="text-center mt-2">سبب الرفض</h5>
            <span className={styles.contactSpan}>
                <p className={styles.contactText}>{spp}</p>
            </span>
            <h5 className="text-center mt-2">تاريخ الرفض </h5>
            <span className={styles.contactSpan}>
                <p className={styles.contactText}>{date_of_rejected}</p>
            </span>
            
            <button className={`${styles.create_button_box} text-center mt-2`}> انشاء الطلب </button>
      </div>
    )
  }
  