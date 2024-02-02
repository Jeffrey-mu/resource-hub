import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
