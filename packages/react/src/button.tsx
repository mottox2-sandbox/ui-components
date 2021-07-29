import React from "react";
import { colors } from "@ui-components/tokens";

export const Button: React.FC = ({ children }) => {
  return (
    <button
      style={{
        backgroundColor: colors.primary,
        color: "white",
      }}
    >
      {children}
    </button>
  );
};
