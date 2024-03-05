import { useEffect, useRef, useState } from "react";
import Dropdown from "../../components/Dropdown";
import { State, City } from "country-state-city";
import { useNavigate } from "react-router-dom";
import { useAddEventOrFestContext } from "../../hooks/useAddEventOrFestContext";
import { InputRadio, InputText, Label } from "../../components/FormComponents";
import { RxCross2 } from "react-icons/rx";
import { BsImageFill } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import {
  accomodations,
  depts,
  event_types,
  fees_plans,
  genres,
} from "../../assets/values";
import Datepicker from "react-tailwindcss-datepicker";
import { handleCheck, setValues } from "../../services/helperFunctions";
import { FiPlus } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
export const AddFest = () => {
  const [states] = useState([]);
  const [cities, setCities] = useState([]);

  const [sponsor, setSponsor] = useState("");
  const [foodStall, setFoodStall] = useState("");

  const [deptsCollapsed, setDeptsCollapsed] = useState(true);
  const [genreCollapsed, setGenreCollapsed] = useState(true);

  const sponsorRef = useRef(null);
  const foodStallRef = useRef(null);

  const { dispatch, fest } = useAddEventOrFestContext();

  const navigate = useNavigate();

  const [formData, setFormData] = useState(fest);

  const [checked, setChecked] = useState({
    relevantCollegeDepartment: formData.relevantCollegeDepartment,
    festGenre: formData.festGenre,
  });
  // Add/Remove checked item from list

  useEffect(() => {
    for (let state of State.getStatesOfCountry("IN")) {
      states.push(state.name);
    }
  }, [states]);

  useEffect(() => {
    if (formData.state !== fest.state) {
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

  function checkFieldsNotEmpty(obj) {
    // Iterate through each key in the obj object
    for (let key in obj) {
      // Skip specific keys
      if (
        [
          "instagramLink",
          "facebookLink",
          "twitterLink",
          "festSponsor",
          "festFoodStalls",
          "festAccomodation",
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
      formData.festSponsor.find(
        (key) => key.toLowerCase() === sponsor.toLowerCase()
      ) ||
      sponsor === ""
    )
      return alert("Enter unique keywords");
    setFormData({
      ...formData,
      festSponsor: [...formData.festSponsor, sponsor],
    });
    setSponsor("");
  };
  const addFoodStalls = (e) => {
    e.preventDefault();
    if (
      formData.festFoodStalls.find(
        (key) => key.toLowerCase() === foodStall.toLowerCase()
      ) ||
      foodStall === ""
    )
      return alert("Enter unique keywords");
    setFormData({
      ...formData,
      festFoodStalls: [...formData.festFoodStalls, foodStall],
    });
    setFoodStall("");
  };

  return (
    <div className="relative">
      <form className="flex flex-col gap-4 my-4 lg:text-sm w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full relative gap-10 ">
          <div className="flex flex-col gap-1">
            <Label value={"Fest Name"} htmlFor={"festName"} />
            <InputText
              name={"festName"}
              id={"festName"}
              onChange={(e) => setValues(e, formData, setFormData)}
              value={formData.festName}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Fest Date/s"} htmlFor={"dates"} />
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
          <div className="flex flex-col h-full gap-1">
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
              required={false}
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
            <Label value={"Fest Type"} />

            <div className="flex items-center gap-4">
              {event_types.map((type, index) => (
                <InputRadio
                  key={index + type}
                  id={type}
                  name="festType"
                  onChange={(e) => setValues(e, formData, setFormData)}
                  checked={formData.festType === type}
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
                  id={accomodation.id}
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
                <Label value={"Fest Genre"} />

                <div
                  className={`grid grid-cols-2 mobiles:grid-cols-3 w-full gap-y-1 ${
                    genreCollapsed
                      ? "h-[4.5rem] sm:h-[4.8rem"
                      : "h-[17rem] mobiles:h-[12rem] sm:h-[11rem]"
                  } transition-all overflow-hidden ease duration-500 select-none`}
                >
                  {genres.map((tag, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        name="festGenre"
                        value={tag}
                        id={tag}
                        className="accent-yellow w-3"
                        checked={formData.festGenre.includes(tag)}
                        onChange={(e) =>
                          handleCheck(e, checked, setChecked, formData)
                        }
                      />
                      <label htmlFor={tag} className="text-xs capitalize">
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
                        id={dept}
                        required
                        checked={formData.relevantCollegeDepartment.includes(
                          dept
                        )}
                        onChange={(e) =>
                          handleCheck(e, checked, setChecked, formData)
                        }
                        className="accent-yellow w-3"
                      />
                      <label htmlFor={dept} className="text-xs capitalize">
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
              required
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
              required
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
              required={false}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Add Facebook Link"} htmlFor={"facebookLink"} />
            <InputText
              name={"facebookLink"}
              id={"facebookLink"}
              onChange={(e) => setValues(e, formData, setFormData)}
              value={formData.facebookLink}
              required={false}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Add Twitter Link"} htmlFor={"twitterLink"} />
            <InputText
              name={"twitterLink"}
              id={"twitterLink"}
              onChange={(e) => setValues(e, formData, setFormData)}
              value={formData.twitterLink}
              required={false}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Fest Sponsors"} htmlFor={"festSponsor"} />
            <div className="relative">
              <input
                value={sponsor}
                ref={sponsorRef}
                id="festSponsor"
                onChange={(e) => setSponsor(e.target.value)}
                name="festSponsor"
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
              {formData.festSponsor.map((sponsor) => (
                <span
                  className="bg-gray-200/40 flex gap-1 items-center justify-center py-1 pl-2 rounded w-fit text-xs"
                  key={sponsor}
                  onClick={() => {
                    setFormData(() => {
                      return {
                        ...formData,
                        festSponsor: formData.festSponsor.filter(
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
            <Label value={"Fest Food Stalls"} htmlFor={"festFoodStalls"} />
            <div className="relative">
              <input
                ref={foodStallRef}
                value={foodStall}
                id="festFoodStalls"
                onChange={(e) => setFoodStall(e.target.value)}
                name="festFoodStalls"
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
              {formData.festFoodStalls.map((foodStall) => (
                <span
                  className="bg-gray-200/40 flex gap-1 items-center justify-center py-1 pl-2 rounded w-fit text-xs"
                  key={foodStall}
                  onClick={() => {
                    setFormData(() => {
                      return {
                        ...formData,
                        festFoodStalls: formData.festFoodStalls.filter(
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
            <Label value={"Fest Accomodations"} htmlFor={"festAccomodation"} />
            <InputText
              name={"festAccomodation"}
              id={"festAccomodation"}
              onChange={(e) => setValues(e, formData, setFormData)}
              value={formData.festAccomodation}
              required={false}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label value={"POC Name"} htmlFor={"poc_name"} />
            <InputText
              name={"poc_name"}
              id={"poc_name"}
              onChange={(e) => setValues(e, formData, setFormData)}
              value={formData.poc_name}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"POC Contact Number"} htmlFor={"poc_contact"} />
            <InputText
              name={"poc_contact"}
              id={"poc_contact"}
              onChange={(e) => setValues(e, formData, setFormData)}
              value={formData.poc_contact}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"POC Email"} htmlFor={"poc_email"} />
            <InputText
              type="email"
              name={"poc_email"}
              id={"poc_email"}
              onChange={(e) => setValues(e, formData, setFormData)}
              value={formData.poc_email}
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
        <button
          onClick={async (e) => {
            e.preventDefault();
            const readyToSubmit = checkFieldsNotEmpty(formData);
            if (readyToSubmit) {
              dispatch({ type: "FEST", payload: formData });
              navigate("/add_fest/verify");
            }
            return;
          }}
          className="mx-auto py-3 px-32 text-black bg-yellow mt-8 hover:bg-yellow/90 transition-all font-bold text-base rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
