import { useState } from 'react'
import React from 'react';
import "./WorkExperience.Style.css"
import { Container } from 'react-bootstrap';

function WorkExperience() {
 const [inputList, setinputList]= useState([{jobTitle:"", employer:""}]);

 const handleinputchange=(e, index)=>{
 const {jobTitle, value}= e.targe;
 const list= [...inputList];
 list[index][jobTitle]= value;
 setinputList(list);


 }
  const handleremove= index=>{
    const list=[...inputList];
    list.splice(index,1);
    setinputList(list);
 }

const handleaddclick= ()=>{
  setinputList([...inputList, {jobTitle: "", employer:""}])
}
  return (
 <Container className="content">
  <div className="row">
  <div className="col-sm-12">
  <h5 className="mt-3 mb-4 fw-bold">Work Experience</h5>

  {
    inputList.map( (x,i)=>{
      return(
  <div className="row mb-3">
  <div class="form-group col-mb-3">
    <label>Job Title</label>
    <input  type="text" name='job title' className='form-control'  placeholder='Enter job title' onChange={e=> handleinputchange(e,i)} />
  </div>
  <div class="form-group col-mb-3">
    <label>Employer</label>
    <input  type="text" name='Employer' className='form-control'placeholder='Enter employer' onChange={e=> handleinputchange(e,i)} />
  </div>

  <div class="form-group col-mb-3">
    <label>City</label>
    <input  type="text" name='Employer' className='form-control'placeholder='Enter city' onChange={e=> handleinputchange(e,i)} />
  </div>

  <div class="form-group col-mb-3">
    <label>State</label>
    <input  type="text" name='Employer' className='form-control'placeholder='Enter state' onChange={e=> handleinputchange(e,i)} />
  </div>
  <div class='form-group col-md-2 mt-4'>
   {
    inputList.length!==1 &&
  <button className='btn btn-danger' onClick={()=> handleremove(i)}>Remove</button>
   }
   {inputList.length-1===i &&
   <button className='btn btn-success' onClick={ handleaddclick}>Add</button>
    }
  </div>
    </div>          
  
      );
    })}

  </div>
  </div>
 </Container>
  );
}

export default WorkExperience