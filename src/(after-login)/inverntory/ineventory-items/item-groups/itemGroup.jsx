import React from "react";
import HeaderItems from "../../../../components/headerItems";
import ItemTable from "../../../../components/itemTable";
import { useApp } from "../../../../Context";
export default function ItemGroup() {
  const { ItemGroups } = useApp();
  return (
    <div className="flex flex-col gap-6">
      <HeaderItems name="All Item Groups" />
      <div className="flex flex-col px-6">
        <ItemTable tableData={ItemGroups} />
      </div>
    </div>
  );
}
