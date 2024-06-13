import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  IrishAidLogo,
  GizLogo,
  UndpLogo,
  FedLogo,
  SabiLogo,
  SolidaridadLogo,
  TerraTechLogo,
} from "../assets";

const LogoSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="h-[50px]">
          <img
            src={IrishAidLogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>
        <div className="h-[50px]">
          <img
            src={GizLogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px]">
          <img
            src={FedLogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px]">
          <img
            src={UndpLogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px]">
          <img
            src={SabiLogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px]">
          <img
            src={SolidaridadLogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px]">
          <img
            src={TerraTechLogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>
      </Slider>
    </div>
  );
};

export default LogoSlider;
