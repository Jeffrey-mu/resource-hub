import { Outlet } from 'react-router-dom'
import BackToUp from '@uiw/react-back-to-top'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
// import Breadcrumbs from "@/components//common/Breadcrumbs";

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
  )
}

export default Layout
