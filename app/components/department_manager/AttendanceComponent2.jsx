import React, { useState } from 'react';
import doneIcon from '../Assets/icons/check-circle-fill (1).png';
import failIcon from '../Assets/icons/x-circle-fill.png'
import waitIcon from '../Assets/icons/dash-circle-fill.png'

const AttendanceComponent2 = ({ day1, day2, day3, day4, day5, day6, day7 }) => {
  const [icons, setIcons] = useState({
    day1: day1,
    day2: day2,
    day3: day3,
    day4: day4,
    day5: day5,
    day6: day6,
    day7: day7
  });

  const handleIconChange = (day) => {
    // Here you can change the icon based on the current icon
    switch (icons[day]) {
      case doneIcon:
        setIcons({ ...icons, [day]: failIcon });
        break;
      case failIcon:
        setIcons({ ...icons, [day]: waitIcon });
        break;
      case waitIcon:
        setIcons({ ...icons, [day]: doneIcon });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className='mb-3'>
        <div className='d-flex me-5 pe-5 pt-2 justify-content-between rounded-3 ' style={{ backgroundColor: '#86EAFE' }}>
          <p className='text-center' onClick={() => handleIconChange('day1')} style={{ color: '#65686E' }}><img src={icons.day1} alt='' /></p>
          <p className='text-center' onClick={() => handleIconChange('day2')} style={{ color: '#65686E' }}><img src={icons.day2} alt='' /></p>
          <p className='text-center' onClick={() => handleIconChange('day3')} style={{ color: '#65686E' }}><img src={icons.day3} alt='' /></p>
          <p className='text-center' onClick={() => handleIconChange('day4')} style={{ color: '#65686E' }}><img src={icons.day4} alt='' /></p>
          <p className='text-center' onClick={() => handleIconChange('day5')} style={{ color: '#65686E' }}><img src={icons.day5} alt='' /></p>
          <p className='text-center' onClick={() => handleIconChange('day6')} style={{ color: '#65686E' }}><img src={icons.day6} alt='' /></p>
          <p className='ms-3 text-center' onClick={() => handleIconChange('day7')} style={{ color: '#65686E' }}><img src={icons.day7} alt='' /></p>
        </div>
      </div>
    </div>
  );
};

export default AttendanceComponent2;
