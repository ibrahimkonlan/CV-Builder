import { useState } from "react";
import React from 'react'
import "./Skills.Style.css"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import TextField from "@mui/material/TextField";

const Skills = () => {
  const [proSkills, setProproSkills] = useState();
  const [personaSkills, setpersonalskills] = useState();
  // const [proDescription, setProDescription] = useState();


  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
   navigate("/cvpage")
    reset()
  };
  
  const handleBack = () => {
    navigate("/personal");
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="content"> 
        <h1 className="title-text">Skills</h1>

       

              <div className="input-wrapper">
              <label>ProSkills</label>
              <textarea
                type="text"
                className="pro-skills"
                value={proSkills}
                {...register("proSkills")}
                placeholder="Enter proSkills"
                onChange={(e) => setProproSkills(e.target.value)}
              />
            </div>
            
              <div className="input-wrapper">
              <label>Personal Skills</label>
              <textarea
                type="text"
                className="personal-skills"
                {...register("PersonalSkills")}
                value={personaSkills}
                placeholder="Enter personal skills"
                onChange={(e) => setpersonalskills(e.target.value)}
              />
            </div>
           </div>
            
            <div className="button-wrapper">
            <button className="back" onClick={handleBack}>
              back
            </button>
            <button className="continue">continue</button>
        
        </div>
      </form>
    </>
  );
}

export default Skills