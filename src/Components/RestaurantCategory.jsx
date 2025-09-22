import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // but since we are using showItems it is now controlled component controlling it from restaurant menu

  // const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    // setShowItems(!showItems); //the restaurantCategory is controlling itself so it is an uncontrolled component

    setShowIndex();
  };
  return (
    <div>
      {/**Header */}
      <div className="w-6/12 mx-auto my-5 bg-slate-100 shadow-lg p-2 ">
        <div
          className="flex justify-between cursor-pointer hover:-translate-y-[1px] "
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>

      {/**accordion body */}
    </div>
  );
};

export default RestaurantCategory;
