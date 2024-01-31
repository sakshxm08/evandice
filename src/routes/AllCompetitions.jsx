import EventCarousel from "../components/EventCarousel";
import Search from "../components/Search";

export const AllCompetitions = () => {
  const types = [
    {
      heading: "featured competitions around you",
      type: "around",
      competitions: [],
    },
    { heading: "workshops", type: "workshops", competitions: [] },
    { heading: "hackathons", type: "hackathons", competitions: [] },
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
