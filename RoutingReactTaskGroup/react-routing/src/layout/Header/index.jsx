import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="flex justify-center shadow-lg shadow-[#21212150]">
      <div className="container">
        <div className="flex items-center justify-between py-2">
          <div>
            <h2 className="text-xl font-bold">Nihad&apos;s Website</h2>
          </div>
          <div>
            <ul className="flex gap-4">
              <li className="p-3">
                <NavLink className="p-3 text-[#212121]" to="/">
                  Home
                </NavLink>
              </li>
              <li className="p-3">
                <NavLink className="p-3 text-[#212121]" to="/posts">
                  Posts
                </NavLink>
              </li>
              <li className="p-3">
                <NavLink className="p-3 text-[#212121]" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
