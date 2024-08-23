import React from 'react'
import sidebarButton from './sidebarButton';
import {
  BadgeIndianRupee,
  ChevronDown,
  ChevronLeft,
  ChevronUp,
  Files,
  Home,
  MessageSquareWarning,
  ShoppingBag,
  ShoppingCart,
  TicketCheck,
  Workflow,
} from "lucide-react";
export default function Sidebarv2() {
  return (
    <div className="flex flex-col w-60 min-h-screen bg-slate-800 text-slate-100">
      <header className="flex p-3 space-x-2 items-center bg-slate-900">
        <ShoppingCart />
        <span className="font-semibold text-2xl">Inventory</span>
      </header>
      <div className="flex flex-col flex-grow gap-3 p-3">
        <sidebarButton
          type={false}
          page={""}
          clicked={currentTab === ""}
          tag="Home"
          icon={<Home />}
        />
        <div className="flex flex-col">
          <button
            className={`flex space-x-0.5 p-2 ${
              inventoryItemsButton
                ? " bg-blue-600 border rounded-md"
                : " hover:bg-slate-600"
            }`}
            onClick={() => handleClick("items")}
          >
            <ShoppingBag />
            <span>Inventory Items</span>
            {collapseItemsButton ? <ChevronUp /> : <ChevronDown />}
          </button>
          {collapseItemsButton && (
            <div className=" flex flex-col items-start gap-3 py-3 px-5">
              <button
                className={` w-32 p-2 flex items-center ${
                  innerItems
                    ? " bg-blue-600 border rounded-md"
                    : " hover:bg-slate-600"
                }`}
                onClick={() => {
                  handleClick("inner-items");
                }}
              >
                <span>Items</span>
              </button>
              <button
                className={`p-2 w-32 flex items-center ${
                  innerItemsGroups
                    ? " bg-blue-600 border rounded-md"
                    : " hover:bg-slate-600"
                }`}
                onClick={() => {
                  handleClick("inner-itemgroups");
                }}
              >
                <span>Item Groups</span>
              </button>
              <button
                className={`p-2 w-32 flex items-center ${
                  innerAdjustments
                    ? " bg-blue-600 border rounded-md"
                    : " hover:bg-slate-600"
                }`}
                onClick={() => {
                  handleClick("inner-adjustments");
                }}
              >
                <span>Adjustments</span>
              </button>
            </div>
          )}
        </div>
        <sidebarButton
          type={false}
          page={""}
          clicked={currentTab === ""}
          tag="Home"
          icon={<Home />}
        />
        <sidebarButton
          type={false}
          page={"purchases"}
          clicked={currentTab === "purchases"}
          tag="Purchases"
          icon={<TicketCheck />}
        />
        <sidebarButton
          type={false}
          page={"Integrations"}
          clicked={currentTab === "/Integrations"}
          tag="Integrations"
          icon={<Workflow />}
        />
        <sidebarButton
          type={false}
          page={""}
          clicked={currentTab === ""}
          tag="Home"
          icon={<Home />}
        />
        <button
          className={`flex space-x-0.5 p-2 ${
            reportsButton
              ? " bg-blue-600 border rounded-md"
              : " hover:bg-slate-600"
          }`}
          onClick={() => handleClick("reports")}
        >
          <MessageSquareWarning />
          <span>Reports</span>
        </button>
        <button
          className={`flex space-x-0.5 p-2 ${
            documentsButton
              ? " bg-blue-600 border rounded-md"
              : " hover:bg-slate-600"
          }`}
          onClick={() => handleClick("documents")}
        >
          <Files />
          <span>Documents</span>
        </button>
      </div>
      <div>
        <footer className="flex items-center justify-center p-3 bg-slate-900 h-18 hover:bg-slate-700">
          <button>
            <ChevronLeft className="h-8 w-8" />
          </button>
        </footer>
      </div>
    </div>
  );
}
