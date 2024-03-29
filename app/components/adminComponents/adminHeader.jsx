import logo from "@/Image/white__logo1.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import UserTools from "@/app/components/adminComponents/userTools";
import Image from "next/image";
import styles from "@/app/page.module.css";

export default function AdminHeader() {
  return (
    <header className={`row align-items-center ${styles.adminHeader}`}>
      <div className="col-6">
        <div className={`d-flex align-items-center p-0`}>
          <UserTools />
        </div>
      </div>
      <div className="col-6">
        <div className="float-start m-3">
          <Image className={styles.tvtc_logo} src={logo} alt="TVTC LOGO" />
        </div>
      </div>
    </header>
  );
}
