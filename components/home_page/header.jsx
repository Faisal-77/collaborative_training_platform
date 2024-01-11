import styles from '@/app/page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import logo from '@/Image/white__logo1.png';

export default function Header() {
  return (
      <div className={`row align-items-center ${styles.rowBackground}`}>
        <div className="col">
          <Image className={styles.tvtc_logo} width={351} height={80} src={logo} />
        </div>
        <div className="col">
          <button className={styles.log_btn}>تسجيل الدخول</button>
        </div>
      </div>
    
  );
}