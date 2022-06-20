import "./Contact.Styles.css";

import {
    AiFillPhone,
    AiOutlineMail,
    AiOutlineIdcard,
    AiOutlineEnvironment,
  } from "react-icons/ai";

const Contact = (props) => {
    return (
        <div className="contact-component">
            <div className="full-name">
            <h1><span className="first-name">{props.firstName}</span> <span className="last-name">{props.lastName}</span></h1>
            </div>
            
            <h6 className="role">{props.currentJob}</h6>

            <h6 className="contact-details"><AiFillPhone /> <span className="after-icon">{props.phone}</span></h6>
            <h6 className="contact-details"><AiOutlineMail /> <span className="after-icon">{props.email}</span></h6>
            <h6 className="contact-details"><AiOutlineIdcard /> <span className="after-icon">{props.address}</span></h6>
            <h6 className="contact-details"><AiOutlineEnvironment /><span className="after-icon">{props.country}</span></h6>
        </div>
    )
}

export default Contact;