const useFileReader = () => {
  const fetchData = async (filename) => {
    const resp = await fetch(`/${filename}`);
    const data = await resp.text();
    return data.split("\n");
  };

  const readFile = async (filename, getAvailableDirs) => {
    if (getAvailableDirs().includes(filename)) {
        return { output: await fetchData(filename), is_file: true};
    } else {
        return { output:[filename + ", no such File"], is_file:false};
    }
  };

  return readFile;
};

export default useFileReader;
