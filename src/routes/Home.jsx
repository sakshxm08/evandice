import Carousel from "../components/Carousel";

// import { hero_img_1 } from "../assets/images/images";
const Home = () => {
  return (
    <div>
      {/* <div className="w-screen object-cover absolute inset-0 -z-50 h-screen  overflow-hidden">
        <img
          src={hero_img_1}
          className="w-full object-bottom -mt-40"
          alt="hero image"
        />
      </div> */}
      <Carousel />
    </div>
  );
};

export default Home;
