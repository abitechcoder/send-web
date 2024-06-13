import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <main className="bg-lightgrey h-screen">
      <section className="h-full grid grid-cols-1 grid-rows-[100px_1fr]">
        <Outlet />
      </section>
    </main>
  );
};

export default Root;
