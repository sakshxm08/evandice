import { Link } from "react-router-dom";
import { competition_img } from "../assets/images/images";

const CompetitionCard = () => {
  return (
    <div className="w-full bg-black/40 backdrop-blur-md flex flex-col items-center justify-center p-4 rounded-xl gap-4 hover:scale-105 hover:rotate-3 duration-300 transition-all ">
      <img src={competition_img} alt="Competitions" />
      <h2 className="font-semibold text-3xl">Hackathons</h2>
      <div className="text-center text-sm">
        Lorem ipsum dolor sit amet consectetur. Enim duis pellentesque lacinia
        sed faucibus at sapien sed. Odio morbi amet ultrices tempus ac sagittis
        risus viverra egestas. Nisl feugiat viverra orci arcu in sit euismod
        nunc sed. Volutpat nibh phasellus vitae habitant ullamcorper facilisi
        habitanterit.
      </div>
      <Link className="hover:underline underline-offset-4">view all</Link>
    </div>
  );
};

export default CompetitionCard;
