import { NavLink } from "react-router";

const AdminHeader = () => {
  return (
    <header className="bg-gray-900 py-5 flex justify-center">
      <div className="container">
        <div className="header px-5 flex justify-between items-center">
          <div>
            <h2 className="text-white text-2xl font-bold">Admin Panel</h2>
          </div>
          <ul className="flex gap-3">
            <li className="px-3 py-2">
              <NavLink
                className="px-3 py-2 text-[#fbfbfb] border-[2px] rounded-[8px] border-transparent transition-all duration-300 admin"
                to={"/admin"}
                end
              >
                Dashboard
              </NavLink>
            </li>
            <li className="px-3 py-2">
              <NavLink
                className="px-3 py-2 text-[#fbfbfb] border-[2px] rounded-[8px] border-transparent transition-all duration-300 admin"
                to={"/admin/products"}
                end
              >
                Products
              </NavLink>
            </li>
            <li className="px-3 py-2">
              <NavLink
                className="px-3 py-2 text-[#fbfbfb] border-[2px] rounded-[8px] border-transparent transition-all duration-300 admin"
                to={"/admin/products/new"}
                end
              >
                Add Product
              </NavLink>
            </li>
            <li className="px-3 py-2">
              <NavLink
                className="px-3 py-2 text-[#fbfbfb] border-[2px] bg-red-900 rounded-[8px] border-transparent transition-all duration-300 admin"
                to={"/"}
                end
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
