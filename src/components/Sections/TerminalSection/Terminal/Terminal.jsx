import { useState } from "react";
import TerminalHistory from "./TerminalHistory";
import TerminalLine from "./TerminalLine";
import useTerminalHistory from "../../../../Hooks/useTerminalHistory";
import useDirectoryManager from "../../../../Hooks/useDirectoryManager";
import useFileReader from "../../../../Hooks/useFileReader";

const Terminal = (props) => {
  const [command, setCommand] = useState("");
  const [terminalHistory, addToHistory, clearHistory] = useTerminalHistory();
  const readFile = useFileReader();
  const [currDir, getAvailableDirs, changeDir] = useDirectoryManager(
    props.listDir
  );

  const handleCommand = (e) => {
    setCommand(e.target.value);
  };

  const parseCommand = (e) => {
    const cmdList = e.target.value.split(" ");
    const currCmd = cmdList[0];
    let params = [];
    if (cmdList.length > 1) [, ...params] = cmdList;
    return { currCmd, params };
  };

  const handleEnter = async (e) => {
    if (e.key === "Enter") {
      const { currCmd, params } = parseCommand(e);
      setCommand("");
      switch (currCmd) {
        case "ls":
          addToHistory(currCmd, currDir, getAvailableDirs());
          break;
        case "clear":
          clearHistory();
          break;
        case "cd":
          const paramDir = params[0];
          changeDir(paramDir, addToHistory);
          break;
        case "cat":
          const paramFile = params[0];
          const {output, is_file} = await readFile(paramFile, getAvailableDirs);
          addToHistory(currCmd + " " + paramFile, currDir, output, is_file);
          break;
        case "":
          addToHistory(currCmd, currDir, []);
          break;
        default:
          addToHistory(currCmd, currDir, [
            "'" + currCmd + "' is not a valid command",
          ]);
          break;
      }
    }
  };

  return (
    <div className="terminal">
      <div className="terminal-head">&lt; Terminal /&gt;</div>
      <TerminalHistory terminalLinesList={terminalHistory} />
      <TerminalLine
        isActive={true}
        command={command}
        handleCommand={handleCommand}
        handleEnter={handleEnter}
        dir={currDir}
      />
    </div>
  );
};

export default Terminal;
