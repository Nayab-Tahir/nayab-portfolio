import Instruction from "./Instruction";

const TerminalInstructions = (props) => {
  const terminalInstructionsList = props.terminalInstructionsList;

  return (
    <div className="terminal-instructions">
      {terminalInstructionsList.map((inst, index) => (
        <Instruction
          key={index}
          num={inst.num}
          title={inst.title}
          description={inst.description}
        />
      ))}
    </div>
  );
};

export default TerminalInstructions;
