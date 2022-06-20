import { useState } from "react";
import React from "react";
import "./WorkExperience.Style.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { CVState } from "../../context/CVProvider";

function WorkExperience() {
  const { startDate, setStartDate, endDate, setEndDate, optStartDate, setOptStartDate, optEndDate, setOptEndDate, data } = CVState()
  const navigate = useNavigate();
  const { setWorkExperience } = CVState();
  const [jobTitle, setJobTitle] = useState();
  const [employer, setEmployer] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [jobDescription, setJobDescription] = useState();
  // console.log(data)

  const [optJobTitle, setOptJobTitle] = useState();
  const [optEmployer, setOptEmployer] = useState();
  const [optCity, setOptCity] = useState();
  const [optCountry, setOptCountry] = useState();
  const [optJobDescription, setOptJobDescription] = useState();

  const { register, reset, handleSubmit } = useForm();

  const handleBack = () => {
    navigate("/personal");
  };

  const onSubmit = (data) => {
    console.log(data)
    setWorkExperience(data);
    navigate("/education")
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="content">
          <h1 className="title-text">Work Experience</h1>

          <div className="work-experience-content1">
            <div className="input-wrapper">
              <label>Job Title</label>
              <input
                type="text"
                className="job-title"
                value={jobTitle}
                placeholder="Enter job title"
                {...register("jobTitle")}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>

            <div className="input-wrapper">
              <label>Employer</label>
              <input
                type="text"
                className="employer"
                value={employer}
                placeholder="Enter employer"
                {...register("employer")}
                onChange={(e) => setEmployer(e.target.value)}
              />
            </div>

            <div className="date-wrapper">
              <div className="date">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Start date"
                    value={startDate}
                    {...register("startDate")}
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
                    {...register("endDate")}
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

            <div className="location">
              <div className="input-wrapper">
                <label>City</label>
                <input
                  type="text"
                  className="city"
                  value={city}
                  placeholder="Enter city"
                  {...register("city")}
                  onChange={(e) => setCity(e.target.value)}
                  style={{ width: "18em" }}
                />
              </div>

              <div className="input-wrapper">
                <label>Region</label>
                <input
                  type="text"
                  className="country"
                  value={country}
                  placeholder="Enter country"
                  {...register("country")}
                  onChange={(e) => setCountry(e.target.value)}
                  style={{ width: "18em" }}
                />
              </div>
            </div>

            <div className="input-wrapper">
              <label>Job Description</label>
              <textarea
                type="text"
                className="job-description"
                value={jobDescription}
                {...register("jobDescription")}
                placeholder="please enter your role"
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </div>
          </div>

          <div className="work-experience-content2">
            <div className="input-wrapper">
              <label>Job Title</label>
              <input
                type="text"
                className="job-title"
                placeholder="Enter job title"
                value={optJobTitle}
                {...register("optJobTitle")}
                onChange={(e) => setOptJobTitle(e.target.value)}
              />
            </div>

            <div className="input-wrapper">
              <label>Employer</label>
              <input
                type="text"
                className="employer"
                value={optEmployer}
                placeholder="Enter employer"
                {...register("optEmployer")}
                onChange={(e) => setOptEmployer(e.target.value)}
              />
            </div>

            <div className="date-wrapper">
              <div className="date">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Start date"
                    value={optStartDate}
                    {...register("optStartDate")}
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
                    {...register("optEndDate")}
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

            <div className="location">
              <div className="input-wrapper">
                <label>City</label>
                <input
                  type="text"
                  className="city"
                  placeholder="Enter city"
                  value={optCity}
                  {...register("optCity")}
                  onChange={(e) => setOptCity(e.target.value)}
                  style={{ width: "18em" }}
                />
              </div>

              <div className="input-wrapper">
                <label>State</label>
                <input
                  type="text"
                  className="state"
                  placeholder="Enter state"
                  value={optCountry}
                  {...register("optCountry")}
                  onChange={(e) => setOptCountry(e.target.value)}
                  style={{ width: "18em" }}
                />
              </div>
            </div>

            <div className="input-wrapper">
              <label>Job Description</label>
              <textarea
                type="text"
                className="job-description"
                {...register("optJobDescription")}
                value={optJobDescription}
                placeholder="please enter your role"
                onChange={(e) => setOptJobDescription(e.target.value)}
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

export default WorkExperience;
