import DirectorCard from "./DirectorCard";
import { layout } from "../styles";
import { directors } from "../constants";
import { useEffect, useState } from "react";

const DirectorInfo = ({ directorId }: { directorId: number }) => {
  const [director, setDirector] = useState({});
  useEffect(() => {
    setDirector(directors[directorId - 1]);
    console.log(directors[directorId - 1]);
  }, [directorId]);

  return (
    <section
      className={`${layout.section} bg-graybg bg-[url(/src/assets/team-bg.png)] bg-center`}
    >
      <div className="grid grid-cols-5 gap-8 mb-8">
        <div
          className={`col-span-5 md:col-span-2 bg-[url('/src/assets/corporate-identity-image.png')] bg-center bg-cover w-full h-[350px]`}
        ></div>
        <div className="hidden md:block bg-[url('/src/assets/corporate-identity-image.png')] bg-center bg-cover w-full h-[350px]"></div>
        <div className="hidden md:block col-span-2 bg-[url('/src/assets/corporate-identity-image.png')] bg-center bg-cover w-full h-[350px]"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-10 mt-8 pb-8">
        {directors.map((director) => (
          <DirectorCard
            key={director.id}
            name={director?.name}
            title={director.title}
            image={director.image}
          />
        ))}
      </div>
    </section>
  );
};

export default DirectorInfo;
