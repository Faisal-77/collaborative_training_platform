import React from 'react'
import styles from '@/app/page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Link from 'next/link';

export default function nav() {
  return (
    
    <div className={`row  ${styles.navPar}`}>
      
      <div className='col'>
        </div>
        <div className='col'>
        </div>
        <div className="col ">
        <Link href={'/'}>  <span className={styles.text_nav}>  الصفحة الرائيسية </span> </Link>
        </div>
        <div className={`col `}>      
<<<<<<< HEAD
          <Link href={'/about'}>  <span className={styles.text_nav}> جهاة التدريب </span> </Link>
=======
          <Link href={'/'}>  <span className={styles.text_nav}> جهاة التدريب </span> </Link>
>>>>>>> b232140c822ac6976de930c30327e8f028ec6b7e
        </div>
        <div className="col ">
            <Link href={'/'}>  <span className={styles.text_nav}>الأقتراحات</span> </Link>
        </div>
        <div className='col'>
        </div>
        <div className='col'>
        </div>
      </div>
  )
}
