"use client";
import styles from "@/app/page.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { signOut } from "next-auth/react"
import { useState } from "react";
const UserTools = () => {
  const [isUserDropdownVisible, setUserDropdownVisible] = useState(false);
  const toggleUserDropdown = () => {
    setUserDropdownVisible(!isUserDropdownVisible);
  }
  return (
    <>
      <div onClick={toggleUserDropdown} className={`${styles.userTools} d-flex align-items-center`}>
        <i className={`bi bi-person-circle ${styles.iconPerson}`}></i>
        <span className={`${styles.usernameText} ${styles.hideOnSmall}`}>
          اسم المستخدم
        </span>
      </div>
      {isUserDropdownVisible && (
        <div  className={styles.userDropdown}>
        <ul>
          <li>
            <button className={styles.userBtn}>إعدادات الحساب</button>
          </li>
          <li>
            <button onClick={() => signOut()} className={styles.userBtn}> تسجيل خروج</button>
          </li>
        </ul>
      </div>
      )}
      
    </>
  );
};
export default UserTools;
