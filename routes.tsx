import WeatherForecast from "@/pages/WeatherForecast";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/components/Layout";
import Homepage from "./src/pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/forecast",
        element: <WeatherForecast />,
      },
    ],
  },
  {},
]);

export default router;
