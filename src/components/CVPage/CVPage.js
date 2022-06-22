import React from "react";
import "./CVPage.Style.css";
import { CVState } from "../../context/CVProvider";

// import {
//   AiFillPhone,
//   AiOutlineMail,
//   AiFillIdcard,
//   AiFillEnvironment,
// } from "react-icons/ai";
// import { MdWork } from "react-icons/md";
// import { GiGraduateCap } from "react-icons/gi";
// import { MdLocalPlay } from "react-icons/md";
// import { FaQuoteLeft } from "react-icons/fa";
// import { CgShapeCircle } from "react-icons/cg";
// import Education from "../Education/Education";
import Contact from "./Contact";
import WorkExperience from "./WorkExperience";
import EducationSection from "./EducationSection";
import SkillsSection from "./SkillsSection";
import Printer from "../Printer/Printer";

const CVPage = () => {
  const { data, workExperience, education, skills } = CVState();
  // console.log(careerObjective);
  // console.log(data);
  // console.log(workExperience);
  // console.log(startDate);
  // console.log(endDate);
  // console.log(optStartDate);
  // console.log(optEndDate);
  console.log(data);


  

  return (
    
    <div className="cv-page-component">
      <div className="left">
        <div className="details">
         <div className="profile-image">
         {data.image &&<img className="profile-pic" src={data.image} alt="" />}
          </div>
          <div className="profile-details">
            <Contact
              firstName={data.firstName}
              lastName={data.lastName}
              currentJob={data.currentJob}
              phone={data.phone}
              email={data.email}
              address={data.address}
              country={data.country}
            />
          </div>
        </div>

        {(workExperience.jobTitle || workExperience.optJobTitle) && <div className="heading">
          <h5>Work Experience</h5>
        </div>}

        <div className="work-experience">
          {workExperience.jobTitle && <WorkExperience
            year={`${workExperience.startDate} - ${workExperience.endDate}`}
            jobTitle={workExperience.jobTitle}
            employer={workExperience.employer}
            jobDescription={workExperience.jobDescription}
          />}
          {workExperience.optJobTitle &&<WorkExperience 
            year={`${workExperience.optStartDate} - ${workExperience.optEndDate}`}
            jobTitle={workExperience.optJobTitle}
            employer={workExperience.optEmployer}
            jobDescription={workExperience.optJobDescription}
          />}
        </div>

        {(education.programme || education.optProgramme) && <div className="heading">
          <h5>Education</h5>
        </div>}

        <div className="education">
          {education.programme  &&<EducationSection
             year={`${education.startDate} - ${education.endDate}`}
            programme={education.programme}
            proDescription={education.proDescription}
          />}
          {education.optProgramme &&<EducationSection
          year={`${education.startDate} - ${education.optEndDate}`}
          programme={education.optProgramme}
          proDescription={education.optProDescription}
            />}
        </div>

        {education.interests &&<div className="heading">
          <h5>Hobbies And Interests</h5>
          <p className="interests-p">{education.interests}</p>
        </div>}
      </div>

      <div className="right">
        { data.careerObjective && <div className="career-objective">{data.careerObjective}</div>}

        {(skills.skillOne ||skills.skillTwo || skills.skillThree || skills.skillFour) &&<div className="left-heading">
          <h2>ProSkills</h2>
        </div>}

        <div className="proskills-section">
          {skills.skillOne &&<SkillsSection
            skill={skills.skillOne} 
            level={skills.skillOnelevel} 
          />}
          {skills.skillTwo && <SkillsSection
            skill={skills.skillTwo} 
            level={skills.skillTwolevel} 
          />}
          {skills.skillThree && <SkillsSection
            skill={skills.skillThree} 
            level={skills.skillThreelevel} 
          />}
          {skills.skillFour && <SkillsSection
            skill={skills.skillFour} 
            level={skills.skillFourlevel} 
          />}
        </div>

        {skills.personalSkills && <div className="personal">
          <h2>Personal Skills</h2>
        { <p className="personal-p">{skills.personalSkills}</p>}
        </div>}
      </div>
      
      {/* <div className="buttons">
      <Printer
       trigger={() => <button className="share-print"> Print/Download </button>}
       content={() => data.current}
       documentTitle={`${data.name}`}
      />
      </div> */}
    </div>
  );
};

export default CVPage;
