import React from "react";
import ParticleBackground from "./particleBackground";

const Layout = ({ children }) => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <ParticleBackground />
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </div>
  );
};

export default Layout;
