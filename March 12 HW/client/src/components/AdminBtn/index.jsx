import React from "react";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const AdminBtn = () => {
  return (
    <NavLink
      to={"/admin"}
      className="rounded-xl text-xl shadow-md p-3 cursor-pointer"
    >
      <FaUser />
    </NavLink>
  );
};

export default AdminBtn;
