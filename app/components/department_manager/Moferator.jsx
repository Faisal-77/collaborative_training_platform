"use client"
import React, { useEffect, useState } from 'react';
import ModeratorsComponent from '../department_manager/ModeratorsComponent';
import RefreshIcon from '../../(pages)/(Users)/departmentManager/Assets/icons/Refresh.png'
import HomeIcon from '../../(pages)/(Users)/departmentManager/Assets/icons/Home Page.png'
import SearchIcon from '../../(pages)/(Users)/departmentManager/Assets/icons/Search.png'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from './Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
const Moderators = () => {
  const initialTotalGrades = {
    degree1Total: 0,
    degree2Total: 0,
    degree3Total: 0,
    degree4Total: 0
  };

  const [totalGrades, setTotalGrades] = useState(initialTotalGrades);

  const evaluationItems = [
    { name: "محمد", deg1: "Mohammed@gmail.com",  attend: " 0555123450", },
    { name: "أحمد", deg1: "Ahmed@gmail.com",  attend: " 0541236660", },

    { name: "صالح", deg1: "Saleh@gmail.com",  attend: " 0546600122", },

   

  ];

  useEffect(() => {
    // Calculate total grades
    const updatedTotalGrades = evaluationItems.reduce((acc, item) => {
      acc.degree1Total += item.deg1? item.deg1 : 0;
      acc.degree2Total += item.deg2? item.deg2 : 0;
      acc.degree3Total += item.deg3? item.deg3 : 0;
      acc.degree4Total += item.deg4? item.deg4 : 0;
      return acc;
    }, { ...initialTotalGrades }); // Initialize with initialTotalGrades

    setTotalGrades(updatedTotalGrades);
  }, []);

  return (
    <div>
  <Navbar/>
<nav className="navbar p-0 m-0 navbar-expand-lg w-100">
  <div className="container-fluid " style={{backgroundColor:'#126C66'}}>
    
    <div className="collapse  navbar-collapse" id="navbarNavDropdown">
     
      <div className='d-flex  pe-5' style={{width:"15%"}}>
      
          <Link className="nav-link ms-4  text-white fw-bold" aria-current="page" href='/'>
            <Image src={HomeIcon} width={30} height={30} alt="home" />
          </Link>
        
          <Link className="nav-link  text-white fw-bold" aria-current="page" href='/'>
          <Image src={RefreshIcon} height={30} width={30} alt="home" />
          </Link>
       
      </div>
      <div className=' text-white bg-white p-0 m-0' style={{height: '50px'}}>|
</div>        
        <div className='' style={{width:"85%"}}>
        <ul className="navbar-nav d-flex justify-content-around align-items-center w-100">
        <li className="nav-item">
          <Link href={'/'} className="nav-link active"  aria-current="page" to='/'>التدريب</Link>
        </li>

        <li className="nav-item">
          <Link href={'/'} className="nav-link "  to='/NewTrainingPage'>تدريب جديد</Link>
        </li>
        <li className="nav-item">
          <Link href={''} className="nav-link "  to='/Cooperative'>متدربي التدريب التعاوني</Link>
        </li>
        <li className="nav-item">
          <Link href={"/"} className="nav-link "  to='/Moderators'>المشرفين</Link>
        </li>
        <li className="nav-item">
          <Link href={'/'} className="nav-link "  to='/'>الشكاوى</Link>
        </li>
        </ul></div>
      
    </div>
  </div>
</nav>
<div className='w-100 p-2 position-relative bottom-0 start-0' style={{backgroundColor:"#015263"}}>
<div className=' container' >
 <div className='row w-100'>
 <div className='col-md-4'>

<div className="input-group w-50 flex-nowrap rounded-3" style={{backgroundColor:'#676767'}}>
</div>

  </div>
  <div className='col-md-4 d-flex' >

  </div>
  <div className='col-md-4  text-start'>
    <button className='btn btn-primary rounded-3 border-0'data-bs-toggle="modal" data-bs-target="#exampleModal4" style={{backgroundColor:'#CFC67C'}}> إضافة مشرف تدريب</button>
  </div>
    

 </div>
  </div>
</div>




      <div>
        <div className='container mt-3 pb-3  rounded-2' style={{ backgroundColor: '#0287A2' }}>
          <div className='d-flex me-5 pe-5 pt-3 m-auto '>
            <p className='text-white fw-bold ms-3' style={{ width: '12%' }}>الاسم</p>
            <p className='text-white fw-bold' style={{ width: '15%' }}> البريد الالكتروني </p>
            <p className='text-white fw-bold' style={{ width: '15%' }}> رقم الجوال </p>


          </div>
          <div className='m-auto bg-white' style={{ height: '1px', width: '85%' }}></div>
          <div style={{ width: '92%' }} className='mt-4 m-auto'>
            {evaluationItems.map((item, index) => (
              <ModeratorsComponent
                key={index}
                name={item.name}
                deg1={item.deg1}
                deg2={item.deg2}
                attend={item.attend}
                deg3={item.deg3}
                deg4={item.deg4}
              />
            ))}
            
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Moderators;

