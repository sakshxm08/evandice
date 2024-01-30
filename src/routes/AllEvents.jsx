import EventCarousel from "../components/EventCarousel";
import Search from "../components/Search";

export const AllEvents = () => {
  const types = [
    { heading: "featured events around you", type: "around", events: [] },
    { heading: "dance", type: "dance", events: [] },
    { heading: "comedy", type: "comedy", events: [] },
  ];
  return (
    <>
      <div className="w-4/5">
        <Search />
      </div>
      {types.map((type, index) => (
        <div key={index} className="w-full flex flex-col gap-10">
          <h2 className="font-title w-4/5 mx-auto text-4xl uppercase">
            {type.heading}
          </h2>
          <EventCarousel />
        </div>
      ))}
    </>
  );
};
