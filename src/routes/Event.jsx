import { useState } from "react";
import EvRightArrow from "../assets/icons/EvRightArrow";
import EvLeftArrow from "../assets/icons/EvLeftArrow";
import EventCarousel from "../components/EventCarousel";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEventsContext } from "../hooks/useEventsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { apiConnector } from "../services/apiConnector";
import { endpoints } from "../services/apiRoutes";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import { gallery_1, gallery_2, gallery_3 } from "../assets/images/images";

const Event = () => {
  const otherEvents = [];
  for (let i = 0; i < 8; i++) {
    otherEvents.push({ _id: i });
  }

  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  const Events = useEventsContext();
  const Auth = useAuthContext();

  const [isLoading, setIsLoading] = useState(false);

  const event = Events[
    params.type === "events" ? "all_events" : "all_fests"
  ].find((event) => event._id === params.id);
  if (event) {
    event.name =
      event?.[params.type === "events" ? "eventName" : "festName"] ||
      "Neon Da Fiesta";
    event.fees =
      event.registrationFees === "free" ? "Free" : "Rs. " + event.price;
  }
  // const categories = ["music", "art", "paid", "offline", "fun"];

  const [images] = useState(
    event?.mainPoster
      ? [...[event?.mainPoster], ...event["pictures"]]
      : [gallery_1, gallery_2, gallery_3]
  );

  const [currImg, setCurrImg] = useState(images[0]);
  const [allImgs, setAllImgs] = useState(false);

  // const colors = ["red", "lime", "fuchsia", "aqua"];

  const handleRegister = (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (Auth.user) {
      if (Auth.user.contactNo) {
        apiConnector(
          "POST",
          endpoints.REGISTER.SENDCONMAIL,
          {
            email: Auth.user.email,
            username: Auth.user.name,
            address: event.address,
            [params.type === "events" ? "eventprice" : "festprice"]: event.fees,
            time: "7:00 PM onwards",
            date: "22nd October 2024",
            [params.type === "events" ? "eventName" : "festname"]: event.name,
            [params.type === "events" ? "eventid" : "festid"]: event._id,
          },
          {
            Authorization: JSON.parse(localStorage.getItem("token")),
            "Content-Type": "application/json",
          }
        )
          .then(() => {
            toast.success(
              "Registered for " +
                event[params.type === "events" ? "eventName" : "festName"],
              {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              }
            );
            navigate("/");
          })
          .catch((err) => {
            toast.error(err.response.data.message, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          })
          .finally(() => setIsLoading(false));
      } else {
        toast.error("Please fill all your details", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate("/profile", { state: { redirect: location.pathname } });
      }
    } else {
      toast.error("Please login", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/auth/login", { state: { redirect: location.pathname } });
    }
  };

  return (
    <>
      <div className="grid tablets:grid-cols-5 gap-y-6 gap-x-4 w-full">
        <div className="tablets:col-span-3 flex flex-col gap-3">
          <h1 className="text-5xl font-bold drop-shadow">
            {event?.name || "Neon Da Fiesta"}
          </h1>
          {/* <div className="flex gap-2">
            {categories.map((category, index) => (
              <span
                key={index}
                style={{
                  "--variable-color": colors[index % 4],
                  color: "var(--variable-color)",
                  borderColor: "var(--variable-color)",
                }}
                className="py-0 px-3 rounded-md border text-sm uppercase drop-shadow-2xl"
              >
                {category}
              </span>
            ))}
          </div> */}
        </div>
        <div className="tablets:col-span-2 flex tablets:items-end tablets:justify-end flex-col gap-1">
          <h1 className="text-xl font-semibold">
            {event?.address || "St. Stephens College"}
          </h1>
          <h3 className="text-sm">
            {event?.city || "New Delhi"}, {event?.state || "Delhi"}
          </h3>
        </div>
        <div className="tablets:col-span-3 flex flex-col w-full h-max">
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
          <div className="w-full relative">
            {!allImgs ? (
              <div className="flex flex-wrap gap-4 my-10 w-full tablets:h-24 items-start pt-1 px-1">
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
        <div className="tablets:col-span-2 w-full max-h-[600px] bg-black/60 py-12 px-4 rounded-lg flex flex-col items-center gap-4 justify-start">
          <div className="flex flex-col items-center justify-center gap-4">
            <h4 className="font-semibold text-yellow text-xl">Date</h4>
            <div className="flex flex-col gap-2 items-center justify-center text-xl font-medium">
              <span>
                {event?.dates.startDate === event?.dates.endDate
                  ? dayjs(event?.dates.startDate).format("D MMMM YYYY")
                  : dayjs(event?.dates.startDate).format("D MMM YYYY") +
                    "-" +
                    dayjs(event?.dates.endDate).format("D MMM YYYY")}
                {/* 22nd October 2024 */}
              </span>

              {/* <span>7 PM onwards</span> */}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h4 className="font-semibold text-yellow text-xl">Event Venue</h4>

            <div className="flex gap-3 items-center justify-center font-light text-center text-lg">
              {event?.address || "Audiotorium No. 7, St. Stephens North Campus"}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            <h4 className="font-semibold text-yellow flex gap-1 items-center justify-center text-xl">
              Ticket Price
              <span className="text-xs">(subject to change)</span>
            </h4>
            <div className="flex gap-3 items-center justify-evenly text-2xl font-medium w-full mx-auto text-center">
              {event?.fees || "Free"}
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center w-full tablets:mt-4 mt-10">
            {/* <button className="w-2/3 py-3 border-2 border-yellow text-yellow hover:bg-yellow/20 hover:text- font-semibold text-center rounded-lg transition-all">
              Save this event for later
            </button> */}
            <button
              onClick={handleRegister}
              disabled={isLoading}
              className="w-2/3 py-3 border-2 border-yellow bg-yellow text-black hover:opacity-70 font-semibold text-center rounded-lg transition-all"
            >
              {isLoading ? "Registering..." : "Register for the event"}
            </button>
          </div>
        </div>
      </div>

      {event?.desc && (
        <div className="flex flex-col gap-4 my-10">
          <h3 className="text-2xl font-semibold text-yellow capitalize">
            More About <span className="text-white">Neon Da Fiesta</span>
          </h3>
          <div>
            <div>
              Unleash your inner music lover and prepare to be captivated by the
              magic of live vocals at Singer&apos;s Night!
            </div>
            <div>
              This intimate and enchanting event will showcase the diverse
              talents of local singers, each bringing their unique voice and
              style to the stage. Immerse yourself in a spectrum of musical
              genres, from soulful ballads and heart-thumping anthems to
              electrifying pop tunes and soothing jazz melodies.
            </div>
            <div>
              Here&apos;s what awaits you:
              <ul className="list-inside">
                <li className=" list-disc">
                  Mesmerizing performances by a lineup of talented singers
                </li>
                <li className=" list-disc">
                  A captivating journey through various musical genres
                </li>
                <li className=" list-disc">
                  An intimate setting for an unforgettable experience
                </li>
                <li className=" list-disc">
                  Food and beverages available for purchase
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col w-full items-center justify-center gap-8 mt-8">
        <h3 className="text-3xl font-semibold capitalize text-yellow">
          More like <span className="text-white">{event?.name}</span>
        </h3>
        <EventCarousel events={otherEvents} />
      </div>
    </>
  );
};

export default Event;
