import Section from "../../../UI/Section/Section";
import SectionHead from "../../../UI/Section/SectionHead";
import useAnimateText from "../../../Hooks/useAnimateText";
import AnimatedHeading from "../../../UI/AnimatedHeading";
import Button from "../../../UI/Button";
import { servicesData } from "../../../Data/data";
import "./ServicesSection.css";

const ServicesSection = () => {
  const servicesList = servicesData.services.map((service) =>
    useAnimateText("_"+service["name"])
  );

  return (
    <Section styleClass="section-none">
      <SectionHead
        symbol="#"
        title="services"
        intro={servicesData.servicesIntro}
        withPaddingBottom={true}
      />
      <div className="services">
        {servicesList.map((service, index) => (
          <div key={index}>
            <AnimatedHeading
              content={service}
              color={servicesData.services[index]["color"]}
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
