"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "@/app/components/training_entity/page.module.css";
import { use, useState } from "react";
export default function Contact() {
    const [isPlanClicked, setClicked] = useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.training_plan_container}>
                
                <Training_plan_cell
                    name={"مدير التدريب التعاوني"}
                    setClicked={setClicked}
                />
            </div>
            <div
                className={styles.popupContainer}
                style={{ display: isPlanClicked ? "flex" : "none" }}
            >
                 <Student_info 
                    name={"دكتور محمد السنتري"}
                    phone_number={"053 065 4648"}
                    email={"rayan1999a@gmail.com"}
                    isPlanClicked={isPlanClicked}
                    setClicked={setClicked}
                    />
    </div>
      </div>
    );
  }

function Training_plan_cell({name , setClicked}) {
    return (
        <>
            <div onClick={()=>setClicked(true)} className={styles.training_plan}>
                <p>{name}</p>
            </div>     
        </>
    )
  }
  
  function Student_info({ name , phone_number , email  , setClicked }) {
    return (
        <div className={styles.chatBox_training}>
            <div className={styles.contentContact}>
                <div className={`align-self-end ${styles.closeBtn}`}>
                    <i className="bi bi-x-circle"
                    onClick={()=>setClicked(false)}></i>
                </div>
            <div>
            <span>
            <b className={styles.contactText_training_title}>  الاسم: </b>
            </span>
            <span className={styles.contactSpan}>
            <p className={styles.contactText_training}>{name}</p>
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
    
        </div>
      </div>
      </div>
    );
  }
  
  