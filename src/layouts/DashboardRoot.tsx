import { Outlet } from "react-router-dom";
import { SideNav, NavBar } from "../components";

const DashboardRoot = () => {
  return (
    <main className="bg-lightgrey h-screen grid grid-cols-[250px_1fr]">
      <aside>
        <SideNav />
      </aside>
      <section className="h-full">
        <Outlet />
      </section>
    </main>
  );
};

export default DashboardRoot;
