import { useState } from "react";
import {
  background,
  card_img,
  competition_img,
  gallery_1,
  gallery_2,
  gallery_3,
  gallery_4,
  gallery_bg,
  hero_img_1,
  hero_img_2,
  hero_img_3,
} from "../assets/images/images";
import EvRightArrow from "../assets/icons/EvRightArrow";
import EvLeftArrow from "../assets/icons/EvLeftArrow";
import EventCarousel from "../components/EventCarousel";

const Event = () => {
  const categories = ["music", "art", "paid", "offline"];
  const images = [
    gallery_1,
    gallery_2,
    gallery_3,
    gallery_4,
    hero_img_2,
    hero_img_1,
    hero_img_3,
    card_img,
    background,
    competition_img,
    gallery_bg,
  ];
  const [currImg, setCurrImg] = useState(images[0]);
  const [allImgs, setAllImgs] = useState(false);

  const colors = [
    "red",
    "lime",
    "fuchsia",
    "aqua",
    "yellow",
    "aquamarine",
    "beige",
    "blueviolet",
    "chartreuse",
    "coral",
    "cornflowerblue",
    "crimson",
    "darkorange",
    "darkseagreen",
    "darkturquoise",
    "deeppink",
    "deepskyblue",
    "greenyellow",
    "lightpink",
    "lightsalmon",
    "lightskyblue",
    "mediumaquamarine",
    "mediumspringgreen",
    "mediumturquoise",
    "moccasin",
    "orange",
  ];

  return (
    <div className="relative ">
      <div className="absolute top-0 left-0 h-full -z-50 overflow-hidden w-screen">
        <img
          src={background}
          alt="background"
          className="w-screen h-auto brightness-90"
        />
        <div className="absolute inset-0 h-full w-screen bg-gradient-to-t from-50% from-black"></div>
      </div>
      <div className="py-32 max-w-7xl w-11/12 mx-auto ">
        <div className="grid grid-cols-5 gap-y-6 gap-x-4">
          <div className="col-span-3 flex flex-col gap-3">
            <h1 className="text-5xl font-bold drop-shadow">Neon Da Fista</h1>
            <div className="flex gap-2">
              {categories.map((category, index) => (
                <span
                  key={index}
                  style={{
                    "--variable-color":
                      colors[Math.floor(Math.random() * colors.length)],
                    color: "var(--variable-color)",
                    borderColor: "var(--variable-color)",
                  }}
                  className="py-0 px-3 rounded-md border text-sm uppercase drop-shadow-2xl"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
          <div className="col-span-2 flex items-end justify-end flex-col gap-1">
            <h1 className="text-xl font-semibold">St. Stephens College</h1>
            <h3 className="text-sm">New Delhi</h3>
          </div>
          <div className="col-span-3 flex flex-col w-full h-max">
            <div className="w-full aspect-video relative rounded-lg overflow-hidden bg-black/60 backdrop-blur object-fit flex justify-center items-center">
              <img src={currImg} className="h-full  object-fit" alt="" />
              <span className="absolute top-2 right-2 bg-yellow/60 backdrop-blur text-xs px-2 py-1 text-black rounded-md">
                {images.indexOf(currImg) + 1}/{images.length}
              </span>
              {images.indexOf(currImg) !== 0 && (
                <div
                  className={`absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer`}
                  onClick={() =>
                    images.indexOf(currImg) !== 0 &&
                    setCurrImg(images[images.indexOf(currImg) - 1])
                  }
                >
                  <EvLeftArrow width={20} />
                </div>
              )}
              {images.indexOf(currImg) !== images.length - 1 && (
                <div
                  className={`absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer`}
                  onClick={() =>
                    images.indexOf(currImg) !== images.length - 1 &&
                    setCurrImg(images[images.indexOf(currImg) + 1])
                  }
                >
                  <EvRightArrow width={20} />
                </div>
              )}
            </div>
            <div className="w-full h-fi relative">
              {!allImgs ? (
                <div className="flex gap-4 my-10 w-full h-24 items-start pt-1 px-1">
                  {images.slice(0, 5).map((image, index) => (
                    <div
                      key={index}
                      onClick={() => setCurrImg(image)}
                      className={`h-20 aspect-square bg-black/40 hover:outline-white outline ${
                        currImg === image ? "outline-white" : "outline-gray-600"
                      } cursor-pointer transition-all`}
                    >
                      <img src={image} alt="" className="h-full object-cover" />
                    </div>
                  ))}
                  {images.length > 6 && (
                    <>
                      <div
                        onClick={() => {
                          setAllImgs(true);
                        }}
                        className="h-20 hover:outline-white hover:text-white aspect-square relative text-2xl cursor-pointer font-light bg-black/60 flex items-center justify-center outline text-gray-300 transition-all outline-gray-600"
                      >
                        +{images.length - 5}
                        <img
                          src={images[5]}
                          className="absolute inset-0 w-full h-full -z-10"
                          alt=""
                        />
                      </div>
                    </>
                  )}
                  {images.length === 6 && (
                    <div
                      key={images[5]}
                      onClick={() => setCurrImg(images[5])}
                      className={`h-20 aspect-square bg-black/40 hover:outline-white outline ${
                        currImg === images[5]
                          ? "outline-white"
                          : "outline-gray-600"
                      } cursor-pointer transition-all`}
                    >
                      <img
                        src={images[5]}
                        alt=""
                        className="h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-wrap gap-4 my-10 w-fit  h-fit items-start pt-1 px-1 relative">
                  <span
                    className="absolute right-1 -top-6 text-xs hover:underline cursor-pointer"
                    onClick={() => setAllImgs(false)}
                  >
                    Collapse
                  </span>
                  {images.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => setCurrImg(image)}
                      className={`h-20 aspect-square bg-black/40 hover:outline-white outline ${
                        currImg === image ? "outline-white" : "outline-gray-600"
                      } cursor-pointer transition-all`}
                    >
                      <img src={image} alt="" className="h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="col-span-2 w-full max-h-[600px] bg-black/60 p-4 rounded-lg flex flex-col items-center justify-evenly">
            <div className="flex flex-col items-center justify-center gap-4 ">
              <h4 className="font-semibold text-yellow text-xl">
                Date and Time
              </h4>
              <div className="flex flex-col gap-2 items-center justify-center text-xl font-medium">
                <span>22nd October 2024</span>

                <span>7 PM onwards</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <h4 className="font-semibold text-yellow text-xl">Event Venue</h4>

              <div className="flex gap-3 items-center justify-center font-light text-center text-lg">
                Audiotorium No. 7, St. Stephens North Campus
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 w-full">
              <h4 className="font-semibold text-yellow flex gap-1 items-center justify-center text-xl">
                Ticket Price
                <span className="text-xs">(subject to change)</span>
              </h4>
              <div className="flex gap-3 items-center justify-evenly text-2xl font-medium w-full mx-auto text-center">
                <span>Rs. 4,200</span>
                <span>Rs. 1,100</span>
                <span>Rs. 850</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center w-full">
              <button className="w-2/3 py-3 border-2 border-yellow text-yellow hover:bg-yellow/20 hover:text- font-semibold text-center rounded-lg transition-all">
                Save this event for later
              </button>
              <button className="w-2/3 py-3 border-2 border-yellow bg-yellow text-black hover:opacity-70 font-semibold text-center rounded-lg transition-all">
                Register for the event
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 my-10">
          <h3 className="text-2xl font-semibold text-yellow capitalize">
            More About <span className="text-white">Neon Da Fiesta</span>
          </h3>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
            delectus consequatur libero architecto temporibus magnam omnis
            nostrum vel officiis reprehenderit placeat quos nemo, harum,
            doloribus quisquam ratione blanditiis iure voluptatum. Ullam, ipsam
            dolorem aliquid, eaque neque ipsa at illo odio hic expedita, a omnis
            alias ut quisquam fugiat culpa in laboriosam sit impedit quos
            quibusdam iste qui adipisci! Fuga nisi fugit a non, illo quibusdam
            ratione repellat maxime explicabo itaque! Blanditiis ducimus sunt
            eum animi reiciendis dolorum iusto, mollitia natus id temporibus
            nisi commodi sapiente, nam voluptatibus, repudiandae illo! Dolorum
            quod accusamus eveniet nisi a earum rerum asperiores autem optio.
          </div>
        </div>

        <div className="flex flex-col w-full items-center justify-center gap-8">
          <h3 className="text-3xl font-semibold capitalize text-yellow">
            More like <span className="text-white">Neon Da Fiesta</span>
          </h3>
          <EventCarousel />
        </div>
      </div>
    </div>
  );
};

export default Event;
