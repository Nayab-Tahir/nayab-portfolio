import Terminal from "./Terminal/Terminal";
import TerminalInstructions from "./TerminalInstructions/TerminalInstructions";
import Section from "../../../UI/Section/Section";
import { terminalData } from "../../../Data/data";
import "./TerminalSection.css";

const TerminalSection = () => {
  return (
    <Section>
      <div className="terminal-div">
        <Terminal listDir={terminalData.listDir} />
        <TerminalInstructions
          terminalInstructionsList={terminalData.terminalInstructionsList}
        />
      </div>
    </Section>
  );
};

export default TerminalSection;
