import styles from "@/app/page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo_tvtc from "@/Image/logo_tvtc.svg";
import walking_img from "@/Image/img_walking.svg";
import Image from "next/image";
import Link from "next/link";

export default function infoForm() {
  return (
  <>
     <Image src={logo_tvtc} />
            <span className={`${styles.sub_header}`}>
              <h2>مرحبًا بك في مركز التدريب التعاوني</h2>
            </span>
            <Image
              src={walking_img}
              className={`${styles.infoBoxImg} text-center`}
            />
  </>);
}