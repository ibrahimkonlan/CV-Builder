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
            <h1><span className="first-name">{props.firstName}</span> <span className="last-name">{props.lastName}</span></h1>
            <p className="role">{props.currentJob}</p>

            <p className="contact-details"><AiFillPhone /> <span className="after-icon">{props.phone}</span></p>
            <p className="contact-details"><AiOutlineMail /> <span className="after-icon">{props.email}</span></p>
            <p className="contact-details"><AiOutlineIdcard /> <span className="after-icon">{props.address}</span></p>
            <p className="contact-details"><AiOutlineEnvironment /><span className="after-icon">{props.country}</span></p>
        </div>
    )
}

export default Contact;