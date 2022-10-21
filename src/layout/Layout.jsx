import React from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";
import { SubMenu } from "../components/SubMenu";

const Layout = () => {
  return (
    <>
      <Menu />
      <main className="container">
        <SubMenu />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
