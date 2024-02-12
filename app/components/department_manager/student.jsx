"use client"
import React, { useEffect, useState } from 'react';
import CooperativeComponent from '../department_manager/CooperativeComponent';
import  Link from 'next/link';
import RefreshIcon from '../../(pages)/(Users)/departmentManager/Assets/icons/Refresh.png'
import HomeIcon from '../../(pages)/(Users)/departmentManager/Assets/icons/Home Page.png'
import DownArrow from '../../(pages)/(Users)/departmentManager/Assets/icons/Down Arrow.png'
import book from '../../(pages)/(Users)/departmentManager/Assets/icons/Books.png'
import primary from '../../(pages)/(Users)/departmentManager/Assets/icons/Primary (2).png'
import Image from 'next/image';
import Navbar from './Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
const Cooperative = () => {
  const initialTotalGrades = {
    degree1Total: 0,
    degree2Total: 0,
    degree3Total: 0,
    degree4Total: 0
  };

  const [totalGrades, setTotalGrades] = useState(initialTotalGrades);
  const [formData, setFormData] = useState({
    number: '',
    deg1: '',
    deg2: '',
    attend: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const [evaluationItems, setEvaluationItems] = useState([
    { number: 45219, deg1: "هندسة البرمجيات", deg2: "السادس", attend: " السادس", },
    { number: 45326, deg1: "هندسة الشبكات", deg2: "السادس", attend: " السادس", },
    { number: 45430, deg1: "أمن سيبراني", deg2: "السادس", attend: " السادس", },
    { number: 455120, deg1: "الدعم الفني", deg2: "السادس", attend: " السادس", },
    { number: 456890, deg1: "وسائط متعددة", deg2: "السادس", attend: " السادس", },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNumber = parseInt(formData.number); // Convert to number
    const newItem = {
      number: newNumber,
      deg1: formData.deg1,
      deg2: formData.deg2,
      attend: formData.attend
    };
    setEvaluationItems(prevItems => [...prevItems, newItem]);
    setFormData({
      number: '',
      deg1: '',
      deg2: '',
      attend: ''
    });
  };

  useEffect(() => {
    // Calculate total grades
    const updatedTotalGrades = evaluationItems.reduce((acc, item) => {
      acc.degree1Total += item.deg1? parseInt(item.deg1) : 0;
      acc.degree2Total += item.deg2? parseInt(item.deg2) : 0;
      acc.degree3Total += item.deg3? parseInt(item.deg3) : 0;
      acc.degree4Total += item.deg4? parseInt(item.deg4) : 0;
      return acc;
    }, { ...initialTotalGrades }); // Initialize with initialTotalGrades

    setTotalGrades(updatedTotalGrades);
  }, [evaluationItems]);

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
      {/* Navigation code */}
      <div className='w-100 p-2 position-relative bottom-0 start-0' style={{backgroundColor:"#015263"}}>
        <div className='container'>
          <div className='row w-100'>
          <div className='col-md-4'></div>
          <div className='col-md-4'></div>

            <div className='col-md-4  d-flex '>
              {/* <div className="input-group w-50 flex-nowrap rounded-3" style={{backgroundColor:'#676767'}}> */}
                <button type="button" className='btn btn-primary rounded-3 border-0 m-auto' style={{backgroundColor:'#CFC67C'}} data-bs-toggle="modal" data-bs-target="#exampleModal"> إنشاء شعبة</button>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for creating new items */}
      <div className="modal fade"  id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" style={{backgroundColor:"#015263"}}>
          <div className="modal-content" style={{backgroundColor:"#015263"}}>
          <div className="modal-header  me-auto">
  <button type="button" className="btn-close me-auto" data-bs-dismiss="modal" aria-label="Close"></button>
</div>

            <div className="modal-body" style={{width:'80%',margin:'auto'}}>

            <h5 className="mx-auto text-white mb-5 text-center">إنشاء شعبة جديدة</h5>

              <form onSubmit={handleSubmit} >
              <div className='d-flex justify-content-between'>

              <div className="mb-3">
              <label className='text-white mb-3'>التخصص</label>

            <div className='d-flex rounded-3'  style={{backgroundColor:'#7E7E7E'}} >

            <div className='d-flex align-items-center pe-2'>
  <img src={book} alt='' className='w-75' />
</div>
                <input type="text" name="deg1" value={formData.deg1} onChange={handleChange}className="border-0 shadow-none bg-transparent form-control" placeholder="التخصص" />
             
            </div>

 </div>


 <div className="mb-3">
 <label className='text-white mb-3'>الترم</label>
            <div className='d-flex rounded-3 me-3'  style={{backgroundColor:'#7E7E7E'}} >

            <div className='d-flex align-items-center pe-2'>
  <img src={primary}  className='w-75' alt='' />
</div>
            <input type="text" name="deg2" value={formData.deg2} onChange={handleChange} style={{backgroundColor:'#7E7E7E'}} className="border-0 shadow-none form-control" placeholder="الترم" />
             
            </div>

 </div>

             

              
              </div>
              <div className="mb-3">
                  {/* <label className='text-white mb-3'>التخصص</label> */}
                  
                  <input type="text" name="number" value={formData.number} onChange={handleChange} style={{backgroundColor:'#7E7E7E'}} className="border-0 shadow-none form-control" placeholder="رقم الشعبة" />
                </div>

            
             <div className='me-auto text-start '>
             <button type="submit" className="btn btn-primary text-white   text-dark" style={{backgroundColor:'#B0A007'}}> إنشاء شعبة جديده <img src={DownArrow} alt=''/></button>
            
             </div>
                  </form>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='container mt-3 pb-3  rounded-2' style={{ backgroundColor: '#0287A2' }}>
          <div className='d-flex me-5 pe-5 pt-3 m-auto justify-content-between align-items-center'>
            <p className='text-white fw-bold ms-3' style={{ width: '25%' }}>رقم الشعبة</p>
            <p className='text-white fw-bold' style={{ width: '25%' }}> التخصص </p>
            <p className='text-white fw-bold' style={{ width: '25%' }}> الترم </p>
            <p className='text-white fw-bold' style={{ width: '25%' }}> إضافة متدربين </p>
            <p className='text-white fw-bold ms-3' style={{ width: '25%' }}>عرض </p>
          </div>
          <div className='m-auto bg-white' style={{ height: '1px', width: '85%' }}></div>
          <div style={{ width: '92%' }} className='mt-4 m-auto'>
            {evaluationItems.map((item, index) => (
              <CooperativeComponent
                key={index}
                name={item.number}
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

export default Cooperative;
