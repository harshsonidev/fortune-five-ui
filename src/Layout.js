import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <Header />
        <div className="wrapper">
          <Sidebar />
          <div className="content">
            {children}
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
