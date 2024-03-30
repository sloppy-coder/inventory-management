import React from "react";
import SalesCard from "../../../../components/salesCard";
import { CircleAlert, CircleCheck, CircleEllipsis, Truck } from "lucide-react";

export default function InventoryDashboard() {
  return (
    <div className="py-20 px-12 flex items-start gap-10 justify-around">
      <div className="flex-col items-start gap-2 border border-slate-300 rounded-md">
        <p className="text-2xl px-3 py-2 flex items-start border-b border-slate-300">
          Sales Activity
        </p>
        <div className=" flex items-center justify-between p-2 gap-2">
          <div>
            <SalesCard
              qty="0"
              colour="text-blue-500"
              unit="Qty"
              tag="TO BE PACKED"
              icon={<CircleCheck className="w-3 h-3" />}
            />
          </div>
          <SalesCard
            qty="0"
            colour="text-red-500"
            unit="Pkgs"
            tag="TO BE SHIPPED"
            icon={<Truck className="w-3 h-3" />}
          />
          <SalesCard
            qty="0"
            colour="text-green-500"
            unit="Pkgs"
            tag="TO BE DELIVERED"
            icon={<CircleEllipsis className="w-3 h-3" />}
          />
          <SalesCard
            qty="0"
            colour="text-yellow-500"
            unit="Qty"
            tag="TO BE INVOICED"
            icon={<CircleAlert className="w-3 h-3" />}
          />
        </div>
      </div>
      <div className="flex-col items-start gap-2 border border-slate-300 rounded-md flex-grow">
        <p className="text-2xl flex items-start px-3 py-2 border-b border-slate-300">
          Inventory Summary
        </p>
        <div className="flex flex-col gap-1 p-4">
          <div className="flex bg-white rounded-md justify-between p-2.5">
            <p className="text-2xl text-slate-400">Quantity in hand</p>
            <span className="text-2xl text-slate-400">0</span>
          </div>
          <div className="flex justify-between bg-white rounded-md p-2.5">
            <p className="text-2xl text-slate-400">Quantity to be recieved</p>
            <span className="text-2xl text-slate-400">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
