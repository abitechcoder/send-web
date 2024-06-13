import { Outlet } from "react-router-dom";
import { SideNav, NavBar } from "../components";

const DashboardRoot = () => {
  return (
    <main className="bg-lightgrey h-screen grid grid-cols-[250px_1fr]">
      <aside>
        <SideNav />
      </aside>
      <section className="h-full grid grid-cols-1 grid-rows-[100px_1fr]">
        <NavBar />
        <Outlet />
      </section>
    </main>
  );
};

export default DashboardRoot;
