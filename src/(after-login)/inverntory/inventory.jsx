import React from "react";
import { Header } from "../../components/header";
import Sidebar from "../../components/sidebar";
function Inventory() {
  return (
    <div className="flex">
      <Sidebar/>
      <main className=" w-full min-h-screen bg-slate-100">
        <Header />
        {/* body */}
        <div className="w-full">this is body</div>
      </main>
    </div>
  );
}
export { Inventory };
