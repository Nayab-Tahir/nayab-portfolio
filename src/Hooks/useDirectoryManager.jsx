import { useState } from "react";

const useDirectoryManager = (listDir) => {
  const [currDir, setCurrDir] = useState("root");
  const [parentDir, setParentDir] = useState(["root"]);

  const getAvailableDirs = () => {
    return listDir[currDir] ? listDir[currDir] : [];
  };

  const goBack = () => {
    var tempDir = parentDir[parentDir.length - 1];
    if (parentDir.length > 1) setParentDir((prevList) => prevList.slice(0, -1));

    setCurrDir(() => tempDir);
  };

  const goToRoot = () => {
    setCurrDir("root");
    setParentDir(["root"]);
  };

  const goToDir = (dir) => {
    if (currDir !== "root") setParentDir((prevList) => [...prevList, currDir]);
    setCurrDir(dir);
  };

  const changeDir = (paramDir, addToHistory) => {
    var output = "";
    if (paramDir == "..") goBack();
    else if (paramDir == "/") goToRoot();
    else if (getAvailableDirs().includes(paramDir) && !paramDir.includes(".")) goToDir(paramDir);
    else output = paramDir + " is not a valid directory";
    addToHistory("cd " + paramDir, currDir, output ? [output] : []);
  };

  return [currDir, getAvailableDirs, changeDir];
};

export default useDirectoryManager;
