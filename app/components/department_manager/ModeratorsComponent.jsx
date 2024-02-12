
import React, { useState } from 'react'
import Link from "next/link"

import User from '../../(pages)/(Users)/departmentManager/Assets/icons/User.png'
import Threeads from '../../(pages)/(Users)/departmentManager/Assets/icons/threads.png'
import Phone from '../../(pages)/(Users)/departmentManager/Assets/icons/Phone.png'
import Lock from '../../(pages)/(Users)/departmentManager/Assets/icons/lock.png'
import WrongIcon from '../../(pages)/(Users)/departmentManager/Assets/icons/exclamation-circle-fill.png';
import Arrow from '../../(pages)/(Users)/departmentManager/Assets/icons/Down Arrow.png'

const ModeratorsComponent = ({name,deg1, deg2,attend,deg3, deg4}) => {
  const [companyName,setCompantName]= useState("");
  const [companyEmail,setCompantEmail]= useState("");
  const [companyPhone,setCompantPhone]= useState("");
  const [companyLocation,setCompantLocation]= useState("");
  const [companyOwner,setCompantOwner]= useState("");
  const [companyStatus,setCompantStatus]= useState("");
  const [companyData, setCompanyData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    owner: "",
    status: "",
  });
  const updateModalData = (name, email, phone, location, owner, status) => {
    console.log(name);

      setCompantName(name);
      setCompantEmail(email);
      setCompantPhone(phone);
      setCompantLocation(location);
      setCompantOwner(owner);
      setCompantStatus(status);
  };
  return (
    <div className='rounded-1 my-3' style={{backgroundColor:'#86EAFE'}}>
          <div className='d-flex   pe-5 mx-auto'   >
      <p className='pt-2  ms-3 'style={{color:'#65686E', fontSize:'13px',width:'11%'}}>{name}</p>
      <p className='pt-2' style={{color:'#65686E',width:'17%'}}>{deg1}</p>
      <p className='pt-2 ms-3 text-end' style={{color:'#65686E',width:'20%'}}>{attend}</p>
      <div className='d-flex ms-5 position-relative flex-grow-1'>
      <button data-bs-toggle="modal" data-bs-target="#exampleModal1"   className='btn position-absolute start-0  btn-primary ms-5 rounded-3 border-0 mt-2 my-auto' style={{backgroundColor:'#CFC67C',fontSize:'12px'}}>حذف</button>

      </div>
      
      </div>
      <Modal
        id="exampleModal1"
        icon={WrongIcon}
        message="الرجاء إضافة مشرف تدريب"
        companyName={companyData.name}
        companyStatus={companyData.status}
        companyLocation={companyData.location}
      />

      <div className="modal fade"  id="exampleModal4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg" >
    <div className="modal-content" style={{backgroundColor:'#0287A2'}}>
      <div className=" position-relative d-flex justify-content-between">
         <h1 className="modal-title  fs-5" id="exampleModalLabel" style={{color:'#0287A2'}}>{"|"}</h1> 
        <button type="button" className=" position-absolute start-0 btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className='d-flex flex-column align-items-center'>
        <div className='d-flex my-3'>
            <p className='text-white fw-bold'>{"اضافه مشرف  جديد "}</p>
          </div>

          <div className='d-flex my-3 w-75 mx-auto  '>
            <div className='ms-4 '>
            <p className='text-white'>الاسم</p>
            <div className="input-group w-100 flex-nowrap rounded-3" style={{backgroundColor:'#676767'}}>
            <span className="input-group-text bg-transparent border-0 rounded-start-3" id="addon-wrapping"><img style={{width:'70%'}} src={User} alt=''/></span>

 <input type="text" className="form-control bg-transparent border-0" placeholder="ادخل الاسم كامل" aria-label="Username" aria-describedby="addon-wrapping" />
</div>
            </div>

            <div>
            <p className='text-white'>اسم المستخدم</p>
            <div className="input-group w-100 flex-nowrap rounded-3" style={{backgroundColor:'#676767'}}>
            <span className="input-group-text bg-transparent border-0 rounded-start-3" id="addon-wrapping"><img style={{width:'70%'}} src={User} alt=''/></span>

 <input type="text" className="form-control bg-transparent border-0" placeholder="أدخل اسم المستخدم" aria-label="Username" aria-describedby="addon-wrapping" />
</div>
            </div>
          </div>

          <div className='d-flex my-3 w-75 mx-auto  '>
            <div className='ms-4 '>
            <p className='text-white'>البريد الالكترونى</p>
            <div className="input-group w-100 flex-nowrap rounded-3" style={{backgroundColor:'#676767'}}>
            <span className="input-group-text bg-transparent border-0 rounded-start-3" id="addon-wrapping"><img style={{width:'70%'}} src={Threeads} alt=''/></span>

 <input type="text" className="form-control bg-transparent border-0" placeholder="ادخل البريد الالكترونى" aria-label="Username" aria-describedby="addon-wrapping" />
</div>
            </div>

            <div>
            <p className='text-white'>رقم الجوال </p>
            <div className="input-group w-100 flex-nowrap rounded-3" style={{backgroundColor:'#676767'}}>
            <span className="input-group-text bg-transparent border-0 rounded-start-3" id="addon-wrapping"><img style={{width:'70%'}} src={Phone} alt=''/></span>

 <input type="text" className="form-control bg-transparent border-0" placeholder="أدخل رقم الجوال " aria-label="Username" aria-describedby="addon-wrapping" />
</div>
            </div>
          </div>


          <div className='d-flex my-3 w-75  '>
            <div className='ms-4 '>
            <p className='text-white'>كلمة المرور </p>
            <div className="input-group w-100 flex-nowrap rounded-3" style={{backgroundColor:'#676767'}}>
            <span className="input-group-text bg-transparent border-0 rounded-start-3" id="addon-wrapping"><img style={{width:'70%'}} src={Lock} alt=''/></span>

            <input type="text" className="form-control bg-transparent border-0" placeholder="ادخل كلمة المرور " aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            </div>

            <div className="input-group w-50  flex-nowrap my-5 rounded-3 " style={{backgroundColor:'#B0A007'}}>
            <span className="input-group-text bg-transparent border-0 text-white rounded-start-3 "data-bs-dismiss="modal" aria-label="Close" id="addon-wrapping">
            اضافه المشرف 
             <img style={{width:'40%'}} className='px-3' src={Arrow} alt=''/></span>
          </div>


          </div>




       

        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}


const Modal = ({ id, message, companyName, companyStatus, companyLocation }) => {
  return (
    <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-sm">
        <div className="modal-content">
          <div className=" position-relative d-flex justify-content-between">
          <div className="modal-header">
          <button type="button" className="position-absolute start-0 btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>

</div>
          </div>
          <div className="modal-body">
            <div className="d-flex flex-column">
              <div className="text-center my-3">
              <img className='mb-5' src={WrongIcon} alt=''/>
                 <p>{"هل أنت متأكد من هذا الاجراء"}</p>
              </div>
                <div className='d-flex justify-content-between' style={{width:'70%', margin: 'auto'}} >

                <div className="modal-">
          <button className='btn btn-primary m-auto px-4 rounded-3 border-0' data-bs-dismiss="modal" aria-label="Close" style={{ backgroundColor: '#CFC67C', fontSize: '14px' }}>{"لا"}</button>
             
</div>
      <div className="modal-">
      <button  data-bs-dismiss="modal" aria-label="Close" className='btn btn-primary m-auto px-4 rounded-3 border-0' style={{ backgroundColor: '#CFC67C', fontSize: '14px' }}>{"نعم"}</button>
             
</div>
                </div>
               </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ModeratorsComponent
