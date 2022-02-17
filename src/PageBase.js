import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const PageBase = ({ children }) => {
  return (
    <div className="flex w-full flex-row">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <div className="ml-52 p-4 mt-20 w-full">{children}</div>
      </div>
    </div>
  );
};

export default PageBase;
