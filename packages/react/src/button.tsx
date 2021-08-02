import React from "react";
import { colors } from "@ui-components/tokens";

export const Button: React.FC = ({ children }) => {
  return (
    <button
      style={{
        backgroundColor: colors.primary,
        color: "white",
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        position: "relative",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        outline: "none",
        border: "none",
      }}
    >
      {children}
    </button>
  );
};
