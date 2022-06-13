import React from "react";
import "./CVPage.Style.css";
import { CVState } from "../../context/CVProvider";

const CVPage = () => {
  const { data } = CVState();
  console.log(data)
  // const details = Object.keys(data)
  //   .map((key) => data[key])
  //   .reduce((old, item) => ({ ...old, ...item }), {});

  return (
    <>
      <div className="CV-container">
        <div className="white-background">
          <div className="image-text-wrapper">
            <div className="profile-image"></div>
            <div className="details-container">
              <div className="fullname-container">
                {/* <h1 className="first-name">{details.firstName}</h1> */}
                {/* <h1 className="last-name">{details.lastName}</h1> */}
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
