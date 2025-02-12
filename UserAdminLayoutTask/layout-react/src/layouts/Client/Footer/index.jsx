const Footer = () => {
  return (
    <footer className="flex justify-center shadow-lg py-5">
      <div className="container">
        <div className="flex px-5 justify-between items-center header">
          <h3 className="text-2xl font-bold">MyProd-Footer</h3>
          {/* <ul className="flex gap-3">
            <li className="py-2 px-3">
              <NavLink
                className="px-3 py-2 text-[#212121] border-[2px] rounded-[8px] border-transparent transition-all duration-300 client"
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li className="py-2 px-3">
              <NavLink
                className="px-3 py-2 text-[#212121] border-[2px] rounded-[8px] border-transparent transition-all duration-300 client"
                to={"/about"}
              >
                About
              </NavLink>
            </li>
            <li className="py-2 px-3">
              <NavLink
                className="px-3 py-2 text-[#212121] border-[2px] rounded-[8px] border-transparent transition-all duration-300 client"
                to={"/products"}
              >
                Products
              </NavLink>
            </li>
          </ul> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
