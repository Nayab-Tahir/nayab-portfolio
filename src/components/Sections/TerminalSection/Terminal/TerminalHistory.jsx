import TerminalLine from './TerminalLine';

const TerminalHistory = (props) => {
  return (
    props.terminalLinesList.map((line, index) => (
      <TerminalLine
        key={index}
        isActive={false}
        is_file={line["is_file"] || false}
        outputList={line["outputList"]}
        dir={line["path"]}
        command={line["command"]} />
    ))
  )
};

export default TerminalHistory;