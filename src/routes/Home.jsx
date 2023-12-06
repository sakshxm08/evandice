import Carousel from "../components/Carousel";
import FeaturedCarousel from "../components/FeaturedCarousel";

const Home = () => {
  return (
    <>
      <Carousel />
      <div className="flex flex-col items-center justify-center py-10 gap-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="uppercase text-title font-title">
            featured live events
          </h1>
          <div>
            Lorem ipsum dolor sit amet consectetur. Aliquam dignissim mauris
            velit.
          </div>
        </div>
        <FeaturedCarousel />
      </div>
    </>
  );
};

export default Home;
