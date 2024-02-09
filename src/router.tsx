import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/common/Layout";
import { menuItems } from "@/lib/constant";

function formatMenuItems() {
  const router = menuItems.flatMap(({ path, element, children }) => {
    if (element && path) return { path, element };
    if (children) {
      return children.flatMap(({ path, element }) => {
        if (element && path) return { path, element };
        return [];
      });
    }
    return [];
  });
  return router;
}
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: formatMenuItems(),
  },
]);

export default router;
