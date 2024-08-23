import React from "react";
import { Header } from "../../../components/header";
import Sidebar from "../../../components/sidebar";
function Inventory({component}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className=" w-full min-h-screen bg-slate-100">
        <Header/>
        <div className="w-full">{component}</div>
      </main>
    </div>
  );
}
export { Inventory };
