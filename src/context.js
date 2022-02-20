import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = (props) => {
  return (
    <AppContext.Provider value="hello">
      {props.children}
    </AppContext.Provider>
  );
};

// Custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
