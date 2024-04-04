import { MdArrowOutward } from "react-icons/md";

export const RegisteredOrSubmittedEventCard = () => {
  return (
    <div className="border px-4 py-2 flex items-center justify-center relative flex-col gap-4 rounded-md hover:border-yellow hover:text-yellow transition-all cursor-pointer">
      <span className="absolute top-2 right-2">
        <MdArrowOutward size={20} />
      </span>
      <div className="font-bold text-base">Neon Da Fiesta</div>
      <div className="flex justify-between w-full text-xs text-gray-200">
        <span>12 Nov 23</span>
        <span>7 PM</span>
        <span>St. Stephens College</span>
      </div>
    </div>
  );
};
