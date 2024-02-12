import React from 'react'
import pic from '@/app/(pages)/(Users)/departmentManager/Assets/images/Male User.png'
import Link from 'next/link';
import logo from '@/app/(pages)/(Users)/departmentManager/Assets/icons/white__logo 1.png'
import './Navbar.css'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div>
<nav className="navbar pb-0" style={{backgroundColor:'#126C66'}}>
  <div className="container-fluid">
  <div className='d-flex'>
   
    <Image src={pic} alt="logo" width={50} height={50} />
    <p className='text-white pt-2 me-2'>اسم المستخدم</p>
    
    </div>
    <Link href={'/'}  className="navbar-brand">
      <div className='d-flex  ms-5'>
      <Image src={logo} alt="logo" height={50} />
      </div>
    </Link>
  </div>

  <div className='w-100 bg-white' style={{height:'1px'}}></div>
  

  {/*  */}




  {/*  */}


</nav>


    </div>
  )
}

export default Navbar
