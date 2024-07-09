import { layout } from "../styles";

const ProjectOverview = ({ text, banner_image }: { text: string, banner_image: string }) => {
  return (
    <section className={`bg-white ${layout.section} relative`}>
      <img src={`/src/assets/${banner_image}`} className={`object-cover w-full h-[400px] mb-4 md:mb-12`}/>
      <div className="grid lg:grid-cols-[230px_1fr] gap-4">
        <div>
          <h2 className="font-barlow font-bold text-3xl text-center md:text-left">
            Project Overview
          </h2>
        </div>
        <div>
          <p className="w-full font-manrope leading-loose text-center md:text-left">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
