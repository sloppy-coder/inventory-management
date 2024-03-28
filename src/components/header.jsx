import React from "react";
import {
  Bell,
  ChevronDown,
  History,
  LayoutGrid,
  Plus,
  Settings,
  Users,
} from "lucide-react";
import Searchinput from "./searchinput";
import profilepic from "./profile.jpg";

function Header() {
  return (
    <div className="flex bg-slate-50 h-12 items-center justify-between px-8">
      <div className="flex gap-3">
        <button>
          <History className="w-6 h-6" />
        </button>
        <button>
          <Searchinput />
        </button>
      </div>
      <div className="flex bg-slate-50 h-12 items-center justify-end">
        <div className="flex items-center">
          <button className="border-r border-gray-300 px-2">
            <Plus className="bg-blue-600 rounded-md text-slate-100 w-5 h-5 hover:bg-blue-900" />
          </button>
        </div>
        <div className="flex border-r border-gray-300 gap-3 justify-center px-2">
          <button>
            <Users className="w-5 h-5 hover:bg-slate-300 rounded-full" />
          </button>
          <button>
            <Bell className="w-5 h-5  hover:bg-slate-300 rounded-full" />
          </button>
          <button>
            <Settings className="w-5 h-5  hover:bg-slate-300 rounded-full" />
          </button>
        </div>
        <div className="flex">
          <button className="flex items-center p-2">
            <span>Tanmay</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="p-2">
            <img
              src={profilepic}
              alt="profile pic"
              width={88}
              height={88}
              className="rounded-full w-8 h-8 border border-slate-900"
            />
          </button>
          <button className="p-2">
            <LayoutGrid />
          </button>
        </div>
      </div>
    </div>
  );
}

export { Header };
