import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useAddEventOrFestContext } from "../../hooks/useAddEventOrFestContext";
import { apiConnector } from "../../services/apiConnector";
import { endpoints } from "../../services/apiRoutes";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { fetchAllData } from "../../services/helperFunctions";
import { useEventsContext } from "../../hooks/useEventsContext";
export const Verify = () => {
  const navigate = useNavigate();
  const AddEventOrFest = useAddEventOrFestContext();
  const Events = useEventsContext();
  const [isLoading, setIsLoading] = useState(false);
  const [otherEmail, setOtherEmail] = useState("");
  const [code, setCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [codeSentErr, setCodeSentErr] = useState(null);
  const handleAddFest = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();

    Object.entries(AddEventOrFest.fest).forEach(([key, value]) => {
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
        AddEventOrFest.dispatch({ type: "FEST", payload: {} });
      })
      .then(() => {
        fetchAllData(Events.dispatch);
        navigate("/");
      })
      .catch((err) => {
        setCodeSentErr("Fest not added successfully.");

        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  const handleSendCode = (e) => {
    e.preventDefault();
    setIsLoading(true);
    apiConnector(
      "POST",
      endpoints.FESTS.SEND_CODE,
      {
        pocEmail: AddEventOrFest.fest.poc_email,
        userEmail1:
          otherEmail === "" ? otherEmail : AddEventOrFest.fest.poc_email,
      },
      {
        "Content-Type": "application/json",
        Authorization: JSON.parse(localStorage.getItem("token")),
      }
    )
      .then((res) => {
        console.log(res);
        setCodeSent(true);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setCodeSentErr("Code not sent successfully.");
        setIsLoading(false);
      });
  };
  const handleVerifyCode = (e) => {
    e.preventDefault();
    setIsLoading(true);
    apiConnector(
      "POST",
      endpoints.FESTS.VERIFY_CODE,
      {
        code,
      },
      {
        "Content-Type": "application/json",
        Authorization: JSON.parse(localStorage.getItem("token")),
      }
    )
      .then(() => {
        handleAddFest();
      })
      .catch((err) => {
        console.error(err);
        setCodeSentErr("Code not verified");
        setIsLoading(false);
      });
  };
  return (
    <div>
      {isLoading && (
        <div className="h-screen w-screen fixed inset-0 flex items-center justify-center bg-black/60 z-[1000]">
          <BeatLoader color="#FBBC05" />
        </div>
      )}
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
            <label htmlFor="email" className="text-yellow text-xs">
              Add Email IDs to send this code
            </label>
            <input
              type="email"
              className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
              name="email"
              id="email"
              value={otherEmail}
              onChange={(e) => setOtherEmail(e.target.value)}
            />
          </div>
          <button
            onClick={handleSendCode}
            disabled={codeSent}
            className="mx-auto py-3 px-16 text-center disabled:opacity-50 max-w-xs w-full text-black bg-green-700 hover:bg-green-800 transition-all font-bold text-base rounded-md"
          >
            Send Code
          </button>
          {codeSentErr && (
            <div className="text-red-600 text-sm text-center">
              {codeSentErr}
            </div>
          )}
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="code" className="text-yellow text-xs">
              Enter the unique Evandize code for your fest
            </label>
            <input
              type="text"
              className="py-2 px-4 rounded bg-transparent border  disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
              name="code"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <button
            onClick={handleVerifyCode}
            disabled={!codeSent}
            className="mx-auto py-3 px-16 text-center disabled:opacity-50 max-w-xs w-full text-black bg-yellow disabled:bg-yellow hover:bg-yellow/80 transition-all font-bold text-base rounded-md"
          >
            Go Ahead
          </button>
        </div>
      </div>
    </div>
  );
};
