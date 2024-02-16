import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { PlanCard } from "../../components/PlanCard";
import { FiPlus } from "react-icons/fi";

export const CreatePlan = () => {
  const plans = ["", "", "", "", ""];
  return (
    <div className="w-full flex flex-col gap-16">
      <Link
        to={-1}
        className="absolute left-10 top-36 flex font-bold hover:text-yellow transition-all cursor-pointer justify-center items-center gap-2 text-xl"
      >
        <IoIosArrowRoundBack size={40} />
        Back
      </Link>
      <div className="grid grid-cols-6 w-full gap-4">
        {plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} />
        ))}
        <div className="w-full border border-yellow/90 rounded-xl p-4 flex flex-col gap-4 items-center justify-center">
          <FiPlus size={48} className="text-yellow" />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-32">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="plan_name" className="text-yellow text-xs">
              Plan Name
            </label>
            <input
              type="text"
              className="py-2 px-4 w-full rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
              name="plan_name"
              id="plan_name"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="plan_cost" className="text-yellow text-xs">
              Plan Cost (in Rs.)
            </label>
            <input
              type="text"
              className="py-2 px-4 w-full rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
              name="plan_cost"
              id="plan_cost"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="plan_deliverables" className="text-yellow text-xs">
            List of all Deliverables
          </label>
          <textarea
            type="text"
            rows={4}
            className="py-2 px-4 w-full rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
            name="plan_deliverables"
            id="plan_deliverables"
          />
        </div>
      </div>
      <div className="flex justify-end items-center gap-8">
        <button className="py-3 px-16 text-center text-black bg-yellow hover:bg-yellow/80 transition-all font-bold text-base rounded-md">
          Add Plan
        </button>
        <button className="py-3 px-16 text-center text-black bg-indigo-500 hover:bg-indigo-600 transition-all font-bold text-base rounded-md">
          Edit Plan
        </button>
      </div>
      <button className="mx-auto py-3 px-16 w-1/4 text-center text-black  bg-yellow hover:bg-yellow/80 transition-all font-bold text-base rounded-md">
        Submit
      </button>
    </div>
  );
};
