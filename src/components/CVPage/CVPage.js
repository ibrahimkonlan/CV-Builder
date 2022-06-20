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

const CVPage = () => {
  const { data, workExperience, education, skills } = CVState();
  // console.log(careerObjective);
  // console.log(data);
  // console.log(workExperience);
  // console.log(startDate);
  // console.log(endDate);
  // console.log(optStartDate);
  // console.log(optEndDate);
  console.log(education);


  

  return (
    
    <div className="cv-page-component">
      <div className="left">
        <div className="details">
          <div className="profile-image">
            <img className="profile-pic" src={data.image} alt="" />
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
          <h2>Work Experience</h2>
        </div>

        <div className="work-experience">
          <WorkExperience
            jobTitle={workExperience.jobTitle}
            employer={workExperience.employer}
            jobDescription={workExperience.jobDescription}
          />
        </div>

        <div className="heading">
          <h2>Education</h2>
        </div>

        <div className="education">
          <EducationSection
            date={education.date}
            programme={education.programme}
            proDescription={education.proDescription}
          />
        </div>

        <div className="heading">
          <h2>Hobbies And Interests</h2>
        </div>
        <h6 className="interests-p">{education.interests}</h6>
      </div>

      <div className="right">
        <div className="career-objective">{data.careerObjective}</div>

        <div className="proskills-section">
          <h2>ProSkills</h2>
          <div className="skill-wrapper">
            <div className="skill-content">
              <div className="skill-name"></div>
              <div className="skill-level">

                
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default CVPage;
