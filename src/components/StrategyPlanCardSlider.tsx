import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StrategyPlanCard from "./StrategyPlanCard";

const StrategyPlanCardSlider = () => {
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
        <StrategyPlanCard/>
        <StrategyPlanCard/>
        <StrategyPlanCard/>
        <StrategyPlanCard/>
        <StrategyPlanCard/>
        <StrategyPlanCard/>
        <StrategyPlanCard/>
      </Slider>
    </div>
  );
};

export default StrategyPlanCardSlider;
