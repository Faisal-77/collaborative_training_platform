"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "@/app/components/training_entity/page.module.css";
import SelectForm from "@/app/components/selectForm";
import { useState } from "react";
import Link from "next/link";
export default function Fillter() {
    const [isChatClicked, setChatClicked] = useState(false);
    const toggleChat = () => {
      setChatClicked(!isChatClicked);
    };

  return (
    
        <div className={`${styles.filtter_container} row`}>
            <div className="col">
           
                    <input
                        type="search"
                        className={`${styles.formInput} m-0`}
                        id="search"
                        placeholder="البحث"
                    />
                  
            </div>

            <div className="col text-center">
                
                    <SelectForm
                        selectedOption={"الترتيب"}
                        chosenOption={["أ - ي", "ي - أ", "الأحدث", "الأقدم"]}
                        />
                
            
            </div>
            <div className="col"></div> 

            <div className="col text-center">
                <Link href={"/training_entity/training/training_plan"} className={styles.training_plan_button}>
                    خطة الطلب
                </Link> 
            </div>
            <div className="col text-center">
                <Link href={"/training_entity/training/attandance"} className={styles.training_plan_button}>
                    الحضور والغياب
                </Link>
            </div> 
            
        </div>
  )
}