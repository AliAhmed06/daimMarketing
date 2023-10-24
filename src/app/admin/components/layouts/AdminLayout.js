import React from "react";
import Sidebar from "../admin/Sidebar";
import Searchbar from "../admin/Searchbar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex gap-5">
      <Sidebar />
      <main className="max-w-6xl flex-1 mx-auto py-4 ">
        <Searchbar />
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
