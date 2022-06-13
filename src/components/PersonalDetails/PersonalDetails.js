import React, { useState } from "react";
import "./PersonalDetails.Style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const personalSchema = yup.object().shape({
  firstName: yup.string().min(4).max(25).required(),
  lastName: yup.string().min(4).max(25).required(),
  email: yup.string().email().required(),
  phone: yup.number().required(),
  currentJob: yup.string().required(),
  address: yup.string().required(),
  country: yup.string().required(),
  careerObjective: yup.string().min(100).max(250),
});

const PersonalDetails = () => {
  const navigate = useNavigate();
  
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
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
            <input type="file" />
          </div>
          <div className="details-wrapper">
            <div className="fullname">
              <div className="firstname">
                <label>First Name *</label>
                <input placeholder="First Name" {...register("firstName")} />
                {errors.firstName && <p>{errors.firstName.message}</p>}
              </div>

              <div className="lastname">
                <label>Last Name *</label>
                <input placeholder="Last Name" {...register("lastName")} />
                {errors.lastName && <p>{errors.lastName.message}</p>}
              </div>
            </div>

            <div className="email-phone-container">
              <div className="email">
                <label>Email *</label>
                <input placeholder="email" {...register("email")} />
                {errors.email && <p>{errors.email.message}</p>}
              </div>

              <div className="phone">
                <label>Phone *</label>
                <input placeholder="Phone" {...register("phone")} />
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
                />
                {errors.currentJob && <p>{errors.currentJob.message}</p>}
              </div>
            </div>

            <div className="address-country-container">
              <div className="address">
                <label>Address *</label>
                <input placeholder="address" {...register("address")} />
                {errors.address && <p>{errors.address.message}</p>}
              </div>

              <div className="country">
                <label>Country *</label>
                <input placeholder="country" {...register("country")} />
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
