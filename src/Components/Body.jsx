import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurants, setRestaurants] = useState(resList);
  const [searchText, setSearchText] = useState("");

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    // API call
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://mastbite-proxy.shubhamjain11099.workers.dev/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!!! Please check your internet connection.
      </h1>
    );

  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-2 flex justify-center items-center gap-4">
        <div className="flex">
          <input
            type="text"
            className="px-3 py-2 text-[0.95rem] border border-gray-300 rounded-l-md outline-none transition duration-200 focus:border-[#ff6600] focus:shadow-[0_0_4px_rgba(255,102,0,0.3)]"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              // e.target.value - whatever you write in input
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-[#ff6600] text-white text-[0.95rem] font-medium rounded-r-md transition duration-300 hover:bg-[#e65c00] hover:-translate-y-[1px] hover:shadow-md"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="px-5 py-2 bg-white text-[#333] text-[0.95rem] font-medium border border-gray-300 rounded-md transition duration-300 hover:border-[#ff6600] hover:text-[#ff6600] hover:-translate-y-[1px] hover:shadow-md"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container flex flex-wrap flex-shrink-0 rounded-[14px] overflow-hidden shadow-sm transition duration-200">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
