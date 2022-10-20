import React from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";

const Layout = () => {
  return (
    <>
      <Menu />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
