"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "@/app/components/training_entity/page.module.css";
import { useState } from "react";
import Evaluation from "./evaluation";

export default function Training_content() {

  const [display , setDisplay] = useState(true)
  return (
    <>
    {display ? 
    <div className={`${styles.req_conainer} container`}>
      <div className={`${styles.req_title} row`}>

        <div className={`${styles.text} col text-center`}>
          <span className={`${styles.text_req_span}`}> المتدرب </span>
        </div>

        <div className={`${styles.text} col text-center`}>
          <span className={`${styles.text_req_span}`}> التخصص </span>
        </div>

        <div className={`${styles.text} col text-center`}>
          <span className={`${styles.text_req_span}`}> الفترة </span>
        </div>

        <div className={`${styles.text} col text-center`}>
          <span className={`${styles.text_req_span}`}> عرض </span>
        </div>

        <div className={`${styles.text} col text-center`}>
          <span className={`${styles.text_req_span}`}> تقييم المتدرب </span>
        </div>
        
      </div>
      
      <CompanyCard
         name={"ريان الكرساوي"}
         mejor={"هندسة البرمجيات"}
         time={"صباحي"}
         num_std={"442200215"}
         phone_number={"0530654648"}
         email={"Rayan1999a@gmail.com"}
         date_of_start={"2024 / 10 / 10"}
         attendence={"2"}
         setDisplay={setDisplay}
      />
      <CompanyCard
         name={"ريان الكرساوي"}
         mejor={"هندسة البرمجيات"}
         time={"صباحي"}
         num_std={"442200215"}
         phone_number={"0530654648"}
         email={"Rayan1999a@gmail.com"}
         date_of_start={"2024 / 10 / 10"}
         attendence={"2"}
         setDisplay={setDisplay}
      />
      <CompanyCard
         name={"ريان الكرساوي"}
         mejor={"هندسة البرمجيات"}
         time={"صباحي"}
         num_std={"442200215"}
         phone_number={"0530654648"}
         email={"Rayan1999a@gmail.com"}
         date_of_start={"2024 / 10 / 10"}
         attendence={"2"}
         setDisplay={setDisplay}
      />
    </div>
    :
    <Evaluation setDisplay={setDisplay} />
    }
    </>
  );
}
const CompanyCard = ({name , num_std , mejor , time, phone_number , email , date_of_start , attendence , setDisplay}) => {
  const [isChatClicked, setChatClicked] = useState(false);
  const toggleChat = () => {
    setChatClicked(!isChatClicked);
  };
  return (
    <div className={`${styles.training_conent} row`}>
     
        <div className={`col text-center`}>
            {name}
        </div>
        <div className={`col text-center`}>
            {mejor}
        </div>
        <div className={`col text-center`}>
            {time}
        </div>
        <div className={`col text-center`}>
            <button onClick={toggleChat} className={styles.training_plan_button}>عرض</button>
        </div>
        <div className={`col text-center`}>
          <button onClick={() => setDisplay(false)} className={styles.training_plan_button}>تقييم المتدرب</button>
        </div>
        <div
          className={styles.popupContainer}
          style={{ display: isChatClicked ? "flex" : "none" }}
        >
          <div className={styles.chatBox_training}>
            <div className={styles.contentContact}>
              <div
                className={`align-self-end ${styles.closeBtn}`}
                onClick={toggleChat}
              >
                <i className="bi bi-x-circle"></i>
              </div>
              <Student_info 
                  name={name}
                  num_std={num_std}
                  mejor={mejor}
                  time={time}
                  phone_number={phone_number}
                  email={email}
                  date_of_start={date_of_start}
                  attendence={attendence}
                   />
            </div>
          </div>
        </div>
    </div>
  );
};

function Student_info({ name , num_std , mejor , time, phone_number , email , date_of_start , attendence }) {
  return (
    <div>
      <span>
      <b className={styles.contactText_training_title}>  الاسم: </b>
         </span>
      <span className={styles.contactSpan}>
        <p className={styles.contactText_training}>{name}</p>
      </span>
      <br />

      <span>
      <b className={styles.contactText_training_title}>الرقم التدريبي: </b>
      </span>
      <span className={styles.contactSpan}>
        <p className={styles.contactText_training}>{num_std}</p>
      </span>
      <br />

      <span>
      <b className={styles.contactText_training_title}> التخصص: </b>
      </span> 
      <span className={styles.contactSpan}>
        <p className={styles.contactText_training}>{mejor}</p>
      </span>
      <br />

      <span>
      <b className={styles.contactText_training_title}>الفترة:</b>
        </span>
      <span className={styles.contactSpan}>
        <p className={styles.contactText_training}>{time}</p>
      </span>
      <br />

      <span>
      <b className={styles.contactText_training_title}>رقم الجوال: </b>
      </span>
      <span className={styles.contactSpan}>
        <p className={styles.contactText_training}>{phone_number}</p>
      </span>
      <br />

      <span>
      <b className={styles.contactText_training_title}>البريد الاكتروني: </b>

        </span>
      <span className={styles.contactSpan}>
        <p className={styles.contactText_training}>{email}</p>
      </span>
      <br />

      <span>
      <b className={styles.contactText_training_title}>تاريخ المباشرة: </b>
      </span>
      <span className={styles.contactSpan}>
        <p className={styles.contactText_training}>{date_of_start}</p>
      </span>
      <br />

      <span>
      <b className={styles.contactText_training_title}>عدد ايام الغياب:</b>
      </span>
      <span className={styles.contactSpan}>
        <p className={styles.contactText_training}>{attendence}</p>
      </span>
      <br />
    </div>
  );
}

