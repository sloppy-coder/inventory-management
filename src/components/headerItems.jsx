import { Plus } from "lucide-react";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { ItemsIconArray } from "../(after-login)/inverntory/ineventory-items/items/itemsIconArray";
import ItemsCard from "./itemsCard";
export default function HeaderItems({name}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex justify-between items-start bg-slate-50 p-10">
      <div className="text-2xl">{name}</div>
      <div>
        <Button type="primary" onClick={showModal}>
          <Plus />
          <span>New</span>
        </Button>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        styles={{
          body: { backgroundColor: "#f1f5f9" }, // Equivalent to bg-slate-100
        }}
        width="70vw" // 90% of the viewport width
        style={{ maxWidth: "1050px" }}
        closable={false}
      >
        <div className="flex gap-4 w-full p-4">
          {ItemsIconArray.map((element, index) => {
            return (
              <div className="bg-white w-full p-2 gap-2 font-semibold">
                <ItemsCard
                  key={index}
                  bgImg={element.bgImg}
                  tag={element.tag}
                  nameType={element.nameType}
                  createNew={element.createNew}
                  wide={element.wide}
                  heit={element.heit}
                  name={element.name}
                  showQuantityPrice={element.showQuantityPrice}
                />
              </div>
            );
          })}
        </div>
      </Modal>
    </div>
  );
}
