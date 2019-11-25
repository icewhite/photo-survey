import React, { useEffect, useState } from "react";

//Custom hook - method described here: https://www.robinwieruch.de/local-storage-react
const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = useState(
    localStorage.getItem(localStorageKey) || ""
  );
  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);
  return [value, setValue];
};

export { useStateWithLocalStorage };
