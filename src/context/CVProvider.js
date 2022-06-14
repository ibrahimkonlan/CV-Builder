import React, { createContext, useContext, useState } from "react";

const CVContext = createContext();

const CVProvider = ({ children }) => {
  const [data, setData] = useState();
  return (
    <CVContext.Provider value={{ data, setData }}>
      {children}
    </CVContext.Provider>
  );
};

export const CVState = () => {
  return useContext(CVContext);
};
export default CVProvider;
