import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="flex justify-center shadow-md shadow-white p-6 ">
      <ul className="flex gap-3">
        <li>
          <NavLink className="px-3 py-2 border-2 rounded-md" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="px-3 py-2 border-2 rounded-md" to={"/about"}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="px-3 py-2 border-2 rounded-md" to={"/contact"}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className="px-3 py-2 border-2 rounded-md" to={"/products"}>
            Products
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
