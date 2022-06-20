import "./Education.Styles.css"
const EducationSection = (props) => {
  return (
    <div className="education-component">
        <div className="year">{props.date}</div>
        <div className="dot"></div>
        <div className="school">
            <h6 className="course-name">{props.programme}</h6>
            <h6 className="courses-additions">{props.proDescription}</h6>
        </div>
    </div>
  )
}

export default EducationSection