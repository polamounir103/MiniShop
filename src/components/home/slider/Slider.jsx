import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideCard from "./SliderCard";
import { SliderData } from "../../../utils/products";

const SliderHome = () => {
  const settings = {
    nav: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <section className="homeSlide bg-slate-100 flex justify-center items-center">
      <div className="w-[100%] md:w-[85%] lg:w-[80%] min-h-[50vh] m-auto pt-[150px] pb-20 ">
        <div className="w-full overflow-hidden">
          <Slider {...settings}>
            {SliderData.map((value, index) => {
              return (
                <SlideCard
                  key={index}
                  title={value.title}
                  cover={value.cover}
                  desc={value.desc}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SliderHome;
