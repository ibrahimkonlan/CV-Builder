import React, { useState } from "react";
import "./PersonalDetails.Style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { CVState } from "../../context/CVProvider";

const personalSchema = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  email: yup.string().email(),
  phone: yup.number(),
  currentJob: yup.string(),
  address: yup.string(),
  country: yup.string(),
  careerObjective: yup.string(),
});

const PersonalDetails = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [image, setImage] = useState("")
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [currentJob, setCurrentJob] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [careerObjective, setCareerObjective] = useState("");

  const {  setData } = CVState()

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalSchema),
  });

  

  const onSubmit = (data) => {
    setData(data)
    reset();
    navigate("/cvpage")
  };

  const handleBack = () => {
    navigate("/");
  };
  return (
    <>
      <div className="text-wrapper">
        <h1> Personal Details</h1>
        <h5>This information will be placed at the top of your cv.</h5>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="personal-details">
          <div className="image-upload">
            <h3>upload your image</h3>
            <input type="file" {...register("image")} onChange={(e) => {setImage(URL.createObjectURL(e.target.files[0]))}}/>
          </div>
          <div className="details-wrapper">
            <div className="fullname">
              <div className="firstname">
                <label>First Name *</label>
                <input
                  placeholder="First Name"
                  {...register("firstName")}
                  // value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                {errors.firstName && <p>{errors.firstName.message}</p>}
              </div>

              <div className="lastname">
                <label>Last Name *</label>
                <input
                  placeholder="Last Name"
                  {...register("lastName")}
                  // value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
                {errors.lastName && <p>{errors.lastName.message}</p>}
              </div>
            </div>

            <div className="email-phone-container">
              <div className="email">
                <label>Email *</label>
                <input
                  placeholder="email"
                  {...register("email")}
                  // value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>

              <div className="phone">
                <label>Phone *</label>
                <input
                  placeholder="Phone"
                  {...register("phone")}
                  // value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
                {errors.phone && <p>should contain only numbers</p>}
              </div>
            </div>

            <div className="current-job">
              <div className="job">
                <label>Current Job*</label>
                <input
                  type="text"
                  placeholder="Current Job"
                  {...register("currentJob")}
                  // value={currentJob}
                  onChange={(e) => {
                    setCurrentJob(e.target.value);
                  }}
                />
                {errors.currentJob && <p>{errors.currentJob.message}</p>}
              </div>
            </div>

            <div className="address-country-container">
              <div className="address">
                <label>Address *</label>
                <input
                  placeholder="address"
                  {...register("address")}
                  // value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
                {errors.address && <p>{errors.address.message}</p>}
              </div>

              <div className="country">
                <label>Country *</label>
                <input
                  placeholder="country"
                  {...register("country")}
                  // value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                />
                {errors.country && <p>{errors.country.message}</p>}
              </div>
            </div>

            <div className="career-objective">
              <div className="objective">
                <label>Career objective </label>
                <textarea
                  type="text"
                  placeholder="Please insert a text here"
                  {...register("careerObjective")}
                  // value={careerObjective}
                  onChange={(e) => {
                    setCareerObjective(e.target.value);
                  }}
                />

                {errors.careerObjective && (
                  <p>{errors.careerObjective.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="button-wrapper">
          <button className="back" onClick={handleBack}>
            back
          </button>
          <button className="continue">continue</button>
        </div>
      </form>
    </>
  );
};

export default PersonalDetails;
