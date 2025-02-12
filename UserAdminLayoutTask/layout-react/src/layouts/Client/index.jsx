import Footer from "./Footer";
import { Outlet } from "react-router";
import Header from "./Header";

const ClientLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default ClientLayout;
