"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import TrainingPageComponent from '../department_manager/TrainingPageComponent'
import phoneIcon from '../../(pages)/(Users)/departmentManager/Assets/icons/iPhone SE.png'
import Location from '../../(pages)/(Users)/departmentManager/Assets/icons/Primary.png'
import person from '../../(pages)/(Users)/departmentManager/Assets/icons/Primary (1).png'
import At from '../../(pages)/(Users)/departmentManager/Assets/icons/At sign.png'
import SearchIcon from '../../(pages)/(Users)/departmentManager/Assets/icons/Search.png'
import Link from 'next/link';
import Image from 'next/image';
import HomeIcon from '../../(pages)/(Users)/departmentManager/Assets/icons/Home Page.png'
import RefreshIcon from '../../(pages)/(Users)/departmentManager/Assets/icons/Refresh.png'
import Navbar from './Navbar/Navbar';

export default function Training() {
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

    const tableData = [
        { name: 'ريان', trainingId: '٤٤٢٢٠٠٢٢٢', number_of_days: 2,evaluation:"تقييم" },
        { name: 'ريان', trainingId: '٤٤٢٢٠٠٢٢٢', number_of_days: 2,evaluation:"تقييم" },
      ];
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
 <input type="text" className="form-control bg-transparent border-0 shadow-none" placeholder="البحث" aria-label="Username" aria-describedby="addon-wrapping" />
 <span className="input-group-text bg-transparent border-0 rounded-start-3" id="addon-wrapping"><img style={{width:'70%'}} src={SearchIcon} alt=''/></span>
</div>

  </div>
  <div className='col-md-4 d-flex' >
 <select defaultValue={"التخصص"}   className=" form-select  border-0  shadow-none rounded-3 ms-3"  style={{backgroundColor:'#676767',direction:''}} aria-label="Default select example">
  
  <option value={1}>التخصص</option>
  <option value={2}>التخصص</option>
  <option value={3}>التخصص</option>
</select>


<select defaultValue={"التخصص"}   className="form-select  border-0 rounded-3"  style={{backgroundColor:'#676767'}} aria-label="Default select example">

  <option value={1}>الحالة</option>
  <option value={2}>الحالة</option>
  <option value={3}>الحالة</option>
</select>
  </div>
  <div className='col-md-4  text-start'>
    <button className='btn btn-primary rounded-3 border-0' style={{backgroundColor:'#CFC67C'}}>فرص التدريب</button>
  </div>
    

 </div>
  </div>
</div>


    <div className='container mt-5'>
        <div className='row gy-5'>
            <div className='col-4'  onClick={() => updateModalData("شركة أرامكو السعودية", "G-SAED@aramco.com", "+966138772828", "الرياض", "م.محمد", " وصلت إلى مدير الوحدة ")}>
                <TrainingPageComponent  text={"شركة أرامكو السعودية"} btn1={" المحاسبة : 15"} btn2={"وصلت إلى مدير الوحدة"}/>
            </div>
            <div className='col-4' onClick={() => updateModalData("وزارة الاتصالات وتقنية المعلومات", "info@mcit.gov.sa", "4444814011", "الرياض", " م.محمد", "وصلت إلى مدير الوحدة")}>
                <TrainingPageComponent    text={"وزارة الاتصالات وتقنية المعلومات"} btn1={"الدعم الفني : 10"} btn2={"وصلت إلى مدير الوحدة"}/>
            </div>
            <div className='col-4'  onClick={() => updateModalData("الشركة السعودية للصناعات الأساسية (سابك)", "IR@SABIC.com", "+966112258000", "الرياض", "م.محمد", "بداية التدريب")}>
                <TrainingPageComponent text={"الشركة السعودية للصناعات الأساسية (سابك)"} btn1={"الالكترونيات : 12"} btn2={"بداية التدريب"}/>
            </div>

            <div className='col-4'  onClick={() => updateModalData("الهيئة السعودية للبيانات والذكاء الاصطناعي", "Suggestions@sdaia.gov.sa", "8001221111", "الرياض", "م.محمد", "إنتهاء التدريب")}>
                <TrainingPageComponent text={"الهيئة السعودية للبيانات والذكاء الاصطناعي"} btn1={"برمجيات الحاسب : 10"} btn2={"إنتهاء التدريب"}del={"ss"}/>
            </div>
            <div className='col-4'  onClick={() => updateModalData("المركز الوطني لتنمية القطاع الغير الربحي", "mc@ncnp.gov.sa", "19918", "الرياض", " م.محمد", "بداية التدريب")}>
                <TrainingPageComponent text={"المركز الوطني لتنمية القطاع الغير الربحي"} btn1={"إدارة مكتبية : 8"} btn2={"بداية التدريب"}del={"ss"}/>
            </div>
            <div className='col-4'  onClick={() => updateModalData("مصرف الراجحي", "care@alrajhibank.com", "+966920003344", "الرياض", " م.محمد", "إنتهاء التدريب")}>
                <TrainingPageComponent text={"مصرف الراجحي"} btn1={"هندسة الشبكات : 6"} btn2={"إنتهاء التدريب"} del={"ss"}/>
            </div>

        </div>

  {/* Modal */}
  <div>
  <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-sm">
      <div className="modal-content">
        <div className="modal-header position-relative d-flex justify-content-between">
          <h1 className="modal-title fs-5" id="exampleModalLabel">{companyName}</h1>
          <button type="button" className="position-absolute start-0 btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <div className='d-flex flex-column'>
            <div className='d-flex my-3'>
              <img className='ms-2' src={At} alt='' />
              <p>{companyEmail}</p>
            </div>
            <div className='d-flex'>
              <img className='ms-2' src={phoneIcon} alt='' />
              <p>{companyPhone}</p>
            </div>
            <div className='d-flex my-3'>
              <img src={Location} alt='' />
              <p>{companyLocation}</p>
            </div>
            <div className='d-flex'>
              <img className='ms-2' src={person} alt='' />
              <p className='ms-2'>مشرف التدريب : </p>
              <p>{companyOwner}</p>
            </div>
            <div className='d-flex my-3'>
              <p className='ps-2'>الحالة:</p>
              <p>{companyStatus}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header position-relative d-flex justify-content-between">
          <h1 className="modal-title fs-5" id="exampleModalLabel">{companyName}</h1>
          <button type="button" className="position-absolute start-0 btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>المتدرب</th>
                <th style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>الرقم</th>
                <th style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>عدد الايام</th>
                <th style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>تقييم المتدرب</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row , ind) => (
                <tr key={ind}>
                  <td  style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{row.name}</td>
                  <td  style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{row.trainingId}</td>
                  <td  style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{row.number_of_days}</td>
                  <td  className='modal-title fs-5' data-bs-toggle="modal" data-bs-target="#exampleModal4" style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>
                    <div  className='' data-bs-dismiss="modal" aria-label="Close">{row.evaluation}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
       
       
       
  <div className="modal fade" id="exampleModal4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
  <div className="modal-dialog modal-sm">
    <div className="modal-content">
      <div className="modal-header position-relative d-flex justify-content-between">
        <h1 className="modal-title fs-5" id="exampleModalLabel">{companyName}</h1>
        <button type="button" className="position-absolute start-0 btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>راجع الواتس</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</div>     </div>
        </div>
</>
    );
};