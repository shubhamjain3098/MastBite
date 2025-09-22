import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info || {};
  const { deliveryTime } = resData?.info?.sla || {};

  return (
    <div className="card w-[250px] p-[5px] m-[10px] flex-shrink-0 rounded-[14px] overflow-hidden shadow-sm transition-transform duration-200 hover:bg-[#ecebeb] hover:scale-[1.03] hover:shadow-md cursor-pointer">
      <img
        className="res-logo w-full h-[250px] rounded-[14px] object-cover transition duration-200"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h2>{name}</h2>
      <h4> {avgRating} stars</h4>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return () => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard />
      </div>
    );
  };
};

export default RestaurantCard;
