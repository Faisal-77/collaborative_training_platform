"use client";
// import React from 'react'
import styles from "@/app/page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Link from "next/link";
export default function nav() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div className={`row `}>
        <nav className={` ${styles.navbar}`}>
          {/*
    navbar in small screens
       */}
          {isSidebarVisible && (
            <ul className={`${styles.sidebar} ${styles.w_sm_100}`}>
              <li>
                <Link
                  href={"#"}
                  onClick={toggleSidebar}
                  style={{ fill: "white" }}
                  className={styles.text_nav}
                  aria-label="Close Sidebar"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
                    viewBox="0 -960 960 960"
                    width="28"
                  >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href={"/"}>الصفحة الرئيسية</Link>
              </li>
              <li>
                <Link href={"/"}>التخصصات</Link>
              </li>
              <li>
                <Link href={"/"}>جهات التدريب</Link>
              </li>
              <li>
                <Link href={"/"}>الخدمات</Link>
              </li>
              <li>
                <Link href={"/suggestions"}>الاقتراحات</Link>
              </li>
            </ul>
          )}
          {/*large screen nav */}
          <ul className={`${styles.navList} `}>
            <li className={styles.menuBtn}>
              <Link
                href={"#"}
                onClick={toggleSidebar}
                style={{ fill: "white" }}
                className={styles.text_nav}
                aria-label="Open Sidebar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
                  viewBox="0 -960 960 960"
                  width="28"
                >
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              </Link>
            </li>
            <li className={styles.menuBtn}>
              <Link href="/login">
                <button className={`${styles.log_btn} `}>تسجيل الدخول</button>
              </Link>
            </li>
            <li className={styles.hideOnSmall}>
              <Link href={"/"} className={styles.text_nav}>
                الصفحة الرئيسية
              </Link>
            </li>
            <li className={styles.hideOnSmall}>
              <Link href={"/"} className={styles.text_nav}>
                التخصصات
              </Link>
            </li>
            <li className={styles.hideOnSmall}>
              <Link href={"/"} className={styles.text_nav}>
                جهات التدريب
              </Link>
            </li>
            <li className={styles.hideOnSmall}>
              <Link href={"/"} className={styles.text_nav}>
                الخدمات
              </Link>
            </li>
            <li className={styles.hideOnSmall}>
              <Link href={"/suggestions"} className={styles.text_nav}>
                الاقتراحات
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
