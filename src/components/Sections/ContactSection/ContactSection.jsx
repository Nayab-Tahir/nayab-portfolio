import Section from "../../../UI/Section/Section";
import SectionHead from "../../../UI/Section/SectionHead";
import Button from "../../../UI/Button";
import "./ContactSection.css";

const ContactSection = () => {
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
              <input type="text" placeholder="_name*" />
            </div>
            <div>
              <input type="text" placeholder="_email*" />
            </div>
            <div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="_message*"
              ></textarea>
            </div>
            <div id="contact-btn-div">
              <Button text="send" fontSize="18px" />
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
