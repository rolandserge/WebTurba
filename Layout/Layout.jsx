import React from "react";
import Navbar from "../Component/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="layout_main">
        {children}
      </main>
    </div>
  );
};

export default Layout;

