import React from 'react'
import { useNavigate } from 'react-router-dom'

const Evaluation = ({name,num,attend}) => {
    let navigate = useNavigate()
  return (
    <div className='rounded-1 my-2' style={{backgroundColor:'#86EAFE'}}>
      <div className='d-flex justify-content-between mx-5 px-3 align-items-center '>
      <p className='pt-2' style={{color:'#65686E', fontSize:'13px'}}>{name}</p>
      <p className='pt-2' style={{color:'#65686E'}}>{num}</p>
      <p className='pt-2' style={{color:'#65686E'}}>{attend}</p>
        <button onClick={()=>navigate('/TrainingPage3')} className='btn btn-primary rounded-3 border-0' style={{backgroundColor:'#CFC67C',fontSize:'12px'}}>فرص التدريب</button>
      </div>
    </div>
  )
}

export default Evaluation
