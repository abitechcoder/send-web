import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReportCard from "./ReportCard";
import { ReportType } from "../types";

const StrategyPlanCardSlider = ({
  strategicPlans,
}: {
  strategicPlans: ReportType[];
}) => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {strategicPlans?.map((plan) => (
          <ReportCard
            key={plan.id}
            image={plan.image_url}
            title={plan.title}
            report_url={plan.report_url}
          />
        ))}
      </Slider>
    </div>
  );
};

export default StrategyPlanCardSlider;
