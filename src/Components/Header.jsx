import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// MastBite - building just UI microservice

export const Title = () => (
  <a href="/">
    <div className="w-[100px]">
      <img alt="logo" className="w-full object-contain" src={LOGO_URL} />
    </div>
  </a>
);

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between items-center m-[10px] px-10 py-3 bg-white border-b border-gray-200 shadow-sm sticky top-0 z-[100]">
      <Title />
      <div className="nav-items">
        <ul className="flex list-none items-center gap-7 text-2xl">
          <li className="text-[1.5rem] font-medium text-[#333] hover:text-[#ff6600] cursor-pointer">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="text-[1.5rem] font-medium text-[#333] hover:text-[#ff6600] cursor-pointer">
            <Link to="/">Home</Link>{" "}
          </li>
          <li className="text-[1.5rem] font-medium text-[#333] hover:text-[#ff6600] cursor-pointer">
            <Link to="/About">About</Link>{" "}
          </li>
          <li className="text-[1.5rem] font-medium text-[#333] hover:text-[#ff6600] cursor-pointer">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="text-[1.5rem] font-medium text-[#333] hover:text-[#ff6600] cursor-pointer">
            <Link to="/cart"> Cart🛒({cartItems.length} Items)</Link>
          </li>

          <button
            className="ml-5 bg-[#ff6600] text-white text-[0.95rem] font-medium px-[18px] py-[8px] rounded-md transition-all duration-300 hover:-translate-y-[2px] hover:shadow-lg hover:opacity-95 active:translate-y-[1px] active:shadow-md"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="text-[1.5rem] font-medium text-[#333] hover:text-[#ff6600] cursor-pointer">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
