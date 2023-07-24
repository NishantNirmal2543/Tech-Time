import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contactbg from "../images/contact.webp";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_utr8mlj",
        "template_ndb95fl",
        form.current,
        "JqlvqUoSovo5rcnzX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact row">
      <div className="contact-img col-lg-6">
        <img className="contact-image" src={contactbg} alt="contact"></img>
      </div>
      <div className="contact-forms col-lg-6">
        <h1 className="heading">Contact Us</h1>
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <input
              className="input"
              type="text"
              id="user_name"
              name="user_name"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <input
              className="input"
              type="email"
              name="user_email"
              placeholder="Enter Email"
            />
          </div>

          <div className="form-group">
            <textarea
              className="input"
              name="message"
              placeholder="Enter Message"
              cols={40}
            />
          </div>

          <div className="form-group">
            <input className="button" type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};
