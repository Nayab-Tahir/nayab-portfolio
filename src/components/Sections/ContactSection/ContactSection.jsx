import Section from "../../../UI/Section/Section";
import SectionHead from "../../../UI/Section/SectionHead";
import Button from "../../../UI/Button";
import "./ContactSection.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const params = { from_name: name, from_email: email, message: message };
    if (email && name && message) {
      console.log(email, name, message)
      emailjs
        .send("service_ytypvqa", "template_bf0odbo", params, {
          publicKey: "i3otYtBH-jZDLIIfu",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <Section styleClass="section-none">
      <SectionHead
        symbol="*"
        title="contact_me"
        intro="Feel free to reach out to discuss potential collaborations, projects, or any exciting opportunities ahead!"
      />
      <div className="contact-container">
        <div className="form-container">
          <form className="contact-form" action="">
            <div>
              <input
                type="text"
                placeholder="_name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="_email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="_message*"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div id="contact-btn-div">
              <Button text="send" fontSize="18px" onClick={handleSubmit} />
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
