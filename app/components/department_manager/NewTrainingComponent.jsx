"use client"
import React, { useState } from 'react';
import LocationIcon from '../../(pages)/(Users)/departmentManager/Assets/icons/Primary.png';
import CorrectIcon from '../../(pages)/(Users)/departmentManager/Assets/icons/check-circle-fill.png';
import WrongIcon from '../../(pages)/(Users)/departmentManager/Assets/icons/exclamation-circle-fill.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewTrainingComponent = ({ text, btn1, btn2, btn3, progress, loc, status }) => {
  const [companyData, setCompanyData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    owner: "",
    status: "",
  });

  const updateModalData = (name, email, phone, location, owner, status) => {
    setCompanyData({ name, email, phone, location, owner, status });
  };

  const handleBtn2Click = () => {
    if (btn2 === "إرسال إلى مدير الوحدة") {
      setCompanyData({ ...companyData, phone: 1 });
    } else {
      setCompanyData({ ...companyData, phone: 2 });
    }
  };

  const [selectedStatus, setSelectedStatus] = useState(""); // State to store the selected value

  const handleStatusChange = (event) => {
    console.log(event.target.value);
    setSelectedStatus(event.target.value); // Update the selected value in the state
  };
  return (
    <div style={{ height: '250px' }} className='mb-3'>
      <div data-bs-toggle="modal" data-bs-target="#exampleModal" className='rounded-4 position-relative overflow-hidden bg-white dark:bg-dark-10 h-100' style={{ width: '250px', boxShadow: '0  0 10px rgba(0, 0, 0, 0.5)' }}>
        <div className='bg-white text-center rounded-top-3' onClick={() => updateModalData("شركة أرامكو السعودية", "G-SAED@aramco.com", "+966138772828", "الرياض", "م.محمد", "تدريب جديد ")}>
          <p className='pt-2 px-2' >{text}</p>
        </div>
        <div className='d-flex flex-column position-relative m-auto rounded-bottom-3 h-100' style={{ backgroundColor: '#A3D09D' }}>
          <div className='rounded-circle fw-bold d-flex justify-content-center align-items-center text-center mt-2 me-3' style={{ width: '30px', height: '30px', backgroundColor: '#fff', fontSize: '12px', top: '15px', right: '5px' }}>{progress}%</div>
          <button className='btn btn-primary mb-3 mt-3 w-75 m-auto rounded-3 border-0' style={{ backgroundColor: '#CFC67C', fontSize: '14px' }}>{btn1}</button>
          <div className='d-flex mx-3 justify-content-center'>
            {btn2 &&
              <button onClick={handleBtn2Click} type='button' data-bs-toggle="modal" data-bs-target={btn2 === "إرسال إلى مدير الوحدة"?"#exampleModal3":"#exampleModal1"}  style={{ backgroundColor: '#CFC67C', fontSize: '14px' }} className='btn mx-2 btn-primary mb-3 mt-3 w-75 m-auto rounded-3 border-0' >{btn2}</button>
            }
            {btn3 &&
              <button type='button' data-bs-toggle="modal" data-bs-target="#exampleModal2" className='btn btn-primary mb-3 mt-3 w-25 m-auto rounded-3 border-0' style={{ backgroundColor: '#CFC67C', fontSize: '14px' }}>{btn3}</button>
            }
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-sm">
        <div className="modal-content">
          <div className="modal-header position-relative d-flex justify-content-between">
            <button type="button" className="position-absolute start-0 btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="d-flex flex-column">
              <div className="text-center my-3 m-auto">
               {selectedStatus?
                <div>
                <img className="mb-5" style={{ width: '25px' }} src={CorrectIcon} alt="" /> 
                <p className=' m-auto'>{"تم النشر"}</p>
                </div>
               : <div>
                <img className="mb-5" style={{ width: '25px' }} src={WrongIcon} alt="" /> 
                <p className=' m-auto'>{"الرجاء اضافه مشرف تدريب"}</p>
                </div> }
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

<div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-sm">
        <div className="modal-content">
          <div className="modal-header position-relative d-flex justify-content-between">
            <button type="button" className="position-absolute start-0 btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="d-flex flex-column">
              <div className="text-center my-5 m-auto">
              <select   onChange={handleStatusChange} // Attach the event handler to handle changes
      value={selectedStatus}  className=" form-select mb-5  border-0  shadow-none rounded-3 ms-3"  style={{backgroundColor:'#CCCCCC',direction:''}} aria-label="Default select example">
  <option value={1}>مشرف تدريب ١</option>
  <option value={2}>مشرف تدريب ٢</option>
  <option value={3}>مشرف تدري ٣</option>
</select>
       
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>





    <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  <div className="modal-dialog modal-sm">
    <div className="modal-content">
      <div className="position-relative d-flex justify-content-between">
      <h1 className=" text-white modal-title fs-5" id="exampleModalLabel">1</h1>
                    <button type="button" className=" position-absolute start-0 btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
      <div className="modal-body">
        <div className="d-flex flex-column">
          <div className="text-center my-3">
            <img className='mb-5' src={WrongIcon} alt=''/>
            <p>{"هل أنت متأكد من هذا الإجراء؟"}</p>
          </div>
          <div className='d-flex'>
          <button data-bs-dismiss="modal" className='btn btn-primary m-auto px-4 rounded-3 border-0' style={{ backgroundColor: '#CFC67C', fontSize: '14px' }}>{"لا"}</button>
            <button  data-bs-dismiss="modal" className='btn btn-primary m-auto px-4 rounded-3 border-0' style={{ backgroundColor: '#CFC67C', fontSize: '14px' }}>{"نعم"}</button>
           </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};



export default NewTrainingComponent;
