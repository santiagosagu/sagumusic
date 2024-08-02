import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ErrorPage from "../page/ErrorPage";
import Login from "../page/login/Login";
import Dashboard from "../modules/dashboard/Dashboard";

const useRouterApp = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        // {
        //   path: '/usuarios',
        //   element: <Users />,
        // },
        // {
        //   path: '/paises',
        //   element: <CountriesModule />,
        // },
        // {
        //   path: '/materiales',
        //   element: <MaterialsModule />,
        // },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
  ]);

  return router;
};

export default useRouterApp;
