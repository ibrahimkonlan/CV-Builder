import React, {useState} from 'react'

import "./SkillsSection.Styles.css";

function SkillsSection(props) {
    // const [dots, setDots] = useState(1);
    let dots = 1;
    switch(props.level) {
        case 'Beginner':
            console.log('..........')
            dots = [0];
            break;
        case 'Intermediate':
            dots = [0, 0];
            break;
        case 'Proficient':
            dots = [0, 0, 0];
            break;
        case 'Expert':
            dots = [0, 0, 0, 0]
            break;

        default:
            dots = [0];
            break;
    }
  return (
    <div className='skills-section-component'>
        <div className='skill-wrapper'>
            {dots.map((el, i) => <div className='skill-dot' key={i}></div>)}
        </div>
         <p className='skill'>{`${props.skill} - ${props.level}`}</p>
     </div>
  )
}

export default SkillsSection