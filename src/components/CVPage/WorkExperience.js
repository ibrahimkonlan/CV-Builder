import "./WorkExperience.Styles.css";

const WorkExperience = (props) => {
    return (
        <div className="work-experience-component">
            <div className="year">{props.year}</div>
            <div className="dot"></div>
            <div className="work">
                <h6 className="work-title">{props.jobTitle}</h6>
                <h6 className="work-place">{props.employer}</h6>
                <h6 className="work-description">{props.jobDescription}</h6>
            </div>
        </div>
    )
}

export default WorkExperience;