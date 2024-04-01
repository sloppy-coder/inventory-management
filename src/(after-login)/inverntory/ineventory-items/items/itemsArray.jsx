import shirt from "./shirt.png";
import shirts from "./shirts.png";
import shirtPant from "./shirtPant.png";
import notes from "./notes.png";
const ItemsArray1 = [
  {
    bgImg: shirt,
    tag: "Create multiple variants of the same item using Item Groups",
    nameType: "Item Groups",
    createNew: "New Item Group",
    wide: "111",
    heit: "126",
  },
  {
    bgImg: shirts,
    tag: "Create standalone items and services that you buy and sell",
    nameType: "Items",
    createNew: "New Item",
    wide: "192",
    heit: "145",
  },
];
const ItemsArray2 = [
  {
    bgImg: shirtPant,
    tag: "Bundle different items together and sell them as kits",
    nameType: "Composite Items",
    createNew: "Enable Now",
    wide: "152",
    heit: "128",
  },
  {
    bgImg: notes,
    tag: "Tweak your item prices for specific contacts or transactions",
    nameType: "Price Lists",
    createNew: "Enable Now",
    wide: "128",
    heit: "121"
  },
];

export { ItemsArray1, ItemsArray2 };
