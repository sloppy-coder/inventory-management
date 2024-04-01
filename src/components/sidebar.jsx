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
import React, { useState } from "react";
export default function Sidebar() {
  const [homeButton, setHomeButton] = useState(true);
  const [inventoryItemsButton, setInventoryItemsButton] = useState(false);
  const [salesButton, setSalesButton] = useState(false);
  const [purchaseButton, setPurchaseButton] = useState(false);
  const [integrationsButton, setIntegrationsButton] = useState(false);
  const [reportsButton, setReportsButton] = useState(false);
  const [documentsButton, setDocumentsButton] = useState(false);
  const [collapseItemsButton, setCollapseItemsButton] = useState(false);
  const [innerItems, setInnerItems] = useState();
  const [innerItemsGroups, setInnerItemsGroups] = useState();
  const [innerAdjustments, setInnerAdjustments] = useState();
  const handleClick = (event) => {
    if (event !== "items") {
      setHomeButton(false);
      setSalesButton(false);
      setPurchaseButton(false);
      setIntegrationsButton(false);
      setReportsButton(false);
      setDocumentsButton(false);
      setInnerItems(false);
      setInnerItemsGroups(false);
      setInnerAdjustments(false);
      setInventoryItemsButton(false);
    }
    switch (event) {
      case "home":
        setHomeButton(true);
        break;
      case "items":
        setCollapseItemsButton(!collapseItemsButton);
        if (collapseItemsButton) {
          setInventoryItemsButton(
            innerAdjustments || innerItems || innerItemsGroups
          );
        } else {
          setInventoryItemsButton(false);
        }
        break;
      case "sales":
        setSalesButton(true);
        break;
      case "purchase":
        setPurchaseButton(true);
        break;
      case "integrations":
        setIntegrationsButton(true);
        break;
      case "reports":
        setReportsButton(true);
        break;
      case "inner-items":
        setInnerItems(true);
        break;
      case "inner-adjustments":
        setInnerAdjustments(true);
        break;
      case "inner-itemgroups":
        setInnerItemsGroups(true);
        break;
      default:
        setDocumentsButton(true);
        break;
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
            homeButton
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
        <button
          className={`flex space-x-0.5 p-2 ${
            salesButton
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
            purchaseButton
              ? " bg-blue-600 border rounded-md"
              : " hover:bg-slate-600"
          }`}
          onClick={() => handleClick("purchase")}
        >
          <TicketCheck />
          <span>Purchases</span>
        </button>
        <button
          className={`flex space-x-0.5 p-2 ${
            integrationsButton
              ? " bg-blue-600 border rounded-md"
              : " hover:bg-slate-600"
          }`}
          onClick={() => handleClick("integrations")}
        >
          <Workflow />
          <span>Integrations</span>
        </button>
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
