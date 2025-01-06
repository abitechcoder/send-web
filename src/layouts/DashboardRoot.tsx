import { Outlet, useNavigation } from "react-router-dom";
import { SideNav } from "../components";
import { Spinnner } from "../assets";

const DashboardRoot = () => {
  const { state: navigationState } = useNavigation(); // Destructure navigation state
  return (
    <main className="bg-lightgrey h-screen grid md:grid-cols-[250px_1fr] overflow-hidden">
      <aside className="hidden md:block overflow-y-auto">
        <SideNav />
      </aside>
      {/* Show loading state while data is loading */}
      {navigationState === "loading" ? (
        <div className="flex flex-col justify-center items-center h-full bg-white">
          <img src={Spinnner} className="h-8 w-8" alt="" />
          <p>Loading data...</p>
        </div>
      ) : (
        <section className="overflow-y-auto">
          <Outlet />
        </section>
      )}
    </main>
  );
};

export default DashboardRoot;
