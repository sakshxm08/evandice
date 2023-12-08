import { gallery_bg, hero_img_2 } from "../assets/images/images";
import Carousel from "../components/Carousel";
import CompetitionCard from "../components/CompetitionCard";
import EventSearches from "../components/EventSearches";
import EventCarousel from "../components/EventCarousel";
import Gallery from "../components/Gallery";
import Search from "../components/Search";

const Home = () => {
  const competitions = ["", "", "", "", ""];
  return (
    <div className="select-none">
      <Carousel />
      <div className="flex flex-col items-center justify-center py-12 gap-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="uppercase text-title font-title">
            featured live events
          </h1>
          <div>
            Lorem ipsum dolor sit amet consectetur. Aliquam dignissim mauris
            velit.
          </div>
        </div>
        <EventCarousel />
      </div>
      <div className="max-w-7xl w-11/12 mx-auto">
        <div className="flex flex-col items-center justify-center py-12 gap-12">
          <h1 className="uppercase text-title font-title">
            join a{" "}
            <span className=" bg-gradient-to-br from-[#FF4545] from-20% via-[#DF9438] to-[#FBBC05] bg-clip-text text-transparent">
              community
            </span>{" "}
            of thousands
          </h1>
          <div className="grid grid-cols-3 w-full items-center">
            <div className="flex flex-col gap-2 w-full items-center">
              <div className="text-7xl font-medium ">11.5M+</div>
              <div>active accounts</div>
            </div>
            <div className="flex flex-col gap-2 w-full items-center">
              <div className="text-7xl font-medium ">21.9M</div>
              <div>registrations till date</div>
            </div>
            <div className="flex flex-col gap-2 w-full items-center">
              <div className="text-7xl font-medium">&#8377;4,000</div>
              <div>avergae cost per ticket</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-12 gap-8">
          <h1 className="uppercase text-title font-title">Competitions</h1>
          <div className="grid grid-cols-3 w-full mx-auto gap-8">
            {competitions.slice(0, 3).map((item, index) => (
              <CompetitionCard key={index} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8 py-12 items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="uppercase text-title font-title">
              Search for events
            </h1>
            <div>
              Lorem ipsum dolor sit amet consectetur. Aliquam dignissim mauris
              velit.
            </div>
          </div>
          <Search />
          <EventSearches />
        </div>
      </div>

      <div className="flex gap-16 py-8 items-center justify-between bg-black px-20">
        <div className="flex gap-16 flex-col">
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl font-semibold leading-normal">
              Boost your visibility by registering your events here
            </h3>
            <div>
              Lorem ipsum dolor sit amet consectetur. Odio enim ac venenatis sed
              vulputate volutpat sit.
            </div>
          </div>
          <button className="w-fit px-6 py-3 rounded bg-[#FBBC05] font-medium text-black text-sm hover:bg-[#FBBC05]/80 active:bg-[#FBBC05]/60 transition-all">
            Register a new fest!
          </button>
        </div>
        <img src={hero_img_2} alt="" className="w-1/3" />
      </div>
      <div className="w-full h-[420px] relative  overflow-y-hidden gallery">
        <img
          src={gallery_bg}
          alt="Background"
          className="absolute inset-0 w-full h-auto object-cover mt-48"
        />
        <div className="mt-10 overflow-visible">
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default Home;
