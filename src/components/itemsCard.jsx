import React from "react";

export default function ItemsCard({
  bgImg,
  tag,
  nameType,
  createNew,
  wide,
  heit,
}) {
  return (
    <div className="flex flex-col items-center bg-white w-full p-2 gap-2 font-semibold">
      <p>{nameType}</p>
      <img src={bgImg} alt="" width={wide} height={heit} />
      <p className="text-xs">{tag}</p>
      <button className="bg-blue-500 border rounded-md p-1">
        <p className="text-slate-50 text-sm">{createNew}</p>
      </button>
    </div>
  );
}
