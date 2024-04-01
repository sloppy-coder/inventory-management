import React from "react";
import { Header } from "../../components/header";
import Sidebar from "../../components/sidebar";
import Items from "./ineventory-items/items/items";
function Inventory() {
  return (
    <div className="flex">
      <Sidebar />
      <main className=" w-full min-h-screen bg-slate-100">
        <Header/>
        <div className="w-full"><Items/></div>
      </main>
    </div>
  );
}
export { Inventory };
