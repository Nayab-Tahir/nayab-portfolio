import { useState } from "react";

const useTerminalHistory = () => {
  const [terminalHistory, setTerminalHistory] = useState([]);

  const addToHistory = (command, path, outputList, is_file = false) => {
    if (is_file)
      setTerminalHistory((prevList) => [
        ...prevList,
        { command: command, path: path, outputList: outputList, is_file },
      ]);
    else
      setTerminalHistory((prevHist) => [
        ...prevHist,
        { command: command, path: path, outputList: outputList },
      ]);
  };

  const clearHistory = () => {
    setTerminalHistory([]);
  };

  return [terminalHistory, addToHistory, clearHistory];
};

export default useTerminalHistory;
