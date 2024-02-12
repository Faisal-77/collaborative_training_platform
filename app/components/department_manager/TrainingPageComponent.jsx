import React from 'react'
import DeleteIcon from '/app/(pages)/(Users)/departmentManager/Assets/icons/trash3-fill.png'
import WrongIcon from '/app/(pages)/(Users)/departmentManager/Assets/icons/exclamation-circle-fill.png';


const TrainingPageComponent = ({text , btn1,btn2,del}) => {
  if(btn2 !=="إنتهاء التدريب"){
    del="";
  }
  return (
<div   className='rounded-4 bg-danger position-relative overflow-hidden bg-white dark:bg-dark-10 h-100' style={{ width: '250px', boxShadow: '0  0 10px rgba(0, 0, 0, 0.5)' }}>
    
    
      <div data-bs-toggle="modal" data-bs-target="#exampleModal3"  className='bg-white text-center rounded-top-3'>
            <p className='pt-2 px-2'>{text}</p>
      </div>
      <div data-bs-toggle="modal" data-bs-target="#exampleModal3"  className='d-flex flex-column  m-auto rounded-bottom-3 h-100'   style={{backgroundColor:'#A3D09D'}}>
      <button  className='btn btn-primary  mb-3 mt-3 w-75 m-auto rounded-3 border-0'data-bs-toggle="modal" data-bs-target="#exampleModal2"  style={{backgroundColor:'#CFC67C' ,fontSize:'14px'}}>{btn1}</button>
     <div className='d-flex align-items-center'>
        <button className='btn btn-primary mb-3 mt-3 w-75 m-auto rounded-3 border-0' style={{backgroundColor:'#CFC67C',fontSize:'14px'}}>{btn2}</button>
      {del && <div   data-bs-toggle="modal" data-bs-target="#exampleModal1" className='' style={{cursor: 'pointer' ,position:'', bottom:'15px',left:'5px'}}><img className='w-75' src={DeleteIcon} alt=''/></div>}

     </div>
    
        
      </div>
     

        <Modal
        id="exampleModal1"
        icon={WrongIcon}
        message="الرجاء إضافة مشرف تدريب"
     
      />
    </div>
  )
}

const Modal = ({ id, message, companyName, companyStatus, companyLocation }) => {
  return (
<div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
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

  );
};

export default TrainingPageComponent
