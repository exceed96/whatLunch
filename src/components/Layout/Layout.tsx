// 레이아웃 컴포넌트

import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div
      className={`p-2 xl:p-8 flex flex-col ${
        pathname === "/" ? "justify-center" : "justify-between"
      } gap-10 min-h-svh h-full w-full xl:w-[50%] bg-white xl:border-l-5 xl:border-r-5 border-gray-200`}
    >
      {pathname !== "/" && <Header />}
      <Outlet />
      <Footer />
    </div>
  );
}
