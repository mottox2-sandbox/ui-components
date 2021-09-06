import React, { useContext } from "react";
import { colors } from "@ui-components/tokens";

const defaultTheme = {
  colors,
};

type Theme = any;
type ContextValue = {
  theme: Theme;
};

export const Context = React.createContext<ContextValue>(
  null as any as ContextValue
);

export const ThemeProvider: React.FC<{
  theme: Theme;
}> = (props) => {
  const theme = props.theme || defaultTheme;
  // NOTE: ここらへんでCSS Reset
  return (
    <Context.Provider value={{ theme }}>{props.children}</Context.Provider>
  );
};

export const useProvider = () => {
  return useContext(Context);
};
