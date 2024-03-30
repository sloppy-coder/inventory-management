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
import React, { useState } from "react";

export default function Sidebar() {
  const [homeButton, setHomeButton] = useState(false);
  const [itemsButton, setItemsButton] = useState(false);
  const [salesButton, setSalesButton] = useState(false);
  const [purchaseButton, setPurchaseButton] = useState(false);
  const [integrationsButton, setIntegrationsButton] = useState(false);
  const [reportsButton, setReportsButton] = useState(false);
  const [documentsButton, setDocumentsButton] = useState(false);
  const handleClick = (event) => {
    setHomeButton(false);
    setItemsButton(false);
    setSalesButton(false);
    setPurchaseButton(false);
    setIntegrationsButton(false);
    setReportsButton(false);
    setDocumentsButton(false);
    switch (event) {
      case "home":
        setHomeButton(true);
        break;
      case "items":
        setItemsButton(true);
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

        <button
          className={`flex space-x-0.5 p-2 ${
            itemsButton
              ? " bg-blue-600 border rounded-md"
              : " hover:bg-slate-600"
          }`}
          onClick={() => handleClick("items")}
        >
          <ShoppingBag />
          <span>Items</span>
        </button>
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
