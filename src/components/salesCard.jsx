import React from "react";

export default function SalesCard({ qty, colour, tag, unit, icon }) {
  return (
    <div className="flex flex-col bg-slate-50 items-center justify-center py-2 px-4 hover:shadow-md">
      <span className={`text-5xl ${colour}`}>{qty}</span>
      <p className=" text-sm">{unit}</p>
      <div className="flex gap-1 items-center py-2">
        {icon}
        <p className=" text-l">{tag}</p>
      </div>
    </div>
  );
}
