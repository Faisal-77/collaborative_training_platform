
import React, { useState } from 'react'
import Link  from 'next/link'
import Book from '../../(pages)/(Users)/departmentManager/Assets/icons/Books.png'
import Date from '../../(pages)/(Users)/departmentManager/Assets/icons/Primary (2).png'
import Arrow from '../../(pages)/(Users)/departmentManager/Assets/icons/Down Arrow.png'
const CooperativeComponent = ({name,deg1, deg2,attend,deg3, deg4}) => {
  
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ name: '', id: '' });
    const [tableData, setTableData] = useState([
      { id: 1, name: 'ريان', trainingId: '٤٤٢٢٠٠٢٢٢' },
      { id: 2, name: 'ريان', trainingId: '٤٤٢٢٠٠٢٢٢' }
    ]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add new record to tableData state
      setTableData([
        ...tableData,
        { id: tableData.length + 1, name: formData.name, trainingId: formData.id }
      ]);
      // Reset form data
      setFormData({ name: '', id: '' });
      // Close the form modal
      setShowForm(false);
    };
  
  return (
    <div className='rounded-1 my-3' style={{backgroundColor:'#86EAFE'}}>
          <div className='d-flex me-5 pe-5 mx-auto'>
      <p className='pt-2  ms-3 'style={{color:'#65686E', fontSize:'13px',width:'16%'}}>{name}</p>
      <p className='pt-2' style={{color:'#65686E',width:'22%'}}>{deg1}</p>
      <p className='pt-2 ms-3 text-end' style={{color:'#65686E',width:'20%'}}>{deg2}</p>
      <button  data-bs-toggle="modal" data-bs-target="#exampleModal3"   className='btn btn-primary ms-5 rounded-3 border-0 mt-2 my-auto' style={{backgroundColor:'#CFC67C',fontSize:'12px'}}> إضافة متدربين</button>
      <button className='btn btn-primary me-5 rounded-3 border-0  mt-2 my-auto' style={{backgroundColor:'#CFC67C',fontSize:'12px'}}> عرض</button>
      
      </div>


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
            
            <p className='text-white fw-bold'>{"إنشاء شعبة جديده"}</p>
          </div>

          <div className='d-flex my-3 w-75 mx-auto  '>
            <div className='ms-4 '>
            <p className='text-white'>التخصص</p>
            <div className="input-group w-100 flex-nowrap rounded-3" style={{backgroundColor:'#676767'}}>
            <span className="input-group-text bg-transparent border-0 rounded-start-3" id="addon-wrapping"><img style={{width:'70%'}} src={Book} alt=''/></span>

 <input type="text" className="form-control bg-transparent border-0" placeholder="البحث" aria-label="Username" aria-describedby="addon-wrapping" />
</div>
            </div>

            <div>
            <p className='text-white'>الترم</p>
            <div className="input-group w-100 flex-nowrap rounded-3" style={{backgroundColor:'#676767'}}>
            <span className="input-group-text bg-transparent border-0 rounded-start-3" id="addon-wrapping"><img style={{width:'70%'}} src={Date} alt=''/></span>

 <input type="text" className="form-control bg-transparent border-0" placeholder="أدخل الترم" aria-label="Username" aria-describedby="addon-wrapping" />
</div>
            </div>
          </div>

          <div className="input-group w-25 flex-nowrap mt-5 me-auto rounded-3" style={{backgroundColor:'#B0A007'}}>
            <span className="input-group-text bg-transparent border-0 text-white rounded-start-3" id="addon-wrapping">
            إنشاء شعبة جديده <img style={{width:'70%'}} className='px-3' src={Arrow} alt=''/></span>
</div>
       

        </div>
      </div>
    </div>
  </div>
</div>
      <div className="modal fade"  id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-sm" >
    <div className="modal-content" style={{backgroundColor:'#0287A2'}}>
      <div className=" position-relative d-flex justify-content-between">
        <h1 className="modal-title  fs-5"  style={{color:'#0287A2',backgroundColor:"transparent"}} id="exampleModalLabel">{"|"}</h1>
        <button type="button" className="modal-title position-absolute start-0 btn-close ms-auto" id="exampleModalLabel" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}></th>
            <th style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>المتدرب</th>
            <th style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>الرقم التدريبي </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(row => (
            <tr key={row.id}>
              <td style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{row.id}</td>
              <td style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{row.name}</td>
              <td style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{row.trainingId}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <span className="close" onClick={() => setShowForm(false)}>&times;</span>
            <form onSubmit={handleSubmit}>
              <label>
                المتدرب:
                <input className='' type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </label>
              <label>
                الرقم التدريبي:
                <input type="text" value={formData.id} onChange={(e) => setFormData({ ...formData, id: e.target.value })} />
              </label>
              <button type="submit" className='btn m-2 btn-primary'>إضافة</button>
            </form>
          </div>
        </div>
      )}

      <button type="button" className="start-0 btn my-3 ms-auto" style={{ backgroundColor: '#ddd' }} onClick={() => setShowForm(true)}>+</button>
    </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default CooperativeComponent
