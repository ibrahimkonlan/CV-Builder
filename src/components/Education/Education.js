import { useState } from 'react'
import React from 'react';
import "./Education.Style.css"
import { Container } from 'react-bootstrap';

function Education() {
 const [inputList, setinputList]= useState([{institution:"", programme:""}]);

 const handleinputchange=(e, index)=>{
 const {institution, value}= e.targe;
 const list= [...inputList];
 list[index][institution]= value;
 setinputList(list);


 }
  const handleremove= index=>{
    const list=[...inputList];
    list.splice(index,1);
    setinputList(list);
 }

const handleaddclick= ()=>{
  setinputList([...inputList, {institution: "", programme:""}])
}
  return (
 <Container className="content">
  <div className="row">
  <div className="col-sm-12">
  <h5 className="mt-3 mb-4 fw-bold">Education</h5>

  {
    inputList.map( (x,i)=>{
      return(
  <div className="row mb-3">
  <div class="form-group col-mb-3">
    <label>Institution</label>
    <input  type="text" name='institution' className='form-control'  placeholder='Enter job title' onChange={e=> handleinputchange(e,i)} />
  </div>
  <div class="form-group col-mb-3">
    <label>Programme</label>
    <input  type="text" name='programme' className='form-control'placeholder='Enter employer' onChange={e=> handleinputchange(e,i)} />
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
  )
}

export default Education