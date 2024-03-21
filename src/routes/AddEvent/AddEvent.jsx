import { useEffect, useRef, useState } from "react";
import Dropdown from "../../components/Dropdown";
import { Link, useNavigate } from "react-router-dom";
import { State, City } from "country-state-city";
import { useAddEventOrFestContext } from "../../hooks/useAddEventOrFestContext";
import { InputRadio, InputText, Label } from "../../components/FormComponents";
import {
  accomodations,
  certificates,
  depts,
  event_types,
  fees_plans,
  genres,
} from "../../assets/values";
import Datepicker from "react-tailwindcss-datepicker";
import { handleCheck, setValues } from "../../services/helperFunctions";
import { BsImageFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { GoPlus } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
// import { apiConnector } from "../../services/apiConnector";
// import { endpoints } from "../../services/apiRoutes";

export const AddEvent = () => {
  const [states] = useState([]);
  const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [err, setErr] = useState(null);

  const [sponsor, setSponsor] = useState("");
  const [foodStall, setFoodStall] = useState("");

  const [deptsCollapsed, setDeptsCollapsed] = useState(true);
  const [genreCollapsed, setGenreCollapsed] = useState(true);

  const sponsorRef = useRef(null);
  const foodStallRef = useRef(null);

  const { dispatch, event } = useAddEventOrFestContext();

  const navigate = useNavigate();

  const [formData, setFormData] = useState(event);

  const [checked, setChecked] = useState({
    relevantCollegeDepartment: formData.relevantCollegeDepartment,
    eventGenre: formData.eventGenre,
  });

  useEffect(() => {
    for (let state of State.getStatesOfCountry("IN")) {
      states.push(state.name);
    }
  }, [states]);

  useEffect(() => {
    if (formData.state !== event.state) {
      // Check if selected state has changed
      const citiesOfState = State.getStatesOfCountry("IN")
        .filter((s) => s.name === formData.state)
        .flatMap((s) => City.getCitiesOfState("IN", s.isoCode))
        .map((city) => city.name);

      setCities(citiesOfState);
      setFormData({ ...formData, city: "" }); // Reset city when state changes
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.state]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   apiConnector("POST", endpoints.EVENT.ADD, formData, {
  //     "Content-Type": "multipart/form-data",
  //   })
  //     .then((res) => {
  //       const response = res.data;
  //       // RESPONSE LOGIC
  //       console.log(response);
  //       dispatch({ type: "EVENT", payload: formData });
  //       navigate("/add_fest/verify");
  //       setIsLoading(false);
  //     })
  //     .catch((err) => setErr(err));
  // };

  function checkFieldsNotEmpty(obj) {
    // Iterate through each key in the obj object
    for (let key in obj) {
      // Skip specific keys
      if (
        [
          "instagramLink",
          "facebookLink",
          "twitterLink",
          "eventSponsor",
          "eventFoodStalls",
          "eventAccomodation",
        ].includes(key)
      ) {
        continue;
      }

      // Check if the value is an array or object
      if (Array.isArray(obj[key])) {
        // If it's an array, check if it's empty
        if (obj[key].length === 0) {
          alert("Please fill in all fields.");
          return false;
        }
      } else if (typeof obj[key] === "object") {
        // If it's an object, check if any key has an empty value
        for (let subKey in obj[key]) {
          if (Object.prototype.hasOwnProperty.call(obj[key], subKey)) {
            if (
              obj[key][subKey] === "" ||
              obj[key][subKey] === undefined ||
              obj[key][subKey] === null
            ) {
              alert("Please fill in all fields.");
              return false;
            }
          }
        }
      } else {
        // For other types (string, null, undefined), check if it's empty or null
        if (obj[key] === "" || obj[key] === undefined || obj[key] === null) {
          alert("Please fill in all fields.");
          return false;
        }
      }
    }
    // If all fields are filled, show success message or perform desired action
    return true;
  }

  const addSponsors = (e) => {
    e.preventDefault();
    if (
      formData.eventSponsor.find(
        (key) => key.toLowerCase() === sponsor.toLowerCase()
      ) ||
      sponsor === ""
    )
      return alert("Enter unique keywords");
    setFormData({
      ...formData,
      eventSponsor: [...formData.eventSponsor, sponsor],
    });
    setSponsor("");
  };
  const addFoodStalls = (e) => {
    e.preventDefault();
    if (
      formData.eventFoodStalls.find(
        (key) => key.toLowerCase() === foodStall.toLowerCase()
      ) ||
      foodStall === ""
    )
      return alert("Enter unique keywords");
    setFormData({
      ...formData,
      eventFoodStalls: [...formData.eventFoodStalls, foodStall],
    });
    setFoodStall("");
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-8 tablets:gap-0 tablets:grid-cols-3 mx-auto w-11/12 pb-8 mb-12 border-b-gray-400 border-b-[0.5px]">
        <div className="flex items-center flex-col justify-center gap-2 lg:text-sm">
          <div className="text-yellow">Event Category</div>
          <div className="flex  flex-col lg:flex-row lg:items-center lg:gap-4">
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                id="standalone"
                name="category"
                className="accent-yellow"
              />
              <label htmlFor="standalone">Standalone event</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                id="partoffest"
                name="category"
                className="accent-yellow"
              />
              <label htmlFor="partoffest">Part of a fest</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="text-yellow lg:text-sm">Find a fest</div>
          <div className="flex flex-col w-4/5 gap-1">
            <Dropdown
              isEditable={true}
              formData={formData}
              setFormData={setFormData}
              type={""}
              values={[]}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link
            to="/add_fest/form"
            className="py-3 px-6 w-4/5 text-center tablets:w-fit bg-yellow rounded-md font-bold text-black h-fit hover:bg-yellow/80 transition-all"
          >
            Create a new fest
          </Link>
        </div>
      </div>

      <form className="flex flex-col gap-4 my-4 lg:text-sm w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full relative gap-10 ">
          <div className="flex flex-col gap-1">
            <Label value={"Event Name"} htmlFor={"eventName"} />
            <InputText
              name={"eventName"}
              id={"eventName"}
              onChange={(e) => setValues(e, formData, setFormData)}
              value={formData.eventName}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Event Date/s"} htmlFor={"dates"} />
            <Datepicker
              inputName="dates"
              inputId="dates"
              primaryColor={"amber"}
              separator={"-"}
              displayFormat={"DD/MM/YYYY"}
              value={formData.dates}
              inputClassName="py-2 px-4 w-full text-white rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
              onChange={(newValue) =>
                setFormData({ ...formData, dates: newValue })
              }
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Address"} htmlFor={"address"} />
            <InputText
              name={"address"}
              id={"address"}
              onChange={(e) => setValues(e, formData, setFormData)}
              value={formData.address}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Dropdown
              isEditable={true}
              formData={formData}
              setFormData={setFormData}
              type={"state"}
              values={states}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Dropdown
              isEditable={true}
              formData={formData}
              setFormData={setFormData}
              type={"city"}
              values={cities}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Google Maps Link"} htmlFor={"googleMapsLink"} />
            <InputText
              name={"googleMapsLink"}
              id={"googleMapsLink"}
              onChange={(e) => setValues(e, formData, setFormData)}
              value={formData.googleMapsLink}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label value={"Contact Number"} htmlFor={"contactNumber"} />
            <InputText
              type="number"
              name={"contactNumber"}
              id={"contactNumber"}
              onChange={(e) => setValues(e, formData, setFormData)}
              value={formData.contactNumber}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Event Type"} />
            <div className="flex items-center gap-4">
              {event_types.map((type, index) => (
                <InputRadio
                  key={index + type}
                  id={type + index}
                  name="eventType"
                  onChange={(e) => setValues(e, formData, setFormData)}
                  checked={formData.eventType === type}
                  value={type}
                  label={type}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Accomodation Provided"} />
            <div className="flex items-center gap-4">
              {accomodations.map((accomodation, index) => (
                <InputRadio
                  key={index + accomodation.id}
                  id={accomodation.id + index}
                  name="accomodationProvided"
                  onChange={(e) => setValues(e, formData, setFormData)}
                  checked={formData.accomodationProvided === accomodation.value}
                  value={accomodation.value}
                  label={accomodation.label}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1 col-span-1 md:col-span-2 lg:col-span-3">
            <div className="grid tablets:grid-cols-2 w-full relative gap-10 mt-4">
              <div className="flex flex-col gap-2">
                <Label value={"Add my interests"} />
                <div
                  className={`grid grid-cols-2 mobiles:grid-cols-3 w-full gap-y-1 ${
                    genreCollapsed
                      ? "h-[4.5rem] sm:h-[4.8rem]"
                      : "h-[17rem] mobiles:h-[12rem] sm:h-[11rem]"
                  } transition-all overflow-hidden ease duration-500 select-none`}
                >
                  {genres.map((tag, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        name="eventGenre"
                        value={tag}
                        id={tag + index}
                        className="accent-yellow w-3"
                        checked={formData.eventGenre.includes(tag)}
                        onChange={(e) =>
                          handleCheck(e, checked, setChecked, formData)
                        }
                      />
                      <label
                        htmlFor={tag + index}
                        className="text-xs capitalize"
                      >
                        {tag}
                      </label>
                    </div>
                  ))}
                </div>
                <span
                  className="text-yellow flex items-center gap-1 text-xs cursor-pointer"
                  onClick={() => setGenreCollapsed(!genreCollapsed)}
                >
                  See {genreCollapsed ? "more" : "less"}{" "}
                  <FaAngleDown
                    className={`${
                      genreCollapsed ? "rotate-0" : "rotate-180"
                    } transition-all`}
                  />
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <Label value={"Relevant College Departments"} />

                <div
                  className={`grid grid-cols-2 mobiles:grid-cols-3 w-full gap-y-1 ${
                    deptsCollapsed
                      ? "h-[4.8rem]"
                      : "h-[26.2rem] mobiles:h-[18rem] sm:h-[16.4rem]"
                  } transition-all overflow-hidden ease duration-500 select-none`}
                >
                  {depts.map((dept, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        name="relevantCollegeDepartment"
                        value={dept}
                        id={dept + index}
                        checked={formData.relevantCollegeDepartment.includes(
                          dept
                        )}
                        onChange={(e) =>
                          handleCheck(e, checked, setChecked, formData)
                        }
                        className="accent-yellow w-3"
                      />
                      <label
                        htmlFor={dept + index}
                        className="text-xs capitalize"
                      >
                        {dept}
                      </label>
                    </div>
                  ))}
                </div>
                <span
                  className="text-yellow flex items-center gap-1 text-xs cursor-pointer"
                  onClick={() => setDeptsCollapsed(!deptsCollapsed)}
                >
                  See {deptsCollapsed ? "more" : "less"}{" "}
                  <FaAngleDown
                    className={`${
                      deptsCollapsed ? "rotate-0" : "rotate-180"
                    } transition-all`}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Label
              value={"Add Main Poster"}
              htmlFor={"mainPoster"}
              className={"mb-2"}
            />
            <input
              type="file"
              name="mainPoster"
              id="mainPoster"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                setFormData({ ...formData, mainPoster: file });
              }}
            />
            {formData.mainPoster ? (
              <div className="bg-white rounded-full py-2 px-3 hover:bg-gray-200 text-black cursor-pointer transition-all w-fit flex items-center justify-between text-sm gap-3">
                <BsImageFill size={14} />
                <span className="text-ellipsis max-w-[120px] text-xs font-semibold whitespace-nowrap overflow-hidden w-fit">
                  {formData.mainPoster.name}
                </span>
                <RxCross2
                  size={18}
                  onClick={() => setFormData({ ...formData, mainPoster: null })}
                />
              </div>
            ) : (
              <label
                htmlFor="mainPoster"
                className="border border-gray-200 rounded-md py-2 px-6 hover:bg-gray-200 hover:text-black cursor-pointer transition-all w-fit text-sm"
              >
                Choose file
              </label>
            )}
          </div>
          <div className="flex flex-col gap-1 col-span-1 md:col-span-2">
            <Label
              value={"Add Images"}
              htmlFor={"pictures"}
              className={"mb-2"}
            />
            <input
              type="file"
              name="pictures"
              id="pictures"
              multiple
              className="hidden"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  pictures: [...formData.pictures, ...e.target.files],
                });
              }}
            />
            {formData.pictures.length > 0 ? (
              <div className="grid grid-cols-3 sm:grid-cols-6 items-center gap-3">
                {formData.pictures.map((picture, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-full py-2 px-3 hover:bg-gray-200 text-black cursor-pointer transition-all w-full flex items-center justify-between text-sm gap-1"
                  >
                    <div className="flex items-center gap-1 w-[120px] overflow-hidden">
                      <BsImageFill className="w-8" />
                      <span className="text-ellipsis text-xs font-semibold whitespace-nowrap overflow-hidden max-w-[100px] sm:max-w-[40px]">
                        {picture.name}
                      </span>
                    </div>
                    <RxCross2
                      className="w-8"
                      onClick={() => {
                        const pictures = [...formData.pictures];
                        pictures.splice(index, 1);
                        setFormData({ ...formData, pictures });
                      }}
                    />
                  </div>
                ))}
                {formData.pictures.length <= 5 && (
                  <label
                    htmlFor="pictures"
                    className="rounded-full aspect-square w-9 flex items-center justify-center border border-white hover:bg-white hover:text-black cursor-pointer"
                  >
                    <GoPlus />
                  </label>
                )}
              </div>
            ) : (
              <label
                htmlFor="pictures"
                className="border border-gray-200 rounded-md py-2 px-6 hover:bg-gray-200 hover:text-black cursor-pointer transition-all w-fit text-sm"
              >
                Choose file
              </label>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Add Instagram Link"} htmlFor={"instagramLink"} />

            <InputText
              name={"instagramLink"}
              id={"instagramLink"}
              onChange={(e) => setValues(e, formData, setFormData)}
              value={formData.instagramLink}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Add Facebook Link"} htmlFor={"facebookLink"} />
            <InputText
              name={"facebookLink"}
              id={"facebookLink"}
              onChange={(e) => setValues(e, formData, setFormData)}
              value={formData.facebookLink}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Add Twitter Link"} htmlFor={"twitterLink"} />
            <InputText
              name={"twitterLink"}
              id={"twitterLink"}
              onChange={(e) => setValues(e, formData, setFormData)}
              value={formData.twitterLink}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Event Sponsors"} htmlFor={"eventSponsor"} />
            <div className="relative">
              <input
                value={sponsor}
                ref={sponsorRef}
                id="eventSponsor"
                onChange={(e) => setSponsor(e.target.value)}
                name="eventSponsor"
                type="text"
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    document.activeElement === sponsorRef.current
                  ) {
                    addSponsors(e);
                  }
                }}
                className="rounded py-2 pl-4 pr-10 border bg-transparent focus-visible:border-yellow disabled:border-gray-600 disabled:text-gray-500 disabled:cursor-not-allowed outline-none w-full"
              />
              <button
                onClick={addSponsors}
                type="button"
                className="text-xs rounded-full border  p-1 transition-all absolute right-2 top-2 hover:bg-white hover:text-gray-800"
              >
                <FiPlus />
              </button>
            </div>
            <div className="flex gap-2 flex-wrap mt-2">
              {formData.eventSponsor.map((sponsor) => (
                <span
                  className="bg-gray-200/40 flex gap-1 items-center justify-center py-1 pl-2 rounded w-fit text-xs"
                  key={sponsor}
                  onClick={() => {
                    setFormData(() => {
                      return {
                        ...formData,
                        eventSponsor: formData.eventSponsor.filter(
                          (key) => key !== sponsor
                        ),
                      };
                    });
                  }}
                >
                  {sponsor}
                  <IoIosClose size={20} className="cursor-pointer" />
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Event Food Stalls"} htmlFor={"eventFoodStalls"} />
            <div className="relative">
              <input
                ref={foodStallRef}
                value={foodStall}
                id="eventFoodStalls"
                onChange={(e) => setFoodStall(e.target.value)}
                name="eventFoodStalls"
                type="text"
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    document.activeElement === foodStallRef.current
                  ) {
                    addFoodStalls(e);
                  }
                }}
                className="rounded py-2 pl-4 pr-10 border bg-transparent focus-visible:border-yellow disabled:border-gray-600 disabled:text-gray-500 disabled:cursor-not-allowed outline-none w-full"
              />
              <button
                onClick={addFoodStalls}
                type="button"
                className="text-xs rounded-full border  p-1 transition-all absolute right-2 top-2 hover:bg-white hover:text-gray-800"
              >
                <FiPlus />
              </button>
            </div>
            <div className="flex gap-2 flex-wrap mt-2">
              {formData.eventFoodStalls.map((foodStall) => (
                <span
                  className="bg-gray-200/40 flex gap-1 items-center justify-center py-1 pl-2 rounded w-fit text-xs"
                  key={foodStall}
                  onClick={() => {
                    setFormData(() => {
                      return {
                        ...formData,
                        eventFoodStalls: formData.eventFoodStalls.filter(
                          (key) => key !== foodStall
                        ),
                      };
                    });
                  }}
                >
                  {foodStall}
                  <IoIosClose size={20} className="cursor-pointer" />
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Label
              value={"Event Accomodations"}
              htmlFor={"eventAccomodation"}
            />
            <InputText
              name={"eventAccomodation"}
              id={"eventAccomodation"}
              onChange={(e) => setValues(e, formData, setFormData)}
              value={formData.eventAccomodation}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label value={"Registration Fees"} />
            <div className="flex items-center gap-4">
              {fees_plans.map((plan, index) => (
                <InputRadio
                  key={index + plan.id}
                  id={plan.id}
                  name="registrationFees"
                  onChange={(e) => setValues(e, formData, setFormData)}
                  checked={formData.registrationFees === plan.value}
                  value={plan.value}
                  label={plan.label}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 my-5">
          <Label value={"Important Rules and Regulations"} htmlFor={"desc"} />
          <textarea
            name="desc"
            id="desc"
            className="py-2 px-4 w-full rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
            rows="4"
            onChange={(e) => setValues(e, formData, setFormData)}
            value={formData.desc}
          ></textarea>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full relative gap-10 ">
          <div className="flex flex-col gap-1">
            <Label value={"Winner Prizes"} htmlFor={"winner"} />
            <InputText
              name={"winner"}
              id={"winner"}
              onChange={(e) => setValues(e, formData, setFormData)}
              value={formData.winner}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Participation Prizes"} htmlFor={"participant"} />
            <InputText
              name={"participant"}
              id={"participant"}
              onChange={(e) => setValues(e, formData, setFormData)}
              value={formData.participant}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Certificates Available"} />
            <div className="flex items-center gap-4">
              {certificates.map((plan, index) => (
                <InputRadio
                  key={index + plan.id}
                  id={plan.id}
                  name="certificates"
                  onChange={(e) => setValues(e, formData, setFormData)}
                  checked={formData.certificates === plan.value}
                  value={plan.value}
                  label={plan.label}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Email ID"} htmlFor={"email"} />
            <InputText
              type="email"
              name={"email"}
              id={"email"}
              onChange={(e) => setValues(e, formData, setFormData)}
              value={formData.email}
            />
          </div>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            const readyToSubmit = checkFieldsNotEmpty(formData);
            if (readyToSubmit) {
              dispatch({ type: "EVENT", payload: formData });
              navigate("/add_event/verify");
            }
          }}
          className="mx-auto py-3 px-32 text-black bg-yellow mt-8 hover:bg-yellow/90 transition-all font-bold text-base rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
