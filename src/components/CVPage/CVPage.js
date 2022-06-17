import React from "react";
import "./CVPage.Style.css";
import { CVState } from "../../context/CVProvider";
import {
  AiFillPhone,
  AiOutlineMail,
  AiFillIdcard,
  AiFillEnvironment,
} from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { MdLocalPlay } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";
import { CgShapeCircle } from "react-icons/cg";
import Education from "../Education/Education";

const CVPage = () => {
  const { data, workExperience, careerObjective, startDate, endDate, optStartDate, optEndDate } = CVState();
  console.log(data);
  console.log(workExperience);
  console.log(startDate);
  console.log(endDate);
  console.log(optStartDate);
  console.log(optEndDate);

  return (
    <>
      <div className="CV-container">
        <div className="white-background">
          <div className="image-text-wrapper">
            <div className="profile-image">
              <div className="image-container">
                {/* <img className="profile-pic" src={data.image} alt="" /> */}
              </div>
            </div>
            <div className="details-container">
              <div className="fullname-container">
                <h1 className="first-name">{data.firstName}</h1>
                <h5 className="last-name">{data.lastName}</h5>
              </div>

              <div className="current-work">
                <h5 className="work">{data.currentJob.toUpperCase()}</h5>
              </div>
              <div className="contact-details">
                <div className="sub-detail">
                  <AiFillPhone />
                  <h5 className="mobile">{data.phone}</h5>
                </div>
                <div className="email-detail">
                  <AiOutlineMail />
                  <h5 className="contact-email">{data.email}</h5>
                </div>
                <div className="details-address">
                  <div className="detail">
                    <AiFillIdcard />
                    <h5 className="sub-address">{data.address}</h5>
                  </div>
                  <div className="country-map">
                    <AiFillEnvironment />
                    <h5 className="country-code">{data.country}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="work-experience-wrapper">
            <div className="title">
              <div className="icon">
                <MdWork style={{ color: "white" }} />
              </div>

              <h3>WORK EXPERIENCE</h3>
            </div>

            <div className="work-info">
              <div className="work-details">
                <div className="work-date">startDate </div>
                <CgShapeCircle style={{ color: "#9a7dd9" }}/>
                <h2 className="position">{workExperience.jobTitle}</h2>
              </div>

              <div className="employer-count-wrapper">
                <div className="employer">{workExperience.employer},</div>
                <div className="state">{workExperience.city}       -</div>
                <div className="country">{workExperience.country}</div>
              </div>
              <div className="work-desc">{workExperience.jobDescription}</div>
            </div>

            <div className="work-info">
              <div className="work-details">
                <div className="work-date">startDate </div>
                <CgShapeCircle style={{ color: "#9a7dd9" }}/>
                <h2 className="position">{workExperience.optJobTitle}</h2>
              </div>

              <div className="employer-count-wrapper">
                <div className="employer">{workExperience.optEmployer},</div>
                <div className="state">{workExperience.optCity}       -</div>
                <div className="country">{workExperience.optCountry}</div>
              </div>
              <div className="work-desc">{workExperience.optJobDescription}</div>
            </div>
          </div>

          <div className="education-wrapper">
            <div className="edu-title">
              <div className="icon">
                <GiGraduateCap style={{ color: "white" }} />
              </div>

              <h3>EDUCATION</h3>
            </div>

            <div className="edu-info">
            <div className="edu-details">
            <div className="work-date">startDate </div>
            <CgShapeCircle style={{ color: "#9a7dd9" }}/>
            <h2 className="programme">{Education.optProgramme}</h2>
            </div>
            <div className="edu">{Education.ProDescription}</div>
            </div>
          </div>

          <div className="hobbies-wrapper">
            <div className="hobby-title">
              <div className="icon">
                <MdLocalPlay style={{ color: "white" }} />
              </div>

              <h3>HOBBIES AND INTERESTS</h3>
            </div>
          </div>
        </div>
        <div className="purple-background">
          <div className="career-obj">
            <FaQuoteLeft
              size={25}
              style={{ color: "white", marginLeft: "2em" }}
            />
            <div className="career-text"></div>
            {/* <p className="career-obj">{careerObjective.careerObjDisc}</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CVPage;
