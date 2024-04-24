import Section from "../../../UI/Section/Section";
import SectionHead from "../../../UI/Section/SectionHead";
import useAnimateText from "../../../Hooks/useAnimateText";
import AnimatedHeading from "../../../UI/AnimatedHeading";
import Button from "../../../UI/Button";
import "./ServicesSection.css";

const services = [
  { name: "_data analysis", color: "#9a99ff" },
  { name: "_predictive modeling", color: "#e6db74" },
  { name: "_data preprocessing", color: "#2fcbef" },
  { name: "_deep learning", color: "#e6db74"},
];

const ServicesSection = () => {
  const servicesList = services.map((service) =>
    useAnimateText(service["name"])
  );

  return (
    <Section styleClass="section-none">
      <SectionHead
        symbol="#"
        title="services"
        intro="...Transforming raw data into actionable insights through cutting-edge techniques and personalized strategies tailored to your unique business needs."
        withPaddingBottom={true}
      />
      <div className="services">
        {servicesList.map((service, index) => (
          <div key={index}>
            <AnimatedHeading
              content={service}
              color={services[index]["color"]}
              size="7vw"
            />
          </div>
        ))}
      </div>
      <Button path="/nayab-portfolio/services" text="all_services" />
    </Section>
  );
};

export default ServicesSection;
