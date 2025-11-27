import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import App from "../App";
import { ROUTE_PATH } from "./routePath";
import Animation from "../pages/Animation";
import ToastProvider from "../shared/Toast/ToastProvider";

function Wrapper() {
  return (
    <ToastProvider>
      <Outlet />
    </ToastProvider>
  );
}
const routes = [
  {
    Component: Wrapper,
    children: [
      { path: ROUTE_PATH.MAIN, Component: App },
      { path: ROUTE_PATH.ANIMATION, Component: Animation },
    ],
  },
];

const router = createBrowserRouter(routes);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
