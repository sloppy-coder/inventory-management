import React from "react";
import { Header } from "../../components/header";
import Sidebar from "../../components/sidebar";
import Home from "./home/home.jsx"
function Inventory() {
  return (
    <div className="flex">
      <Sidebar />
      <main className=" w-full min-h-screen bg-slate-100">
        <Header/>
        <div className="w-full"><Home/></div>
      </main>
    </div>
  );
}
export { Inventory };
