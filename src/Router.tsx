import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";
import TasteSurveyPage from "./pages/TasteSurveyPage";

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
    ],
  },
]);

export default Router;
