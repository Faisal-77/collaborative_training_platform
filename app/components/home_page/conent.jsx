import styles from '@/app/page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Image from 'next/image';
import logo from '@/Image/slider__22xx.png';
import icon_text from '@/Image/icon_text.png';
import icon_book from '@/Image/icon_book.png';
import icon_training from '@/Image/icon_training.png';

export  function Content() {
  return (
    <div className={`row ${styles.content_container}`}>
      <div className='col'>
        <div className={styles.img_background_content}>
<<<<<<< HEAD
          <Image src={logo} style={{ width: '100%', height: '100%' }} />
=======
          <Image src={logo} layout="fill" objectFit="cover" />
>>>>>>> b232140c822ac6976de930c30327e8f028ec6b7e
        </div>
      </div>
      <div className={`col ${styles.rectangel}`}>
        <div><br /> <br /></div>
      </div>
      <Under_content />
      </div>
  );
}

export  function Under_content() {
  return (
    
    <div className={`col ${styles.under_rectaangle}`}>
        <div className={`row `}>
          <div className={`col`}>
            <div className={styles.content_under_rectangle}>
              <Image src={icon_book}></Image>
              <p>التخصصات</p>
            </div>
        </div>  
        
        <div className={`col`}>
            <div className={styles.content_under_rectangle}>
              <Image src={icon_training}></Image>
              <p>جهات التدريب</p>
            </div>
        </div>

        <div className={`col`}>
            <div className={styles.content_under_rectangle}>
              <Image src={icon_text}></Image>
              <p>الاقتراحات</p>
            </div>
        </div>
        </div>
      </div>
  )
}
