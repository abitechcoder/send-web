import DirectorCard from "./DirectorCard";
import { layout, styles } from "../styles";
import { directors } from "../constants";
import { useEffect, useState } from "react";
import { Director } from "../types";

const DirectorInfo = ({ director }: { director: Director | null }) => {
  console.log("Director Selected:", director);
  return (
    <section
      className={`${layout.section} bg-graybg bg-[url(/src/assets/team-bg.png)] bg-center`}
    >
      <div className="grid grid-cols-5 gap-8 mb-8">
        <div
          className={`col-span-5 md:col-span-2 w-full h-[350px] lg:h-[400px]`}
        >
          <img
            src={`/src/assets/${director?.image}`}
            className="object-cover object-center w-full h-full"
            alt=""
          />
        </div>
        <div className="hidden md:block w-full h-[350px] lg:h-[400px]">
          <img
            src={`/src/assets/${director?.image}`}
            className="object-cover object-center w-full h-full"
            alt=""
          />
        </div>
        <div className="hidden md:block col-span-2 w-full h-[350px] lg:h-[400px]">
          <img
            src={`/src/assets/${director?.image}`}
            className="object-cover object-center w-full h-full"
            alt=""
          />
        </div>
      </div>
      <div className="py-8">
        <div>
          <h2 className={`${styles.heading3} text-secondary text-left`}>
            Who We Are
          </h2>
          <h2
            className={`${styles.heading1} md:leading-relaxed lg:leading-[70px] text-left text-black uppercase`}
          >
            {director?.name}
          </h2>
        </div>
        <p className="w-full text-left leading-relaxed">{director?.text}</p>
      </div>
      <div className="pt-10">
        <div>
          <h2 className={`${styles.heading3} text-secondary text-left`}>
            Who We Are
          </h2>
          <h2
            className={`${styles.heading1} md:leading-relaxed lg:leading-[70px] text-left text-black uppercase`}
          >
            BOARD OF DIRECTORS
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-10 mt-8 pb-8">
          {directors.map((director) => (
            <DirectorCard
              key={director.id}
              id={director.id}
              name={director?.name}
              title={director.title}
              image={director.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectorInfo;
