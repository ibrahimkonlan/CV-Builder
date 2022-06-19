import "./Education.Styles.css"
const EducationSection = (props) => {
  return (
    <div className="education-component">
        <div className="year">{props.date}</div>
        <div className="dot"></div>
        <div className="school">
            <p className="course-name">{props.programme}</p>
            <p className="courses-additions">{props.proDescription}</p>
        </div>
    </div>
  )
}

export default EducationSection