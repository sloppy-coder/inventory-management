import React from "react";
import HeaderItems from "../../../../components/headerItems";
import ItemTable from "../../../../components/itemTable";
import { useApp } from "../../../../Context";
export default function Items() {
  const { ItemData } = useApp();
  return (
    <div className="flex flex-col gap-6 px-10">
      <HeaderItems name="All Items" />
      <div className="flex flex-col px-6">
        <ItemTable tableData={ItemData} />
      </div>
    </div>
  );
}
