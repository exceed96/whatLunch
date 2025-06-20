import "./App.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="flex justify-center min-h-svh">
      <RouterProvider router={Router} />
      <Analytics />
    </div>
  );
}

export default App;
