import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <main className="bg-lightgrey h-screen">
      <Outlet />
    </main>
  );
};

export default Root;
