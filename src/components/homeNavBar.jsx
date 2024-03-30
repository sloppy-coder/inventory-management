import { BookCopy } from "lucide-react";
import React, { useState } from "react";
import InventoryDashboard from "../(after-login)/inverntory/home/inventory-dashboard/inventory-dashboard";
import Announcements from "../(after-login)/inverntory/home/announcements/announcements";
import GettingStarted from "../(after-login)/inverntory/home/getting-started/getting-started";
import RecentUpdates from "../(after-login)/inverntory/home/recent-updates/recent-updates";
export default function HomeNavBar() {
  const [borderDashboard, setBorderDashboard] = useState(true);
  const [borderGettingStarted, setGettingStarted] = useState(false);
  const [borderRecentUpdates, setBorderRecentUpdates] = useState(false);
  const [borderAnnouncements, setBorderAnnouncements] = useState(false);
  const [currentTab, setCurrentTab] = useState("dashboard");
  const handleClick = (event) => {
    setBorderDashboard(false);
    setGettingStarted(false);
    setBorderRecentUpdates(false);
    setBorderAnnouncements(false);
    setCurrentTab(event);
    switch (event) {
      case "dashboard":
        setBorderDashboard(true);
        break;
      case "getting-started":
        setGettingStarted(true);
        break;
      case "recent-updates":
        setBorderRecentUpdates(true);
        break;
      case "announcements":
        setBorderAnnouncements(true);
        break;
      default:
        setBorderDashboard(true);
        break;
    }
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-5">
        <div className="flex py-10 px-5 gap-2">
          <div className="border flex items-center p-2 bg-slate-50 rounded-sm">
            <BookCopy className="w-8 h-8" />
          </div>
          <div className="flex-col">
            <p className="text-xl font-semibold">Hello, SLOPPY CODER</p>
            <span className="text-s">Tanmay</span>
          </div>
        </div>
        <div className="flex px-5 gap-12 h-10 sticky">
          <button
            onClick={() => handleClick("dashboard")}
            className={` hover:bg-slate-200 ${
              borderDashboard ? " rounded-md border-b-4 border-blue-600" : ""
            }`}
          >
            <span className="p-2">Dashboard</span>
          </button>
          <button
            onClick={() => handleClick("getting-started")}
            className={`hover:bg-slate-200 ${
              borderGettingStarted
                ? " rounded-md border-b-4 border-blue-600"
                : ""
            }`}
          >
            <span className="p-2">Getting Started</span>
          </button>
          <button
            onClick={() => handleClick("recent-updates")}
            className={`hover:bg-slate-200 ${
              borderRecentUpdates
                ? " rounded-md border-b-4 border-blue-600"
                : ""
            }`}
          >
            <span className="p-2">Recent Updates</span>
          </button>
          <button
            onClick={() => handleClick("announcements")}
            className={`hover:bg-slate-200 ${
              borderAnnouncements
                ? " rounded-md border-b-4 border-blue-600"
                : ""
            }`}
          >
            <span className="p-2">Announcements</span>
          </button>
        </div>
      </div>
      {currentTab === "dashboard" && <InventoryDashboard />}
      {currentTab === "announcements" && <Announcements />}
      {currentTab === "getting-started" && <GettingStarted />}
      {currentTab === "recent-updates" && <RecentUpdates />}
    </div>
  );
}
