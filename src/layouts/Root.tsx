import { Outlet } from "react-router-dom";
import { NavBar } from "../components";

const Root = () => {
  return (
    <main className="bg-lightgrey h-screen">
      <section className="h-full grid grid-cols-1 grid-rows-[100px_1fr]">
        <NavBar />
        <Outlet />
      </section>
    </main>
  );
};

export default Root;
