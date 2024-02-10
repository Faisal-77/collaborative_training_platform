import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/app/components/adminComponents/page.module.css";
import Link from "next/link";

export default function CardServices({ links }) {
  return (
    <>
      {links.map((link , ind) => (
        <Link href={link.url} className={`${styles.AdminLink}`}>
          <div className={`card ${styles.AdminCard}`} ind={ind}>
            <div className={`card-body ${styles.cardBody} h-100`}>
              <h4 className={styles.cardTitle}>{link.title}</h4>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
