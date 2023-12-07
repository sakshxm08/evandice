import Slider from "react-slick";
import {
  gallery_1,
  gallery_2,
  gallery_3,
  gallery_4,
  gallery_bg,
  hero_img_1,
  hero_img_2,
  hero_img_3,
} from "../assets/images/images";

const Gallery = () => {
  const images = [
    gallery_1,
    gallery_2,
    gallery_3,
    gallery_4,
    gallery_bg,
    hero_img_1,
    hero_img_2,
    hero_img_3,
  ];

  const settings = {
    dots: false,
    centerMode: true,
    className: "center",
    centerPadding: "60px",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    slidesToShow: 3,
    speed: 2000,
    pauseOnFocus: false,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "linear",
    pauseOnHover: false,
  };
  return (
    // <div className=" h-full overflow-x-hidden relative">
    <Slider {...settings}>
      {images.map((img, index) => (
        <div key={index} className="mx-auto w-11/12">
          <img src={img} alt="" className="w-auto h-[300px] mx-2 shadow-lg" />
        </div>
      ))}
    </Slider>
    // </div>
  );
};

export default Gallery;
