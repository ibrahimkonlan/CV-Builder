import React from "react";
import "./CVPage.Style.css";
import { CVState } from "../../context/CVProvider";
import {
  AiFillPhone,
  AiOutlineMail,
  AiFillIdcard,
  AiFillEnvironment,
} from "react-icons/ai";

const CVPage = () => {
  const { data } = CVState();

  

  return (
    <>
      <div className="CV-container">
        <div className="white-background">
          <div className="image-text-wrapper">
            <div className="profile-image">
              <div className="image-container">
                <img className="profile-pic" src={data.image} alt="" />
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
        </div>
        <div className="purple-background"></div>
      </div>
    </>
  );
};

export default CVPage;
