import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useAddEventOrFestContext } from "../../hooks/useAddEventOrFestContext";
import { apiConnector } from "../../services/apiConnector";
import { endpoints } from "../../services/apiRoutes";
import { useState } from "react";
export const Verify = () => {
  const navigate = useNavigate();
  const { dispatch, fest } = useAddEventOrFestContext();
  console.log(fest);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();

    Object.entries(fest).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => formData.append(key, item));
      } else {
        formData.append(key, value);
      }
    });
    apiConnector("POST", endpoints.FESTS.ADD, formData, {
      "Content-Type": "multipart/form-data",
    })
      .then((res) => {
        const response = res.data;
        // RESPONSE LOGIC
        console.log(response);
        dispatch({ type: "FEST", payload: fest });
        navigate("/add_fest/verify");
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err);
        console.log(err);
      });
  };

  return (
    <div>
      <Link
        to={-1}
        className="absolute left-10 top-36 flex font-bold hover:text-yellow transition-all cursor-pointer justify-center items-center gap-2 text-xl"
      >
        <IoIosArrowRoundBack size={40} />
        Back
      </Link>
      <div className="max-w-lg mx-auto w-screen flex flex-col gap-8 justify-center items-center">
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
        <Link className="mx-auto py-3 px-16 text-center max-w-xs w-full text-black bg-green-700 hover:bg-green-800 transition-all font-bold text-base rounded-md">
          Send Code
        </Link>
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
        <Link className="mx-auto py-3 px-16 text-center max-w-xs w-full text-black bg-yellow hover:bg-yellow/80 transition-all font-bold text-base rounded-md">
          Go Ahead
        </Link>
        <button
          onClick={handleSubmit}
          className="bg-yellow py-2 px-12 mx-auto my-8 text-black"
        >
          Submit
        </button>
      </div>
      {isLoading && <>Loading...</>}
      {err && <>Error</>}
    </div>
  );
};
