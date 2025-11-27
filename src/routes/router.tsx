import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import App from "../App";
import { ROUTE_PATH } from "./routePath";

function Wrapper() {
  return <Outlet />;
}
const routes = [
  {
    Component: Wrapper,
    children: [{ path: ROUTE_PATH.MAIN, Component: App }],
  },
];

const router = createBrowserRouter(routes);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
