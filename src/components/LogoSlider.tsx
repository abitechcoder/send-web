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
import { PartnerProps } from "../types";

const LogoSlider = ({ partners }: { partners: PartnerProps[] }) => {
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
        {partners.map((partner) => (
          <div className="h-[50px] lg:h-[70px]" key={partner.id}>
            <img
              src={partner.logo}
              className="h-full object-contain"
              alt={`${partner.name} logo`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;
