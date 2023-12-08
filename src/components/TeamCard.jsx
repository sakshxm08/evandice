import { team_card_img } from "../assets/images/images";

const TeamCard = () => {
  return (
    <div className="w-full bg-gray-100 rounded flex flex-col gap-2">
      <img src={team_card_img} alt="" />
      <div className="flex flex-col items-center justify-center py-4 px-4 gap-4 text-black">
        <h3 className="font-medium">Lorem ipsum dolor sit amet</h3>
        <div className="text-sm font-light">
          Lorem ipsum dolor sit amet consectetur. Vivamus felis blandit egestas
          sit. Tristique amet id enim imperdiet commodo odio tellus. Diam mattis
          in pretium eleifend. Cras sed at quam amet elementum justo maecenas.
        </div>
        <button className="mt-8 text-sm font-light mb-4 hover:underline underline-offset-4">
          Read More
        </button>
      </div>
    </div>
  );
};

export default TeamCard;
