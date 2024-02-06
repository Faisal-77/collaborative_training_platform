"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "@/app/components/training_entity/page.module.css";
import { useState } from "react";
export default function Fillter() {
    const [isChatClicked, setChatClicked] = useState(false);
    const toggleChat = () => {
        setChatClicked(!isChatClicked);
    };

    return (
    
        <div className={`${styles.filtter_container_attendance} row`}>
           
            <div className={`${styles.header_nav} col`}>
                <button className={styles.training_plan_button_attandance}>
                    خطة الطلب
                </button> 
          
                <button className={styles.training_plan_button_attandance}>
                    الحضور والغياب
                </button>
            </div> 
            
        </div>
  )
}