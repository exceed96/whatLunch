import "./App.css";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import { Analytics } from "@vercel/analytics/react";

function App() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/dist/sw.js").then((registration) => {
          registration.onupdatefound = () => {
            const newWorker = registration.installing;
            if (!newWorker) return;
            newWorker.onstatechange = () => {
              if (
                newWorker.state === "installed" &&
                navigator.serviceWorker.controller
              ) {
                if (confirm("새 버전이 있습니다. 새로고침 하시겠습니까?")) {
                  window.location.reload();
                }
              }
            };
          };
        });
      });
    }
  }, []);

  return (
    <div className="flex justify-center min-h-svh">
      <RouterProvider router={Router} />
      <Analytics />
    </div>
  );
}

export default App;
