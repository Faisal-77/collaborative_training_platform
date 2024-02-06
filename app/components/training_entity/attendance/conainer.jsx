"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "@/app/components/training_entity/page.module.css";
import React, { useEffect, useState } from "react";

export default function container() {

  return (
    <div className={`${styles.attandance_container} container`}>
      <div className={`${styles.eval_title} row`}>
            <div className={`col`}>
            <span className={styles.attan_title_sp}> معلومات المتدربين </span>
            <span className={styles.attan_title_sp}> الأسبوع الأول</span>
            </div>
      </div>
      <div className={` row`}>
        <div className={`col`}>
            <p>الرقم التريبي</p>
        </div>
        <div className={`col`}>
            <p> الأسم</p>
        </div>
        <div className={`col`}>
            <p> عدد ايام الغياب</p>
        </div>
        <div className={`col`}>
            <p>الأحد</p>
        </div>
        <div className={`col`}>
            <p> الأثنين</p>
        </div>
        <div className={`col`}>
            <p>الثلاثاء</p>
        </div>
        <div className={`col`}>
            <p>الأربعاء</p>
        </div>
        <div className={`col`}>
            <p> الخميس</p>
        </div>
        <div className={`col`}>
            <p> الجمعة </p>
        </div>
        <div className={`col`}>
            <p> السبت </p>
        </div>
      </div>
    </div>
  );
}
