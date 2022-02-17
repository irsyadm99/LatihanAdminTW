import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-[200px] min-h-screen overflow-y-auto fixed left-0 top-0 z-20 bg-sky-500 text-white block">
      <div className="border-b-2 border-sky-600 shadow-md">
        <Link to="/" className="cursor-pointer p-5 block font-bold text-2xl">
          Portal Harga
        </Link>
      </div>
      <div className="flex flex-col">
        <Link
          to="/harga"
          className="hover:bg-sky-600 cursor-pointer text-xl pt-4 pb-4 pr-2 pl-4 block font-semibold"
        >
          Harga
        </Link>
        <Link
          to="/komoditas"
          className="hover:bg-sky-600 cursor-pointer text-xl pt-4 pb-4 pr-2 pl-4 block font-semibold"
        >
          Komoditas
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
