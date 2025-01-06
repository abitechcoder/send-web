import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import { Spinnner } from "../assets";

const Root = () => {
  const { state } = useNavigation();

  if (state === "loading") {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-white">
        <img src={Spinnner} className="h-8 w-8" alt="" />
        <p>Loading data...</p>
      </div>
    );
  }
  return (
    <main className="h-screen">
      <ScrollRestoration />
      <Outlet />
    </main>
  );
};

export default Root;
