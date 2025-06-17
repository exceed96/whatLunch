import "./App.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";

function App() {
  return (
    <div className="flex justify-center min-h-svh">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
