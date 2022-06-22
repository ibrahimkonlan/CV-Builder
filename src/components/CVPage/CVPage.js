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

const CVPage = () => {
  const { data, workExperience, education, skills } = CVState();
  // console.log(careerObjective);
  // console.log(data);
  // console.log(workExperience);
  // console.log(startDate);
  // console.log(endDate);
  // console.log(optStartDate);
  // console.log(optEndDate);
  console.log(skills);


  

  return (
    
    <div className="cv-page-component">
      <div className="left">
        <div className="details">
          <div className="profile-image">
            {data.image && <img className="profile-pic" src={data.image} alt="" />}
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

        <div className="heading">
          <h5>Work Experience</h5>
        </div>

        <div className="work-experience">
          <WorkExperience
            year={`${workExperience.startDate} - ${workExperience.endDate}`}
            jobTitle={workExperience.jobTitle}
            employer={workExperience.employer}
            jobDescription={workExperience.jobDescription}
          />
          <WorkExperience 
            year={`${workExperience.optStartDate} - ${workExperience.optEndDate}`}
            jobTitle={workExperience.optJobTitle}
            employer={workExperience.optEmployer}
            jobDescription={workExperience.optJobDescription}
          />
        </div>

        <div className="heading">
          <h5>Education</h5>
        </div>

        <div className="education">
          <EducationSection
            date={education.date}
            programme={education.programme}
            proDescription={education.proDescription}
          />
        </div>

        <div className="heading">
          <h5>Hobbies And Interests</h5>
        </div>
        <p className="interests-p">{education.interests}</p>
      </div>

      <div className="right">
        <div className="career-objective">{data.careerObjective}</div>

        <div className="left-heading">
          <h2>ProSkills</h2>
        </div>

        <div className="proskills-section">
          <SkillsSection
            skill={skills.skillOne} 
            level={skills.skillOnelevel} 
          />
          <SkillsSection
            skill={skills.skillTwo} 
            level={skills.skillTwolevel} 
          />
          <SkillsSection
            skill={skills.skillThree} 
            level={skills.skillThreelevel} 
          />
          <SkillsSection
            skill={skills.skillFour} 
            level={skills.skillFourlevel} 
          />
        </div>

        <div className="personal">
          <h2>Personal Skills</h2>
        </div>
        <p className="personal-p">{skills.personalSkills}</p>
      </div>
    </div>
  );
};

export default CVPage;
