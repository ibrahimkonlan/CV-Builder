import React from 'react'

const WorkExperience = () => {
  return (
    <>
    <div>
      <h2>Work Experience</h2>
      <h6>What's your most recent work experience?</h6>
      </div>
      <form className="Work Experience" autoComplete="off">
        <div className='form-filed'>
          <label htmlFor="position">position</label>
          <div className="position">
           <div className="first-division">
            <input name="position" type="text" id="position" required />
            <button type="button" className="add-btn">
              <span>Add a position</span>
            </button>
           </div>
           <div className="second-division">
            <button type="button" className="remove-btn">
              <span>remove</span>
            </button>
           </div>
        </div>
        </div>
        <div className="output">
          <h2>Output</h2>
        </div>
      </form>
    </>
  )
}

export default WorkExperience