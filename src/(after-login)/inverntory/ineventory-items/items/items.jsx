import React from "react";
import HeaderItems from "../../../../components/headerItems";
import ItemsCard from "../../../../components/itemsCard";
import {ItemsArray1, ItemsArray2} from "./itemsArray";
export default function Items() {
  return (
    <div>
      <HeaderItems />
      <div className="flex flex-col items-center flex-grow gap-4 p-5">
        <div className="flex gap-4 w-full">
          {ItemsArray1.map((element,index) => {
             return <ItemsCard
              key={index}
              bgImg={element.bgImg}
              tag={element.tag}
              nameType={element.nameType}
              createNew={element.createNew}
              wide={element.wide}
              heit={element.heit}
            />;
          })}
        </div>
        <div className="flex gap-4 w-full">
          {ItemsArray2.map((element,index) => {
            return <ItemsCard
              key={index+2}
              bgImg={element.bgImg}
              tag={element.tag}
              nameType={element.nameType}
              createNew={element.createNew}
              wide={element.wide}
              heit={element.heit}
            />;
          })}
        </div>
      </div>
    </div>
  );
}
