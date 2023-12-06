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
      <div className="flex flex-col items-center justify-center py-6 max-w-7xl w-fit mx-auto gap-16">
        <h1 className="uppercase text-title font-title">
          join a{" "}
          <span className=" bg-gradient-to-br from-[#FF4545] from-20% via-[#DF9438] to-[#FBBC05] bg-clip-text text-transparent">
            community
          </span>{" "}
          of thousands
        </h1>
        <div className="grid grid-cols-3 w-full">
          <div className="flex flex-col gap-2">
            <div className="text-7xl font-medium">11.5M+</div>
            <div>active accounts</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-7xl font-medium">21.9M</div>
            <div>registrations till date</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-7xl font-medium">&#8377; 4,000</div>
            <div>avergae cose per ticket</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
