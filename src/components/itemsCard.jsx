import React from "react";
import { useState } from "react";
import NewItem from "../(after-login)/inverntory/ineventory-items/New-item-group/newItem";
import { Button } from "antd";
export default function ItemsCard({
  bgImg,
  tag,
  nameType,
  createNew,
  wide,
  heit,
  name,
  showQuantityPrice,
}) {
  const [makeNew, setMakeNew] = useState(false);
  const handleMakeNew = () => {
    setMakeNew(true);
  };
  return !makeNew ? (
    <div className="flex flex-col items-center bg-white w-full p-2 gap-2 font-semibold">
      <p>{nameType}</p>
      <img src={bgImg} alt="" width={wide} height={heit} />
      <p className="text-xs">{tag}</p>
      <button className="bg-blue-500 border rounded-md p-1">
        <p className="text-slate-50 text-sm" onClick={handleMakeNew}>
          {createNew}
        </p>
      </button>
    </div>
  ) : (
    <div style={{ maxHeight: "50vh", overflowY: "auto", overflowX: "auto" }}>
      <NewItem name={name} showQuantityPrice={showQuantityPrice} />
      <Button
        onClick={() => {
          setMakeNew(false);
        }}
      >
        Back
      </Button>
    </div>
  );
}
