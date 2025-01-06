import { NavHeader, TabLists } from "@/src/components";
import { getIdentity } from "@/src/data";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const identity = await getIdentity(1);
  return { identity };
}

const Identity = () => {
  const { identity }: any = useLoaderData();

  return (
    <div className="w-full bg-[#FAFAFA] h-full grid grid-rows-[240px_1fr] lg:grid-rows-[100px_1fr]">
      <div className="p-3 lg:px-8 lg:py-4 bg-white mb-5">
        <NavHeader title="Identity" />
      </div>

      <div className=" p-3 lg:px-8 lg:py-4 overflow-y-scroll">
        <TabLists identity={identity} />
      </div>
    </div>
  );
};

export default Identity;
