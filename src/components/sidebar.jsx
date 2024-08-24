import {
  BadgeIndianRupee,
  ChevronDown,
  ChevronLeft,
  ChevronUp,
  Home,
  ShoppingBag,
  ShoppingCart,
  TicketCheck,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../Context";
export default function Sidebar() {
  const {
    currentTab,
    setCurrentTab,
    collapseItemsButton,
    setCollapseItemsButton,
  } = useApp();
  const navigate = useNavigate();
  const handleClick = (event) => {
    if (event === "inventory-items") {
      setCollapseItemsButton(!collapseItemsButton);
    } else {
      setCurrentTab(event);
      navigate(`/${event}`);
    }
  };
  return (
    <div className="flex flex-col w-60 min-h-screen bg-slate-800 text-slate-100">
      <header className="flex p-3 space-x-2 items-center bg-slate-900">
        <ShoppingCart />
        <span className="font-semibold text-2xl">Inventory</span>
      </header>
      <div className="flex flex-col flex-grow gap-3 p-3">
        <button
          className={`flex space-x-0.5 p-2 ${
            currentTab === "home"
              ? " bg-blue-600 border rounded-md"
              : " hover:bg-slate-600"
          }`}
          onClick={() => handleClick("home")}
        >
          <Home />
          <span>Home</span>
        </button>
        <div className="flex flex-col">
          <button
            className={`flex space-x-0.5 p-2 ${
              (currentTab === "inventory-items/items" ||
                currentTab === "inventory-items/item-groups") &&
              !collapseItemsButton
                ? " bg-blue-600 border rounded-md"
                : " hover:bg-slate-600"
            }`}
            onClick={() => handleClick("inventory-items")}
          >
            <ShoppingBag />
            <span>Inventory Items</span>
            {collapseItemsButton ? <ChevronUp /> : <ChevronDown />}
          </button>
          {collapseItemsButton && (
            <div className=" flex flex-col items-start gap-3 py-3 px-5">
              <button
                className={` w-32 p-2 flex items-center ${
                  currentTab === "inventory-items/items"
                    ? " bg-blue-600 border rounded-md"
                    : " hover:bg-slate-600"
                }`}
                onClick={() => {
                  handleClick("inventory-items/items");
                }}
              >
                <span>Items</span>
              </button>
              <button
                className={`p-2 w-32 flex items-center ${
                  currentTab === "inventory-items/item-groups"
                    ? " bg-blue-600 border rounded-md"
                    : " hover:bg-slate-600"
                }`}
                onClick={() => {
                  handleClick("inventory-items/item-groups");
                }}
              >
                <span>Item Groups</span>
              </button>
            </div>
          )}
        </div>
        <button
          className={`flex space-x-0.5 p-2 ${
            currentTab === "sales"
              ? " bg-blue-600 border rounded-md"
              : " hover:bg-slate-600"
          }`}
          onClick={() => handleClick("sales")}
        >
          <BadgeIndianRupee />
          <span>Sales</span>
        </button>
        <button
          className={`flex space-x-0.5 p-2 ${
            currentTab === "purchases"
              ? " bg-blue-600 border rounded-md"
              : " hover:bg-slate-600"
          }`}
          onClick={() => handleClick("purchases")}
        >
          <TicketCheck />
          <span>Purchases</span>
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
