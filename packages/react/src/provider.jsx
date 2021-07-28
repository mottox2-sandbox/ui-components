import React, { useContext } from "react";
import { colors } from "@ui-components/tokens";

const defaultTheme = {
  colors,
};

const Context = React.createContext(null);

export const Provider = (props) => {
  const theme = props.theme || defaultTheme;
  return (
    <Context.Provider value={{ theme }}>{props.children}</Context.Provider>
  );
};

export const useProvider = () => {
  return useContext(Context);
};
