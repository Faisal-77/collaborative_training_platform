"use client"

import React, { useState } from 'react'
import NewTrainingComponent from "../department_manager/NewTrainingComponent"
import phoneIcon from '../../(pages)/(Users)/departmentManager/Assets/icons/iPhone SE.png'
import Location from '../../(pages)/(Users)/departmentManager/Assets/icons/Primary.png'
import person from '../../(pages)/(Users)/departmentManager/Assets/icons/Primary (1).png'
import At from '../../(pages)/(Users)/departmentManager/Assets/icons/At sign.png'
import RefreshIcon from '../../(pages)/(Users)/departmentManager/Assets/icons/Refresh.png'
import HomeIcon from '../../(pages)/(Users)/departmentManager/Assets/icons/Home Page.png'
import SearchIcon from '../../(pages)/(Users)/departmentManager/Assets/icons/Search.png'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from './Navbar/Navbar';

const NewTrainingPage = () => {

    const [companyName,setCompantName]= useState("");
    const [companyEmail,setCompantEmail]= useState("");
    const [companyPhone,setCompantPhone]= useState("");
    const [companyLocation,setCompantLocation]= useState("");
    const [companyOwner,setCompantOwner]= useState("");
    const [companyStatus,setCompantStatus]= useState("");

    const updateModalData = (name, email, phone, location, owner, status) => {
        setCompantName(name);
        setCompantEmail(email);
        setCompantPhone(phone);
        setCompantLocation(location);
        setCompantOwner(owner);
        setCompantStatus(status);
    };

  return (

<>
<Navbar/>
<nav className="navbar p-0 m-0 navbar-expand-lg w-100">
  <div className="container-fluid " style={{backgroundColor:'#126C66'}}>
    
    <div className="collapse  navbar-collapse" id="navbarNavDropdown">
     
      <div className='d-flex  pe-5' style={{width:"15%"}}>
      
          <Link className="nav-link ms-4  text-white fw-bold" aria-current="page" href='/'>
            <Image src={HomeIcon} width={30} height={30} alt="home" />
          </Link>
        
          
          <Image src={RefreshIcon} height={30} width={30} alt="home" />
       
      </div>
      <div className=' text-white bg-white p-0 m-0' style={{height: '50px'}}>|
</div>        
        <div className='' style={{width:"85%"}}>
        <ul className="navbar-nav d-flex justify-content-around align-items-center w-100">
        <li className="nav-item">
          <Link href={'/departmentManager/training'} className="nav-link active"  aria-current="page" to='/'>التدريب</Link>
        </li>

        <li className="nav-item">
          <Link href={'/departmentManager/new_training'} className="nav-link "  to='/NewTrainingPage'>تدريب جديد</Link>
        </li>
        <li className="nav-item">
          <Link href={'/departmentManager/student'} className="nav-link "  to='/Cooperative'>متدربي التدريب التعاوني</Link>
        </li>
        <li className="nav-item">
          <Link href={'/departmentManager/moderators'} className="nav-link "  to='/Moderators'>المشرفين</Link>
        </li>
        <li className="nav-item">
          <Link href={'/departmentManager'} className="nav-link "  to='/'>الشكاوى</Link>
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
 <input type="text" className="form-control bg-transparent shadow-none border-0" placeholder="البحث" aria-label="Username" aria-describedby="addon-wrapping" />
 <span className="input-group-text bg-transparent border-0 rounded-start-3" id="addon-wrapping"><img style={{width:'70%'}} src={SearchIcon} alt=''/></span>
</div>

  </div>
  <div className='col-md-4 d-flex' >
 <select defaultValue={"التخصص"}  className=" form-select  border-0 rounded-3 ms-3"  style={{backgroundColor:'#676767',direction:''}} aria-label="Default select example">
  <option value={1}>التخصص</option>
  <option value={2}>التخصص</option>
  <option value={3}>التخصص</option>
</select>


<select defaultValue={"التخصص"}  className="form-select  border-0 rounded-3"  style={{backgroundColor:'#676767'}} aria-label="Default select example">
  <option value={1}>الحالة</option>
  <option value={2}>الحالة</option>
  <option value={3}>الحالة</option>
</select>
  </div>
  <div className='col-md-4  text-start'>
  </div>
    

 </div>
  </div>
</div>

    <div className='container mt-5'>
 
        <div className='row gy-3'>
            <div className='col-4'  onClick={() => updateModalData("شركة أرامكو السعودية", "G-SAED@aramco.com", "+966138772828", "الرياض", "م.محمد", " وصلت إلى مدير الوحدة ")}>
                <NewTrainingComponent text={"شركة أرامكو السعودية"} btn1={" المحاسبة : 15"} btn2={"إضافة مشرف تدريب"} progress={0} btn3={"نشر"}/>
            </div>
            <div className='col-4' onClick={() => updateModalData("وزارة الاتصالات وتقنية المعلومات", "info@mcit.gov.sa", "4444814011", "الرياض", " م.محمد", "وصلت إلى مدير الوحدة")}>
                <NewTrainingComponent text={"وزارة الاتصالات وتقنية المعلومات"} btn1={"الدعم الفني : 10"} progress={50}/>
            </div>
            <div className='col-4'  onClick={() => updateModalData("الشركة السعودية للصناعات الأساسية (سابك)", "IR@SABIC.com", "+966112258000", "الرياض", "م.محمد", "بداية التدريب")}>
                <NewTrainingComponent text={"الشركة السعودية للصناعات الأساسية (سابك)"} btn1={"الالكترونيات : 12"} btn2={"إرسال إلى مدير الوحدة"} progress={100}/>
            </div>

            <div className='col-4'  onClick={() => updateModalData("الهيئة السعودية للبيانات والذكاء الاصطناعي", "Suggestions@sdaia.gov.sa", "8001221111", "الرياض", "م.محمد", "إنتهاء التدريب")}>
                <NewTrainingComponent text={"الهيئة السعودية للبيانات والذكاء الاصطناعي"} btn1={"برمجيات الحاسب : 10"} btn2={"إرسال إلى مدير الوحدة"}progress={100}/>
            </div>
            <div className='col-4' onClick={() => updateModalData("المركز الوطني لتنمية القطاع الغير الربحي", "mc@ncnp.gov.sa", "19918", "الرياض", " م.محمد", "بداية التدريب")}>
                <NewTrainingComponent text={"المركز الوطني لتنمية القطاع الغير الربحي"} btn1={"إدارة مكتبية : 8"} btn2={" إضافة مشرف تدريب"}progress={0} btn3={"نشر"}/>
            </div>
            <div className='col-4' onClick={() => updateModalData("مصرف الراجحي", "care@alrajhibank.com", "+966920003344", "الرياض", " م.محمد", "إنتهاء التدريب")}>
                <NewTrainingComponent text={"مصرف الراجحي"} btn1={"هندسة الشبكات : 6"}  progress={50}/>
            </div>

        </div>

  {/* Modal */}
  <div>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm">
            <div className="modal-content">
                <div className="-header position-relative d-flex justify-content-between">
                    <h1 className="modal-title fs-5 text-white" style={{Color:'#FFFFFF'}} id="exampleModalLabel">{"|"}</h1>
                    <button type="button" className=" position-absolute start-0 btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className='d-flex flex-column'>
                    <div className='d-flex my-1'>
                            <p className='ps-2'>التصنيف:</p>
                            <p>{companyStatus}</p>
                        </div>

                        <div className='d-flex my-1'>
                     <p >{companyName}</p>

                        </div>
             
                        <div className='d-flex my-1'>
                            <img src={Location} alt='' />
                            <p>{companyLocation}</p>
                        </div>
          
                      
                    </div>
                </div>
            </div>
        </div>
 </div>
            </div>
        </div>
</>
    );
};

export default NewTrainingPage;