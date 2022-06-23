import React, { createContext, useContext, useState } from "react";

const CVContext = createContext();

const CVProvider = ({ children }) => {
  const [data, setData] = useState({
    image: null,
    firstName: null,
    lastName: null,
    currentJob: null,
    address: null,
    email: null,
    country: null,
    carreerObjective: null,
    phone: null
  });

  const [workExperience, setWorkExperience] = useState({
    startDate: null,
    endDate: null,
    jobTitle: null,
    employer: null,
    country: null,
    city: null,

    optStartDate: null,
    optEndDate: null,
    optJobTitle: null,
    optEmployer: null,
    optCountry: null,
    optCity: null,
  });

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [optStartDate, setOptStartDate] = useState();
  const [optEndDate, setOptEndDate] = useState();
  const [education, setEducation] = useState({
    startDate: null,
    endDate: null,
    programme: null,
    schoolLocation: null,
    proDescription: null,

    optStartDate: null,
    optEndDate: null,
    optProgramme: null,
    optSchoolLocation: null,
    optProDescription: null,
    interests: null
  });
  
  const [skills, setSkills] = useState({
    skillOne: null,
    skillOneLevel: null,
    skillTwo: null,
    skillTwoLevel: null,
    skillThree : null,
    skillThreeLevel: null,
    skillFour: null,
    skillFourLevel: null,
  });

  return (
    <CVContext.Provider value={{ data, setData, workExperience, setWorkExperience, education, setEducation, startDate, setStartDate, endDate, setEndDate, optStartDate, setOptStartDate, optEndDate, setOptEndDate, skills, setSkills }}>
      {children}
    </CVContext.Provider>
  );
};

export const CVState = () => {
  return useContext(CVContext);
};
export default CVProvider;
