import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/app/page.module.css";

export default function AdminSidebar({ isSidebarVisible, toggleSidebar }) {
  return (
    <>
      {isSidebarVisible && (
        <ul className={`${styles.sidebar} ${styles.w_sm_100}`}>
          <li>
            <Link
              href={"#"}
              onClick={toggleSidebar}
              style={{ fill: "white" }}
              className={styles.text_nav}
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
            <Link href={"/admin/trainingCompany"}>جهات التدريب</Link>
          </li>
          <li>
            <Link href={"/admin/departmentCoordinators"}>منسقين الأقسام</Link>
          </li>
          <li>
            <Link href={"/admin/orderCompany"}>الطلبات</Link>
          </li>
          <li>
            <Link href={"/admin/suggestions"}>الشكاوى والاقتراحات</Link>
          </li>
          <li>
            <Link href={"/"}>البيانات</Link>
          </li>
        </ul>
      )}
      <nav
        className={`col-2 ${styles.navbarAdmin}
        h-100
        d-flex
        align-items-center
        p-0
        ${styles.hideOnSmall}`}
      >
        <ul className={`p-0 ${styles.sidebarAdmin}`}>
          <li className="mb-5">
            <Link href={"/admin/trainingCompany"}>جهات التدريب</Link>
          </li>
          <li className="mb-5">
            <Link href={"/admin/departmentCoordinators"}>منسقين الأقسام</Link>
          </li>
          <li className="mb-5">
            <Link href={"/admin/orderCompany"}>الطلبات</Link>
          </li>
          <li className="mb-5">
            <Link href={"/admin/suggestions"}>الشكاوى والاقتراحات</Link>
          </li>
          <li className="mb-5">
            <Link href={"/"}>البيانات</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
