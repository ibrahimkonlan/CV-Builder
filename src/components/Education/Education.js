import { useState } from "react";
import "./Education.Style.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { CVState } from "../../context/CVProvider";


const Education = () => {
  const { startDate, setStartDate, endDate, setEndDate, optStartDate, setOptStartDate, optEndDate, setOptEndDate, education, setEducation } = CVState()
  const [programme, setProgramme] = useState();
  const [schoolLocation, setSchoolLocation] = useState();
  // const [degree, setDegree] = useState();
  // const [fieldOfStudy, setFieldOfStudy] = useState();
  const [proDescription, setProDescription] = useState();


  const [optProgramme, setOptProgramme] = useState();
  const [optSchoolLocation, setOpSchoolLocation] = useState();
  // const [optDegree, setOptDegree] = useState();
  // const [optFieldOfStudy, setOptFieldOfStudy] = useState();
  const [optProDescription, setOptProDescription] = useState();
  const [interests, setInterests] = useState();


  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    setEducation(data);
   navigate("/skills")
    reset()
  };
  
  const handleBack = () => {
    navigate("/work");
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="content"> 
        <h1 className="title-text">Education</h1>

        <div className="programme-content1">
        <div className="input-wrapper">
        <label>Programme</label>
          <input
            type="text"
             className="school-name"
              value={programme}
             placeholder="Enter programme"
             {...register("programme")}
             onChange={(e) => setProgramme(e.target.value)} 
          />
          </div>

          <div className="input-wrapper">
              <label>School Location</label>
          <input
          type="text"
          className="School Location"
          value={schoolLocation}
          placeholder="Enter School Location"
          {...register("school location")}
          onChange={(e) => setSchoolLocation(e.target.value)}
        />
      </div>

      <div className="date-wrapper">
              <div className="date">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Start date"
                    value={startDate}
                    onChange={(newValue) => {
                      setStartDate(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ width: "18em" }} />
                    )}
                  />
                </LocalizationProvider>
              </div>

              <div className="date">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="End date"
                    value={endDate}
                    onChange={(newValue) => {
                      setEndDate(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ width: "18em" }} />
                    )}
                  />
                </LocalizationProvider>
              </div>
            </div>

            {/* <div className="degree">
              <div className="input-wrapper">
                <label>Degree</label>
                <input
                  type="text"
                  className="degree"
                  value={degree}
                  placeholder="Enter degree"
                  {...register("degree")}
                  onChange={(e) => setDegree(e.target.value)}
                  style={{ width: "18em" }}
                />
              </div> */}

              {/* <div className="input-wrapper">
                <label>Field of Study</label>
                <input
                  type="text"
                  className="field-of-study"
                  value={fieldOfStudy}
                  placeholder="Enter field of study"
                  {...register("fieldOfStudy")}
                  onChange={(e) => setFieldOfStudy(e.target.value)}
                  style={{ width: "18em" }}
                />
              </div> */}

              <div className="input-wrapper">
              <label>Programme Description</label>
              <textarea
                type="text"
                className="pro-description"
                value={proDescription}
                {...register("proDescription")}
                placeholder="Enter programme description"
                onChange={(e) => setProDescription(e.target.value)}
              />
            </div>
            </div>
        
        <div className="programme-content2">
        <div className="input-wrapper">
              <label>Programme</label>
              <input
                type="text"
                className="programme"
                placeholder="Add programme"
                value={optProgramme}
                {...register("optProgramme")}
                onChange={(e) => setOptProgramme(e.target.value)}
              />
            </div>

            <div className="input-wrapper">
              <label>School Location</label>
              <input
                type="text"
                className="school-location"
                value={optSchoolLocation}
                placeholder="Add school location"
                {...register("optShoolLocation")}
                onChange={(e) => setOpSchoolLocation(e.target.value)}
              />
            </div>

            <div className="date-wrapper">
              <div className="date">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Start date"
                    value={optStartDate}
                    onChange={(newValue) => {
                      setOptStartDate(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ width: "18em" }} />
                    )}
                  />
                </LocalizationProvider>
              </div>

              <div className="date">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="End date"
                    value={optEndDate}
                    onChange={(newValue) => {
                      setOptEndDate(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ width: "18em" }} />
                    )}
                  />
                </LocalizationProvider>
              </div>
            </div>

            {/* <div className="edu-degree">
              <div className="input-wrapper">
                <label>Degree</label>
                <input
                  type="text"
                  className="degree"
                  value={optDegree}
                  placeholder="Enter degree"
                  {...register("optDegree")}
                  onChange={(e) => setOptDegree(e.target.value)}
                  style={{ width: "18em" }}
                />
              </div> */}

              {/* <div className="input-wrapper">
                <label>Field of Study</label>
                <input
                  type="text"
                  className="degree"
                  value={optFieldOfStudy}
                  placeholder="Enter field of study"
                  {...register("optfieldOfStudy")}
                  onChange={(e) => setOptFieldOfStudy(e.target.value)}
                  style={{ width: "18em" }}
                />
              </div> */}

              <div className="input-wrapper">
              <label>Programme Description</label>
              <textarea
                type="text"
                className="pro-description"
                {...register("optProDescription")}
                value={optProDescription}
                placeholder="Add programme description"
                onChange={(e) => setOptProDescription(e.target.value)}
              />

              <label className="interests">Interests</label>
              <textarea
                type="text"
                className="pro-description"
                {...register("interests")}
                value={interests}
                placeholder="Enter your interests"
                onChange={(e) => setInterests(e.target.value)}
              />
            </div>
           </div>
            
            <div className="button-wrapper">
            <button className="back" onClick={handleBack}>
              back
            </button>
            <button className="continue">continue</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Education;
