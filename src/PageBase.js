import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const PageBase = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="ml-48 pt-20 pb-10 pl-10 pr-10">{children}</main>
    </>
  );
};

export default PageBase;
