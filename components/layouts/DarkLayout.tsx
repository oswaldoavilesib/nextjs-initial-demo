import React from "react";
import { FC } from "react";

const DarkLayout: FC = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <h1>DarkLayout</h1>
      <div>{children}</div>
    </div>
  );
};

export default DarkLayout;
