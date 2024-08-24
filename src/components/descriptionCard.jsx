import React from "react";
import { Button, Card, Select } from "antd";
import instock from "./instock.png";
import outofstock from "./outofstock.png";
import { useState } from "react";
function DescriptionCard({ description, Quantity , ItemGroup}) {
	const [buttonName, setButtonName]= useState("Change Item Group");
	const changeGroup= () =>{
		if(buttonName === "Change Item Group"){
			setButtonName("Confirm Save");
		}
		else{
			setButtonName("Change Item Group");
		}
	}
  return (
    <div className="flex flex-row flex-1 gap-2">
      <Card title="Description" bordered={false} className="flex-1">
        <p>{description}</p>
      </Card>
      <Card
        title={
          <div className="flex items-center gap-2">
            {Quantity > 0 ? (
              <img src={instock} alt="status" className="w-8 h-8" />
            ) : (
              <img src={outofstock} alt="status" className="w-8 h-8" />
            )}
            {Quantity > 0 ? <h3> In Stock</h3> : <h3> Out of Stock</h3>}
          </div>
        }
        bordered={false}
        className="min-w-[300px]" // Adjust min-width as needed
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <h2 className="whitespace-nowrap">Item Group :</h2>
            <Select
              style={{ width: "auto", flexGrow: 1 }}
              disabled={buttonName === "Change Item Group"}
							defaultValue={ItemGroup}
            >
              <Select.Option value="demo">None</Select.Option>
            </Select>
          </div>
          <div>
            <Button type="primary" onClick={changeGroup}>{buttonName}</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default DescriptionCard;
