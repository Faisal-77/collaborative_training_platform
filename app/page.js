import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/home_page/header.jsx';
import Nav from './components/home_page/nav.jsx';
import  {Content , Under_content} from './components/home_page/conent';
import {Footer , Footer_2} from './components/home_page/footer'
export default function Home() {
  return (
  //  <div className={`container-fluid text-center p-0`}>
  <div className='container-fluid text-center'>
      {/* <div className={`${styles.contaner}`}> */}
          <Header />
          <Nav />
      {/* </div> */}
      <Content />
      <Footer />
      <Footer_2 />
      </div>
      // </div>
  )
}
