import React from 'react'

const AttendanceComponent1 = ({number ,name , count}) => {
  return (
    <div>
 <div className='d-flex mb-3  pt-3 justify-content-around rounded-3 ' style={{backgroundColor:'#86EAFE'}}>
 <p className=' ms-3 text-center' style={{color:'#65686E'}}>{number}</p>
            <p className=' text-center '  style={{color:'#65686E'}} >{name}</p>
            <p className=''  style={{color:'#65686E'}}>  {count} </p>        
      </div>
    </div>
  )
}

export default AttendanceComponent1
