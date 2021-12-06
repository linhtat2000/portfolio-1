import React, { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";

import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import "./contact.css";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ewb244t",
        "template_zn7rrws",
        formRef.current,
        "user_gx20gqVa47JHmhaGxjb5h"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your ideas</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="contact methods" className="c-icon" />
              +84 132 451 145
            </div>
            <div className="c-info-item">
              <img src={Email} alt="contact methods" className="c-icon" />
              contact@itsjames.dev
            </div>
            <div className="c-info-item">
              <img src={Address} alt="contact methods" className="c-icon" />
              245 King Street, Touterie Victoria 8520 Australia
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Lorem, ipsum dolor sit amet consectetur?</b> Adipisicing elit
            officia ab asperiores impedit.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                color: darkMode ? "#fff" : "#ccc",
                backgroundColor: darkMode ? "#555" : "",
              }}
              type="text"
              placeholder="Your name"
              name="user_name"
            />
            <input
              style={{
                color: darkMode ? "#fff" : "#ccc",
                backgroundColor: darkMode ? "#555" : "",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{
                color: darkMode ? "#fff" : "#ccc",
                backgroundColor: darkMode ? "#555" : "",
              }}
              type="email"
              placeholder="Your email"
              name="user_email"
            />
            <textarea
              style={{
                color: darkMode ? "#fff" : "#ccc",
                backgroundColor: darkMode ? "#555" : "",
              }}
              rows="5"
              placeholder="Leave us a message!"
              name="message"
            />
            <button>Send Message</button>
            {done &&
              "Your message has been sent! Thanks for get in touch with me"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
