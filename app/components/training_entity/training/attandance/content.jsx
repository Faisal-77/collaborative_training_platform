"use client"
import React from 'react'
import AttendanceComponent1 from '../attandance/AttendanceComponent1'
import AttendanceComponent2 from '../attandance/AttendanceComponent2'
import waitIcon from '../../../../(pages)/(Users)/departmentManager/Assets/icons/dash-circle-fill.png'
import arrow from '../../../../(pages)/(Users)/departmentManager/Assets/icons/Frame 16.png'
import '../attandance/page.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
const Attendance = () => {
  return (
<div>
   
 <div className='my-2 me-5 w-75 '><img src={arrow} alt=''/></div>
      <div className=' mt-3 pb-3 mx-auto px-4  rounded-2' style={{ backgroundColor: '#0287A2',width:'90%' }}>
      <div className='row'>
        <div className='col-md-7 my-3'>
            <div className='d-flex justify-content-evenly'>
                <div className='p-2 rounded-1' style={{backgroundColor:'#86EAFE',color:'#65686E'}}>معلومات المتدربين</div>
                <div className='p-2 px-3 rounded-1' style={{backgroundColor:'#86EAFE',color:'#65686E'}}> الأسبوع الأول</div>
            </div>
        </div>
        <div className='col-md-5'></div>
      </div>
            <div className='row'>
                <div className='col-md-4 '>
                <div className='d-flex me-5  pt-3 justify-content-between '>
            <p className='text-white fw-bold ms-3'>الرقم التدريبى</p>
            <p className='text-white fw-bold' >  الاسم </p>
            <p className='text-white fw-bold'>  عدد ايام الغياب </p>


          </div>
                </div>


                <div className='col-md-8'>
                <div className='d-flex me-5 pe-5 pt-3 justify-content-between '>
            <p className='text-white fw-bold ms-3' >الأحد</p>
            <p className='text-white fw-bold' >  الاثنين </p>
            <p className='text-white fw-bold'> الثلاثاء </p>
            <p className='text-white fw-bold ms-3' >الأربعاء</p>
            <p className='text-white fw-bold' >  الخميس </p>
            <p className='text-white fw-bold'> الجمعة </p>
            <p className='text-white fw-bold ms-3' >السبت</p>


          </div>
                </div>
            </div>

            <div >
                <div className='row'>
                    <div className='col-md-4'>
                        <AttendanceComponent1 number={422550176} name={"ريان علي الكرساوي"} count={2}/>
                        <AttendanceComponent1 number={422357800} name={"عادل صالح الطويل"} count={0}/>
                        <AttendanceComponent1 number={422338899} name={"فيصل فهد الشيخ"} count={1}/>
                        <AttendanceComponent1 number={422630004} name={"عمران الرشيدي"} count={2}/>
                    </div>
                    <div className='col-md-8'>
                    <AttendanceComponent2 day1={waitIcon} day2={waitIcon} day3={waitIcon} day4={waitIcon} day5={waitIcon} day6={waitIcon} day7={waitIcon}/>
                    <AttendanceComponent2 day1={waitIcon} day2={waitIcon} day3={waitIcon} day4={waitIcon} day5={waitIcon} day6={waitIcon} day7={waitIcon}/>
                    <AttendanceComponent2 day1={waitIcon} day2={waitIcon} day3={waitIcon} day4={waitIcon} day5={waitIcon} day6={waitIcon} day7={waitIcon}/>
                    <AttendanceComponent2 day1={waitIcon} day2={waitIcon} day3={waitIcon} day4={waitIcon} day5={waitIcon} day6={waitIcon} day7={waitIcon}/>

                    </div>
                </div>
            </div>

        
        </div>

        <div className='d-flex mt-5 justify-content-center mb-4'>
        <button className='btn btn-primary rounded-0 EE rounded-end-1 ms-1 px-5 border-0' style={{fontSize:'12px'}}> السابق</button>
        <button className='btn btn-primary rounded-0 EE  rounded-start-1  px-5 border-0' style={{fontSize:'12px'}}> التالي</button>

        </div>
    </div>
  )
}

export default Attendance
