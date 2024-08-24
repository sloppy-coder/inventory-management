import React, { createContext, useContext } from "react";
import useLocalStorage from "./localStorage";

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const ContextProvider = ({ children }) => {
  const defaultData = [];
  const [ItemData, setItemData] = useLocalStorage("ItemData", defaultData);
  const [ItemGroups, setItemGroups] = useLocalStorage("ItemGroups", []);
  const [currentTab, setCurrentTab] = useLocalStorage("currentTab", "home");
  const [collapseItemsButton, setCollapseItemsButton] = useLocalStorage(false);
  return (
    <AppContext.Provider
      value={{
        currentTab,
        setCurrentTab,
        ItemData,
        setItemData,
        ItemGroups,
        setItemGroups,
        collapseItemsButton,
        setCollapseItemsButton,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
