import React, { createContext, useContext } from "react";
import useLocalStorage from "./localStorage";

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const ContextProvider = ({ children }) => {
  const defaultData=[];
  for (let i = 1; i <= 3; i++) {
    defaultData.push({
      key: i,
      Name: "John Brown",
      Type: Number(`${i}2`),
      Quantity: `New York No. ${i} Lake Park`,
      Price: Number(`${i}`),
      description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
    });
  }
  const [ItemData, setItemData]= useLocalStorage("ItemData",defaultData);
  const [ItemGroups, setItemGroups]= useLocalStorage("ItemGroups", []);
  return (
    <AppContext.Provider
      value={{
        ItemData,
        setItemData,
        ItemGroups,
        setItemGroups,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
