import { useState } from "react";
import "./Skills.Style.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CVState } from "../../context/CVProvider";
// import TextField from "@mui/material/TextField";

const Skills = () => {
  const { setSkills } = CVState();
  const [proSkills, setProSkills] = useState();
  const [personaSkills, setpersonalskills] = useState();
  const [FollowMe, setFollowMe] = useState();

  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    setSkills(data)
    console.log(data);
    navigate("/cvpage");
    reset();
  };

  const handleBack = () => {
    navigate("/personal");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="content">
          <h1 className="title-text">Skills</h1>

          <div className="proskills-wrapper">
            <label>ProSkills</label>
            <div className="proskills-container">
              <div className="proskill">
                <input
                  className="skill"
                  {...register("skillOne")}
                  placeholder="react"
                />
                <select className="skill-level" {...register("skillOnelevel")}>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>
            </div>
            <div className="proskills-container">
              <div className="proskill">
                <input
                  className="skill"
                  {...register("skillTwo")}
                  placeholder="react"
                />
                <select className="skill-level" {...register("skillTwolevel")}>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>
            </div>

            <div className="proskills-container">
              <div className="proskill">
                <input
                  className="skill"
                  {...register("skillThree")}
                  placeholder="react"
                />
                <select className="skill-level" {...register("skillThreelevel")}>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>
            </div>

            <div className="proskills-container">
              <div className="proskill">
                <input
                  className="skill"
                  {...register("skillFour")}
                  placeholder="react"
                />
                <select className="skill-level" {...register("skillFourlevel")}>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>
            </div>
          
          </div>

          <div className="personal-wrapper">
            <label>Personal Skills</label>
            <textarea
              type="text"
              className="personal-skills"
              {...register("PersonalSkills")}
              value={personaSkills}
              placeholder="Enter personal skills"
              onChange={(e) => setpersonalskills(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label>Follow Me</label>
            <textarea
              type="text"
              className="personal-skills"
              {...register("FollowMe")}
              value={FollowMe}
              placeholder="Follow here"
              onChange={(e) => setFollowMe(e.target.value)}
            />
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

export default Skills;
