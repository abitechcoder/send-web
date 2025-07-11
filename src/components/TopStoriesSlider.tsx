import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopStoriesCard from "./TopStoriesCard";
// import { CaseStories } from "../constants";
import { TestimonialProps } from "../types";

const TopStoriesSlider = ({ stories }: { stories: TestimonialProps[] }) => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
        {stories.map((story) => (
          <TopStoriesCard
            key={story.id}
            name={story.name}
            text={story.text}
            image={story.image}
          />
        ))}
      </Slider>
    </div>
  );
};

export default TopStoriesSlider;
