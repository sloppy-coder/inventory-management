import React from "react";
import ImageCarousel from "./imageCarousel";
import DescriptionCard from "./descriptionCard";

export default function ItemDetailCard({ record }) {
  return (
    <div className="flex flex-row gap-5">
      <ImageCarousel photos={record.photos} />
      <DescriptionCard description={record.description} Quantity={record.Quantity} ItemGroup={record.ItemGroup}/>
    </div>
  );
}
