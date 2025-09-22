import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className=" p-2 border-b-2 text-left flex justify-between bg-white mx-4 my-3 rounded-lg shadow-sm border border-gray-200 "
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span> - ₹:
              <span>
                {item?.card?.info?.defaultPrice
                  ? item?.card?.info?.defaultPrice / 100
                  : item?.card?.info?.price / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 relative">
            <img
              className="rounded-lg shadow-sm"
              src={CDN_URL + item?.card?.info?.imageId}
            />
            <button
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white border-2 border-green-500 text-green-600 font-bold px-3 py-1 rounded-md hover:bg-green-50 transition-colors duration-200 shadow-lg text-sm"
              onClick={() => handleAddItem(item)}
            >
              Add+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
