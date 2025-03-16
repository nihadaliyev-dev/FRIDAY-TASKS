import { Link, NavLink } from "react-router-dom";
// import { FaHeart, FaRegHeart } from "react-icons/fa";

import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

const Header = () => {
  const toggleTheme = "salam";
  const theme = "dark";
  return (
    <div className="flex justify-center w-full fixed bg-[#fbfbfb40] header__main">
      <div className="container">
        <div className="flex items-center justify-between py-5 px-3 header">
          <div>
            <Link className="text-3xl font-bold" to={"/"}>
              LOGO
            </Link>
          </div>
          <div>
            <ul className="flex gap-4">
              <li className="px-1 py-2">
                <NavLink
                  className="px-3 py-2 rounded-full transform-all duration-400"
                  to={"/books"}
                >
                  Books
                </NavLink>
              </li>
              <li className="px-1 py-2">
                <NavLink
                  className="px-3 py-2 rounded-full transform-all duration-400"
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li className="px-1 py-2">
                <NavLink
                  className="px-3 py-2 rounded-full transform-all duration-400"
                  to={"/about"}
                >
                  About
                </NavLink>
              </li>
              <li className="px-1 py-2">
                <NavLink
                  className="px-3 py-2 rounded-full transform-all duration-400"
                  to={"/contact"}
                >
                  Contact
                </NavLink>
              </li>
              <li className="px-1 py-2">
                <NavLink
                  className="px-3 py-2 rounded-full transform-all duration-400"
                  to={"/favorites"}
                >
                  Favorites
                </NavLink>
              </li>
              <li className="px-1">
                <button
                  className="px-3 py-3 rounded-full shadow-lg"
                  onClick={toggleTheme}
                >
                  {theme === "light" ? (
                    <MdOutlineLightMode />
                  ) : (
                    <MdOutlineNightlight />
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
