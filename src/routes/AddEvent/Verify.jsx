import { Link, useLocation } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
export const Verify = () => {
  const location = useLocation();
  console.log(location.state.formData);
  return (
    <div>
      <Link
        to="/add_event/form"
        state={{ formData: location.state.formData }}
        className="absolute left-10 top-40 flex font-bold hover:text-yellow transition-all cursor-pointer justify-center items-center gap-2 text-xl"
      >
        <IoIosArrowRoundBack size={40} />
        Back
      </Link>
      <div className="max-w-lg mx-auto w-full flex flex-col gap-8 justify-center items-center">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="map_link" className="text-yellow text-xs">
            Enter the unique Evandize code for your fest
          </label>
          <input
            type="text"
            className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
            name="map_link"
            id="map_link"
          />
        </div>
        <Link className="mx-auto py-3 px-32 text-black bg-yellow hover:bg-yellow/90 transition-all font-bold text-base rounded-md">
          Go Ahead
        </Link>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="map_link" className="text-yellow text-xs">
            Add Email IDs to send this code
          </label>
          <input
            type="text"
            className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
            name="map_link"
            id="map_link"
          />
        </div>
        <Link className="mx-auto py-3 px-32 text-black bg-green-700 hover:bg-green-800 transition-all font-bold text-base rounded-md">
          Send Code
        </Link>
      </div>
    </div>
  );
};
