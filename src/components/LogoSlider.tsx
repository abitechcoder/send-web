import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  AktionLogo,
  AmplifyLogo,
  BMZLogo,
  CareLogo,
  ChristianLogo,
  CISULogo,
  SierraLeonCOA,
  ConcernGreenLogo,
  EUFlag,
  FAOLogo,
  GIZLogo,
  GOILogo,
  ImagineLogo,
  IUGLogo,
  SABILogo,
  SolidaridadLogo,
  TerraTechLogo,
  TrocaireLogo,
  TrustAfricaLogo,
  UKLogo,
  UNDPLogo,
  UNWomenLogo,
  USAIDLogo,
  WeltLogo,
  WHILogo,
} from "../assets/logos";

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
        <div className="h-[50px] lg:h-[70px]">
          <img
            src={AktionLogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px] lg:h-[70px]">
          <img
            src={AmplifyLogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px] lg:h-[70px]">
          <img
            src={BMZLogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px] lg:h-[70px]">
          <img
            src={CareLogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px] lg:h-[70px]">
          <img
            src={ChristianLogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px] lg:h-[70px]">
          <img
            src={CISULogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px] lg:h-[70px]">
          <img
            src={SierraLeonCOA}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px] lg:h-[70px]">
          <img
            src={ConcernGreenLogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px] lg:h-[70px]">
          <img
            src={EUFlag}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px] lg:h-[70px]">
          <img
            src={FAOLogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px] lg:h-[70px]">
          <img
            src={GIZLogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px] lg:h-[70px]">
          <img
            src={GOILogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px] lg:h-[70px]">
          <img
            src={ImagineLogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px] lg:h-[70px]">
          <img
            src={IUGLogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px] lg:h-[70px]">
          <img
            src={SABILogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px] lg:h-[70px]">
          <img
            src={SolidaridadLogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px] lg:h-[70px]">
          <img
            src={TerraTechLogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px] lg:h-[70px]">
          <img
            src={TrocaireLogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px] lg:h-[70px]">
          <img
            src={TrustAfricaLogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px] lg:h-[70px]">
          <img
            src={UKLogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px] lg:h-[70px]">
          <img
            src={UNDPLogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px] lg:h-[70px]">
          <img
            src={UNWomenLogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px] lg:h-[70px]">
          <img
            src={USAIDLogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px] lg:h-[70px]">
          <img
            src={WeltLogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>

        <div className="h-[50px] lg:h-[70px]">
          <img
            src={WHILogo}
            className="h-full object-contain"
            alt="Partner Logo"
          />
        </div>
      </Slider>
    </div>
  );
};

export default LogoSlider;
