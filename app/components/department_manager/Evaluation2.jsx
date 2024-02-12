import React from 'react';
import { useState } from 'react';

const Evaluation2 = ({ name, deg1, deg2, attend, deg3, deg4, setTotalGrades }) => {
  const [degree1, setDegree1] = useState(deg1);
  const [degree2, setDegree2] = useState(deg2);
  const [degree3, setDegree3] = useState(deg3);
  const [degree4, setDegree4] = useState(deg4);

  // Update total grades whenever any degree is changed
  const updateTotalGrades = () => {
    setTotalGrades(prevState => ({
      degree1Total: prevState.degree1Total + parseInt(degree1),
      degree2Total: prevState.degree2Total + parseInt(degree2),
      degree3Total: prevState.degree3Total + parseInt(degree3),
      degree4Total: prevState.degree4Total + parseInt(degree4)
    }));
  };
  return (
    <div className='rounded-1 my-2' style={{ backgroundColor: '#86EAFE' }}>
      <div className='d-flex me-3 justify-content-between align-items-center'>
        <p className='pt-2 ms-3' style={{ color: '#65686E', fontSize: '13px', width: '12%' }}>{name}</p>
        <input
          type="text"
          className='pt-2 border-0 shadow-none'
          style={{ color: '#65686E',backgroundColor:'transparent', width: '15%' }}
          value={degree1}
          onChange={(e) => {setDegree1(e.target.value); updateTotalGrades();}}
        />
        <input
          type="text"
          className='pt-2 border-0 shadow-none'
          style={{ color: '#65686E',backgroundColor:'transparent', width: '15%' }}
          value={degree2}
          onChange={(e) => {setDegree2(e.target.value); updateTotalGrades();}}
        />
        <p className='pt-2 ms-3 text-end' style={{ color: '#65686E', width: '20%' }}>{attend}</p>
        <input
          type="text"
          className='pt-2 border-0 shadow-none'
          style={{ color: '#65686E',backgroundColor:'transparent', width: '15%' }}
          value={degree3}
          onChange={(e) => {setDegree3(e.target.value); updateTotalGrades();}}
        />
        <input
          type="text"
          className='pt-2 border-0 shadow-none'
          style={{ color: '#65686E',backgroundColor:'transparent', width: '15%' }}
          value={degree4}
          onChange={(e) => {setDegree4(e.target.value); updateTotalGrades();}}
        />
      </div>
    </div>
  );
};

export default Evaluation2;
