import React, { useContext } from "react";

const Context = React.createContext(null);

export const Provider = ({ children }) => {
  return <Context.Provider value={"hello"}>{children}</Context.Provider>;
};

export const useProvider = () => {
  return useContext(Context);
};
