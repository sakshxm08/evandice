import { competition_img, hero_img_2 } from "../assets/images/images";
import Carousel from "../components/Carousel";
import CompetitionCard from "../components/CompetitionCard";
import EventSearches from "../components/EventSearches";
import EventCarousel from "../components/EventCarousel";
import Search from "../components/Search";
// import { apiConnector } from "../services/apiConnector";
// import { endpoints } from "../services/apiRoutes";
// import { useState } from "react";
// import { useEffect } from "react";

const Home = () => {
  // const [fests, setFests] = useState([]);
  // useEffect(() => {
  //   apiConnector("GET", endpoints.FESTS.GET_ALL).then((res) => {
  //     setFests(res.data);
  //     console.log(res.data);
  //   });
  // }, []);
  const cardTypes = { NORMAL: "normal", BLUR: "blur" };

  const searches = [
    "Sports",
    "Music",
    "Fest",
    "Movies",
    "Food",
    "Competitions",
    "Hackathons",
    "Fest",
    "Movies",
    "Food",
    "Competitions",
    "Hackathons",
  ];
  const competitions = {
    cultural: [
      {
        img: competition_img,
        name: "Dance",
        // desc: "Lorem ipsum dolor sit amet consectetur. Enim duis pellentesque lacinia sed faucibus at sapien sed. Odio morbi amet ultrices tempus ac sagittis risus viverra egestas. Nisl feugiat viverra orci arcu in sit euismod nunc sed. Volutpat nibh phasellus vitae habitant ullamcorper facilisi habitanterit.",
        desc: "",
        link: "",
      },
      {
        img: competition_img,
        name: "Music",
        // desc: "Lorem ipsum dolor sit amet consectetur. Enim duis pellentesque lacinia sed faucibus at sapien sed. Odio morbi amet ultrices tempus ac sagittis risus viverra egestas. Nisl feugiat viverra orci arcu in sit euismod nunc sed. Volutpat nibh phasellus vitae habitant ullamcorper facilisi habitanterit.",
        desc: "",
        link: "",
      },
      {
        img: competition_img,
        name: "eSports",
        // desc: "Lorem ipsum dolor sit amet consectetur. Enim duis pellentesque lacinia sed faucibus at sapien sed. Odio morbi amet ultrices tempus ac sagittis risus viverra egestas. Nisl feugiat viverra orci arcu in sit euismod nunc sed. Volutpat nibh phasellus vitae habitant ullamcorper facilisi habitanterit.",
        desc: "",
        link: "",
      },
      {
        img: competition_img,
        name: "Hackathons",
        // desc: "Lorem ipsum dolor sit amet consectetur. Enim duis pellentesque lacinia sed faucibus at sapien sed. Odio morbi amet ultrices tempus ac sagittis risus viverra egestas. Nisl feugiat viverra orci arcu in sit euismod nunc sed. Volutpat nibh phasellus vitae habitant ullamcorper facilisi habitanterit.",
        desc: "",
        link: "",
      },
    ],
    competitions: [
      {
        img: competition_img,
        name: "Hackathons",
        // desc: "Ready to be part of a community that thrives on innovation and challenges the boundaries of what's possible? Dive into the world of Hackathons, where code is not just a tool but a force that transforms ideas into reality. Join the digital revolution, and let the lines of code you write today be the keystrokes that shape the future!",
        desc: "",
        link: "",
      },
      {
        img: competition_img,
        name: "Quizes",
        // desc: "From history to pop culture, science to literature, Quiz Competitions cover a spectrum of topics, ensuring there's always something new to learn. Expand your knowledge horizons and become a walking encyclopedia of fun facts!",
        desc: "",
        link: "",
      },
      {
        img: competition_img,
        name: "Brainstormers",
        // desc: "Lorem ipsum dolor sit amet consectetur. Enim duis pellentesque lacinia sed faucibus at sapien sed. Odio morbi amet ultrices tempus ac sagittis risus viverra egestas. Nisl feugiat viverra orci arcu in sit euismod nunc sed. Volutpat nibh phasellus vitae habitant ullamcorper facilisi habitanterit.",
        desc: "",
        link: "",
      },
      {
        img: competition_img,
        name: "Hackathons",
        // desc: "Lorem ipsum dolor sit amet consectetur. Enim duis pellentesque lacinia sed faucibus at sapien sed. Odio morbi amet ultrices tempus ac sagittis risus viverra egestas. Nisl feugiat viverra orci arcu in sit euismod nunc sed. Volutpat nibh phasellus vitae habitant ullamcorper facilisi habitanterit.",
        desc: "",
        link: "",
      },
    ],
  };

  return (
    <div className="select-none">
      <Carousel />
      <div className="flex flex-col items-center justify-center py-12 gap-16 px-8 text-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="uppercase text-3xl sm:text-5xl md:text-title font-title mx-auto">
            featured live events
          </h1>
          <div className="md:text-base text-sm">
            Lorem ipsum dolor sit amet consectetur. Aliquam dignissim mauris
            velit.
          </div>
        </div>
        <EventCarousel />
      </div>
      <div className="max-w-7xl w-11/12 mx-auto">
        <div className="flex flex-col items-center justify-center py-12 gap-12 text-center px-8">
          <h1 className="uppercase text-3xl sm:text-5xl md:text-title font-title mx-auto">
            join a{" "}
            <span className=" bg-gradient-to-br from-[#FF4545] from-20% via-[#DF9438] to-[#FBBC05] bg-clip-text text-transparent">
              community
            </span>{" "}
            of thousands
          </h1>
          <div className="grid grid-cols-1 gap-8 sm:gap-0 sm:grid-cols-3 w-full items-center">
            <div className="flex flex-col gap-2 w-full items-center">
              <div className="text-3xl sm:text-5xl md:text-7xl font-medium ">
                11.5M+
              </div>
              <div>active accounts</div>
            </div>
            <div className="flex flex-col gap-2 w-full items-center">
              <div className="text-3xl sm:text-5xl md:text-7xl font-medium ">
                21.9M
              </div>
              <div>registrations till date</div>
            </div>
            <div className="flex flex-col gap-2 w-full items-center">
              <div className="text-3xl sm:text-5xl md:text-7xl font-medium">
                &#8377;4,000
              </div>
              <div>avergae cost per ticket</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 py-12 items-center justify-center px-8 text-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="uppercase text-3xl sm:text-5xl md:text-title font-title mx-auto">
              Search for fests
            </h1>
            <div className="md:text-base text-sm">
              Discover & stay connected through live streams of your favorite
              music artist!
            </div>
          </div>
          <Search searches={searches} options />
          <EventSearches type={cardTypes.NORMAL} rows={1} />
        </div>
        <div className="flex flex-col gap-8 py-12 items-center justify-center px-8 text-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="uppercase text-3xl sm:text-5xl md:text-title font-title mx-auto">
              Events around you
            </h1>
            <div className="md:text-base text-sm">
              Search for something you love or check out popular events in your
              area.
            </div>
          </div>
          <Search searches={searches} />
          <EventSearches type={cardTypes.NORMAL} rows={1} />
        </div>

        <h1 className="mt-8 uppercase text-3xl sm:text-5xl md:text-title font-title text-center">
          Challenge Yourself
        </h1>
        <div className="flex flex-col items-center justify-center py-4 sm:py-12 gap-4 sm:gap-8">
          <h2 className="uppercase text-2xl sm:text-4xl font-title text-center md:text-left w-full">
            Cultural
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 w-5/6 md:w-full mx-auto gap-8">
            {competitions.cultural.slice(0, 3).map((competition, index) => (
              <CompetitionCard key={index} competition={competition} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-4 sm:py-12 gap-4 sm:gap-8">
          <h2 className="uppercase text-2xl sm:text-4xl font-title text-center md:text-left w-full mt-8">
            Hackathons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 w-5/6 md:w-full mx-auto gap-8">
            {competitions.competitions.slice(0, 3).map((competition, index) => (
              <CompetitionCard key={index} competition={competition} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 py-12 items-center justify-center px-8 text-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="uppercase text-3xl sm:text-5xl md:text-title font-title mx-auto">
              College List
            </h1>
            <div className="md:text-base text-sm">
              Find events and fests happening in your dream college and attend
              them on the go.
            </div>
          </div>
          <Search searches={["IITs", "Medical", "Business"]} />

          <EventSearches type={cardTypes.BLUR} rows={1} />
        </div>
        <div className="flex flex-col gap-8 py-12 items-center justify-center px-8 text-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="uppercase text-3xl sm:text-5xl md:text-title font-title mx-auto">
              Your favorite artists
            </h1>
            <div className="md:text-base text-sm">
              Find your favourite artists performing in events near you and
              attend them with one click.
            </div>
          </div>
          <Search searches={["IITs", "Medical", "Business"]} />

          <EventSearches type={cardTypes.BLUR} rows={1} />
        </div>
        <div className="flex flex-col gap-8 py-12 items-center justify-center px-8 text-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="uppercase text-3xl sm:text-5xl md:text-title font-title mx-auto">
              Laughter is the best medicine
            </h1>
            <div className="md:text-base text-sm">
              Get ready for a night of side-splitting laughter with our
              incredible lineup of hilarious stand-up comedy shows happening
              around you.
            </div>
          </div>
          <Search searches={["IITs", "Medical", "Business"]} />

          <EventSearches type={cardTypes.BLUR} rows={1} />
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row gap-4 sm:gap-6 md:gap-16 py-8 sm:items-center sm:justify-between bg-black px-10 md:px-20">
        <div className="flex gap-8 sm:gap-16 flex-col">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl mobiles:text-3xl md:text-4xl font-semibold sm:leading-normal">
              Boost your visibility by registering your events here
            </h3>
            <div className="text-sm mobiles:text-base">
              Easily register for the events you or your college might be
              organizing and get a wider reach of audience to come and attend
              them.
            </div>
          </div>
          <button className="w-fit px-6 py-3 rounded bg-[#FBBC05] font-medium text-black text-sm hover:bg-[#FBBC05]/80 active:bg-[#FBBC05]/60 transition-all">
            Register a new fest!
          </button>
        </div>
        <img
          src={hero_img_2}
          alt=""
          className="w-full mobiles:w-3/4 sm:w-2/5 md:w-1/3"
        />
      </div>
    </div>
  );
};

export default Home;
