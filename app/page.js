import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/home_page/header.jsx';
import Nav from './components/home_page/nav.jsx';
import  {Content , Under_content} from './components/home_page/conent';
import {Footer , Footer_2} from './components/home_page/footer'
import { redirect } from "next/navigation"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) redirect('/stu_dashbord');
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
