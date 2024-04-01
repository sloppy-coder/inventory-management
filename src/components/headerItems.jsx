import {
  CircleHelp,
  EllipsisVertical,
  GridIcon,
  List,
  Plus,
} from "lucide-react";
import React from "react";

export default function HeaderItems() {
  return (
    <div className="flex justify-between items-start bg-slate-50 p-10">
      <div className="text-2xl">All Items</div>
      <div className="flex gap-4">
        <button className="flex border rounded-md border-slate-300 bg-blue-500 text-slate-50 p-1">
          <Plus />
          <span>New</span>
        </button>
        <div className="flex border rounded-md border-slate-300 bg-slate-200">
          <button className="border-r border-slate-300 px-1 hover:bg-slate-300">
            <List />
          </button>
          <button className="px-1 hover:bg-slate-300">
            <GridIcon />
          </button>
        </div>
        <button className="flex border rounded-md border-slate-300 bg-slate-200 items-center">
          <EllipsisVertical />
        </button>
        <button>
          <CircleHelp />
        </button>
      </div>
    </div>
  );
}
