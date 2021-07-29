import React, { useContext } from "react";
import { colors } from "@ui-components/tokens";

const defaultTheme = {
  colors,
};

type Theme = any;
type ContextValue = {
  theme: Theme;
};

const Context = React.createContext<ContextValue>(null as any as ContextValue);

export const Provider: React.FC<{
  theme: Theme;
}> = (props) => {
  const theme = props.theme || defaultTheme;
  return (
    <Context.Provider value={{ theme }}>{props.children}</Context.Provider>
  );
};

export const useProvider = () => {
  return useContext(Context);
};
