import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";
import TasteSurveyPage from "./pages/TasteSurveyPage";
import NotFound from "./components/Error/NotFound";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/result",
        element: <ResultPage />,
      },
      {
        path: "/taste",
        element: <TasteSurveyPage />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default Router;
