import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Outlet } from "react-router-dom";
// import Breadcrumbs from "@/components//common/Breadcrumbs";
import BackToUp from "@uiw/react-back-to-top";
function Layout() {
  return (
    <>
      <Header />
      {/* <Breadcrumbs /> */}
      <div className="container">
        <Outlet />
        <BackToUp>Top</BackToUp>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
