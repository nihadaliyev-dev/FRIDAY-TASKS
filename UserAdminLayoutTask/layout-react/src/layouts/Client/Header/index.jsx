import { useContext } from "react";
import { NavLink } from "react-router";
import { FavoritesContext } from "../../../context/FavoritesContext";
import { ThemeContext } from "../../../context/ThemeContext";

import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  const { favoriteProds } = useContext(FavoritesContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="flex justify-center shadow-lg py-5">
      <div className="container">
        <div className="flex px-5 justify-between items-center header">
          <h3 className="text-2xl font-bold">MyProd</h3>
          <ul className="flex gap-3">
            <li className="py-2 px-3">
              <NavLink
                className="px-3 py-2 text-[#212121] border-[1.5px] rounded-[20px] border-transparent transition-all duration-300 client"
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li className="py-2 px-3">
              <NavLink
                className="px-3 py-2 text-[#212121] border-[1.5px] rounded-[20px] border-transparent transition-all duration-300 client"
                to={"/about"}
              >
                About
              </NavLink>
            </li>
            <li className="py-2 px-3">
              <NavLink
                className="px-3 py-2 text-[#212121] border-[1.5px] rounded-[20px] border-transparent transition-all duration-300 client"
                to={"/products"}
              >
                Products
              </NavLink>
            </li>
            <li className="py-2 px-3">
              <NavLink
                className="px-3 py-2 text-[#212121] border-[1.5px] rounded-[20px] border-transparent transition-all duration-300 client"
                to={"/favorites"}
              >
                Favorites{" "}
                <sup className="bg-red-500 rounded-full px-1.5 py-[1px] text-white">
                  {favoriteProds.length}
                </sup>
              </NavLink>
            </li>
            <li className="py-2 px-3">
              <NavLink
                className="px-3 py-2 text-[#212121] border-[1.5px] rounded-[20px] border-transparent transition-all duration-300 client"
                to={"/cart"}
              >
                Cart
              </NavLink>
            </li>
            <li className="py-2 px-3 ">
              <button
                className="text-[#212121] border-[1.5px] rounded-[20px] border-transparent transition-all duration-300 pt-[1px] client"
                onClick={() => {
                  toggleTheme();
                }}
              >
                {theme == "light" ? (
                  <MdOutlineLightMode className="w-5 h-5" />
                ) : (
                  <MdOutlineDarkMode className="w-5 h-5" />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
