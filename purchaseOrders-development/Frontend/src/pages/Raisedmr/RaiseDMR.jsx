import axios from 'axios';
import React, { useState } from 'react';
import DMRinputs from './DMRinputs';

const RaiseDMR = () => {
  const [dmrdetail, setDmrdetail] = useState(false);
  const [id,setid]=useState('')
  const [detail,setdetails]=useState()
  const handlesubmit=(e)=>{
    e.preventDefault();
    axios.get(`http://localhost:9000/getdetails/${id}`).then((d)=>{
      setdetails(d.data)
      
      setDmrdetail(true)
    })
  } 
  return (
    <div className='container border mt-3'>
      <div className='row m-3 d-flex justify-content-center align-items-center'>
        <div className='col-md-8'>
          <div className='search'>
            <i className='fa fa-search' />
            <input
              type='text'
              className='form-control'
              placeholder='Enter PO number here.'
              value={id}
              onChange={(e)=>{setid(e.target.value)}}

            />
            <button
              className='btn btn-light'
              onClick={handlesubmit}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {dmrdetail ? <DMRinputs details={detail} /> : <></>}
    </div>
  );
};

export default RaiseDMR;
