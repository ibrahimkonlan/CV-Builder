import "./WorkExperience.Styles.css";

const WorkExperience = (props) => {
    return (
        <div className="work-experience-component">
            <div className="year">{props.year}</div>
            <div className="dot"></div>
            <div className="work">
                <p className="work-title">{props.jobTitle}</p>
                <p className="work-place">{props.employer}</p>
                <p className="work-description">{props.jobDescription}</p>
            </div>
        </div>
    )
}

export default WorkExperience;