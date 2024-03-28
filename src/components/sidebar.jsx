import {
  BadgeIndianRupee,
  ChevronLeft,
  Files,
  Home,
  MessageSquareWarning,
  ShoppingBag,
  ShoppingCart,
  TicketCheck,
  Workflow,
} from "lucide-react";
import React from "react";

export default function Sidebar() {
  return (
    <div className="flex flex-col w-60 min-h-screen bg-slate-800 text-slate-100">
      <header className="flex p-3 space-x-2 items-center bg-slate-900">
        <ShoppingCart />
        <span className="font-semibold text-2xl">Inventory</span>
      </header>
      <div className="flex flex-col flex-grow gap-3">
        <button className="flex space-x-0.5 p-2">
          <Home />
          <span>Home</span>
        </button>
        <button className="flex space-x-0.5 p-2">
          <ShoppingBag />
          <span>Items</span>
        </button>
        <button className="flex space-x-0.5 p-2">
          <BadgeIndianRupee />
          <span>Sales</span>
        </button>
        <button className="flex space-x-0.5 p-2">
          <TicketCheck />
          <span>Purchases</span>
        </button>
        <button className="flex space-x-0.5 p-2">
          <Workflow />
          <span>Integrations</span>
        </button>
        <button className="flex space-x-0.5 p-2">
          <MessageSquareWarning />
          <span>Reports</span>
        </button>
        <button className="flex space-x-0.5 p-2">
          <Files />
          <span>Documents</span>
        </button>
      </div>
      <div>
        <footer className="flex items-center justify-center p-3 bg-slate-900 h-18">
          <button>
            <ChevronLeft className="h-8 w-8" />
          </button>
        </footer>
      </div>
    </div>
  );
}
