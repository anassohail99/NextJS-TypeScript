import React from "react";
import Menu from "../Menu";
import LayoutCSS from "./layout.module.scss";

const Layout: React.FC = ({ children }) => {
  return (
    <div className={LayoutCSS.container}>
      <Menu />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
