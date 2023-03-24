import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer"

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="layout_main">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

