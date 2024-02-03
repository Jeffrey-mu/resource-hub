import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Outlet } from "react-router-dom";
// import Breadcrumbs from "@/components//common/Breadcrumbs";

function Layout() {
  return (
    <>
      <Header />
      {/* <Breadcrumbs /> */}
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
