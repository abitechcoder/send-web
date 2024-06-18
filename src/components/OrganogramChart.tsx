import { Organogram } from "../assets";
import { styles, layout } from "../styles";

const OrganogramChart = () => {
  return (
    <section className={`bg-white ${layout.section}`}>
      <img src={Organogram} className="w-full" alt="Orgranization Structure" />
    </section>
  );
};

export default OrganogramChart;
