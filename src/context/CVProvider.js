import React, { createContext, useContext, useState } from "react";

const CVContext = createContext();

const CVProvider = ({ children }) => {
  const [data, setData] = useState();
  const [workExperience, setWorkExperience] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [optStartDate, setOptStartDate] = useState();
  const [optEndDate, setOptEndDate] = useState();


  return (
    <CVContext.Provider value={{ data, setData, workExperience, setWorkExperience, startDate, setStartDate, endDate, setEndDate, optStartDate, setOptStartDate, optEndDate, setOptEndDate }}>
      {children}
    </CVContext.Provider>
  );
};

export const CVState = () => {
  return useContext(CVContext);
};
export default CVProvider;
