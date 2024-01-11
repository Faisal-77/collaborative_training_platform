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
        <Link href={'/'}>  <span className={styles.text_nav}>  الصفحة الرئيسية </span> </Link>
        </div>
        <div className={`col `}>      
          <Link href={'/about'}>  <span className={styles.text_nav}> جهات التدريب </span> </Link>
        </div>
        <div className="col ">
            <Link href={'/'}>  <span className={styles.text_nav}>الإقتراحات</span> </Link>
        </div>
        <div className='col'>
        </div>
        <div className='col'>
        </div>
      </div>
  )
}
