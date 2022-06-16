import { useState } from "react";
import React from "react";
import "./WorkExperience.Style.css";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Container } from "react-bootstrap";

function WorkExperience() {
  const [inputList, setinputList] = useState([{ jobTitle: "", employer: "" }]);
  const { handleSubmit } = useForm();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [check, setCheck] = useState(true);

  const handleinputchange = (e, index) => {
    const { jobTitle, value } = e.targe;
    const list = [...inputList];
    list[index][jobTitle] = value;
    setinputList(list);
  };
  const handleremove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
  };

  const handleaddclick = () => {
    setinputList([...inputList, { jobTitle: "", employer: "" }]);
  };

  const handleCheck = (e) => {
    setCheck(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Container className="content">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="mt-3 mb-4 fw-bold">Work Experience</h1>

              {inputList.map((x, i) => {
                return (
                  <div className="row mb-3">
                    <div className="col-mb-3">
                      <label>Job Title</label>
                      <input
                        type="text"
                        name="job title"
                        className="form-control"
                        placeholder="Enter job title"
                        onChange={(e) => handleinputchange(e, i)}
                      />
                    </div>
                    <div className="col-mb-3">
                      <label>Employer</label>
                      <input
                        type="text"
                        name="Employer"
                        className="form-control"
                        placeholder="Enter employer"
                        onChange={(e) => handleinputchange(e, i)}
                      />
                    </div>
                    <div className="col-mb-1">
                      <div className="date">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DatePicker
                            label="Start date"
                            value={startDate}
                            onChange={(newValue) => {
                              setStartDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
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
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </div>
                    </div>

                    <div className="check">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox value={check} onClick={handleCheck} />
                          }
                          label="Currently works here"
                        />
                      </FormGroup>
                    </div>

                    <div className="col-mb-3">
                      <label>City</label>
                      <input
                        type="text"
                        name="Employer"
                        className="form-control"
                        placeholder="Enter city"
                        onChange={(e) => handleinputchange(e, i)}
                      />
                    </div>

                    <div className="col-mb-3">
                      <label>State</label>
                      <input
                        type="text"
                        name="Employer"
                        className="form-control"
                        placeholder="Enter state"
                        onChange={(e) => handleinputchange(e, i)}
                      />
                    </div>
                    <div className=" col-md-2">
                      {inputList.length !== 1 && (
                        <button
                          className="btn btn-danger"
                          onClick={() => handleremove(i)}
                        >
                          Remove
                        </button>
                      )}
                      {inputList.length - 1 === i && (
                        <button
                          className="btn btn-success"
                          onClick={handleaddclick}
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>

        <input type="submit" />
      </form>
    </>
  );
}

export default WorkExperience;
