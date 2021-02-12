import { useEffect, useState } from "react";

const getSavedValue = (key, initValue) => {
  const savedValue = localStorage.getItem(key);
  if (savedValue) {
    return JSON.parse(savedValue);
  }
  return initValue;
};

const useLocalStorage = (key, initValue) => {
  const [data, setData] = useState(() => getSavedValue(key, initValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return [data, setData];
};

export default useLocalStorage;
