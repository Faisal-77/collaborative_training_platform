import styles from '@/app/page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import logo from '@/Image/white__logo1.png';

export  function Footer() {
    return (
        <div className='row'>
            <div className={`col ${styles.footer_main}`}> </div>

            <div className={`col ${styles.footer_main}`}>
                <p className ={styles.text_nav}> التخصصات</p>
            </div>

            <div className={`col ${styles.footer_main}`}>
                <p className ={styles.text_nav}>جهات التدريب</p>
            </div>

            <div className={`col ${styles.footer_main}`}>
                <p className ={styles.text_nav}>الأقتراحات</p>
            </div>
            <div className={`col ${styles.footer_main}`}>
                <Image src={logo} width={250} height={50}></Image>
            </div>
            <div className={`col ${styles.footer_main}`}></div>
        </div>
    )
}
export  function Footer_2() {
  return (
    <div className='row'>
        
        <div className={`col ${styles.footer_main}`}>
            <p className ={styles.text_footer_2}>جميع الحقوق محفوظة - المؤسسة العامة للتدريب التقني والمهني (TVTC) © 2024</p>
        </div>
       
        <div className={`col ${styles.footer_main}`}>
            <p className ={styles.text_footer_2}>www.tvtc.com</p>
        </div>
    </div>
  )
}

