import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="left-0 top-[74px] h-full fixed w-56  z-10 bg-blue-400 overflow-hidden">
      <section className="space-y-3 text-xl font-semibold text-white cursor-pointer p-3 flex flex-col">
        <Link
          to="/"
          className="hover:bg-blue-700 p-4 rounded-md transition ease-in-out duration-100"
        >
          Home
        </Link>
        <Link
          to="/harga"
          className="hover:bg-blue-700 p-4 rounded-md transition ease-in-out duration-100"
        >
          Harga
        </Link>
        <Link
          to="/komoditas"
          className="hover:bg-blue-700 p-4 rounded-md transition ease-in-out duration-100"
        >
          Komoditas
        </Link>
      </section>
    </aside>
  );
};

export default Sidebar;
