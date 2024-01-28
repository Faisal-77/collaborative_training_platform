import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "../training_entity/page.module.css";
import Link from "next/link";
export default function Nav() {
  return (
        <div className={`row` }>
           
            <section
            className={`align-items-center h-100  ${styles.filterSection}`}
            >
            
            <div
                className={`col-2 h-100 text-center p-2  ${styles.colsOftools}`}
              >
                 <Link href={"/"} style={{ color: "white" }}>
                  <i className={`bi bi-house`}></i>
                </Link>
                
                <i className={`bi bi-arrow-clockwise me-4`}></i>
              </div>
            
                <ul className={` ${styles.sidebarAdmin}`}>
                    
                    <li className="col"></li>

                    <li className="col">
                        <Link href={"/"}>الطلبات</Link>
                    </li>
                    <li className="col">
                        <Link href={"/"}>التدريب</Link>
                    </li>
                    <li className="col-4">
                        <Link href={"/"}>الشكاوى والاقتراحات</Link>
                    </li>
                    <li className="col">
                        <Link href={"/"}>التواصل</Link>
                    </li>
             
                </ul>

          </section>
            
        </div>
  )
}
