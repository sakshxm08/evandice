import { useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown";
import { State, City } from "country-state-city";
import { useNavigate } from "react-router-dom";
import { useAddEventOrFestContext } from "../../hooks/useAddEventOrFestContext";
import { InputRadio, InputText, Label } from "../../components/FormComponents";
import {
  accomodations,
  depts,
  event_types,
  fees_plans,
  tags,
} from "../../assets/values";
import Datepicker from "react-tailwindcss-datepicker";
import {
  handleCheck,
  saveFileInputData,
  setValues,
} from "../../services/helperFunctions";

export const AddFest = () => {
  const [states] = useState([]);
  const [cities, setCities] = useState([]);
  const [stateData, setStateData] = useState([]);

  const { dispatch, fest } = useAddEventOrFestContext();

  const navigate = useNavigate();

  const [formData, setFormData] = useState(fest);

  const [checked, setChecked] = useState({
    relevantCollegeDepartment: formData.relevantCollegeDepartment,
    selectTags: formData.selectTags,
  });
  // Add/Remove checked item from list

  useEffect(() => {
    for (let state of State.getStatesOfCountry("IN")) {
      states.push(state.name);
    }
  }, [states]);

  useEffect(() => {
    setFormData({ ...formData, city: "" });
    setCities([]);
    setStateData(
      State.getStatesOfCountry("IN").filter((s) => s.name === formData.state)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.state]);

  useEffect(() => {
    if (stateData.length > 0) {
      for (let city of City.getCitiesOfState("IN", stateData[0].isoCode)) {
        cities.push(city.name);
      }
    }
  }, [stateData, formData.state, cities]);

  return (
    <div className="relative">
      <form className="flex flex-col gap-4 my-4 lg:text-sm">
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
            <div className="grid grid-cols-2 w-full relative gap-10 mt-4">
              <div className="flex flex-col gap-2">
                <Label value={"Add my interests"} />

                <div className="grid grid-cols-3 w-full gap-1">
                  {tags.map((tag, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        name="selectTags"
                        value={tag}
                        id={tag}
                        className="accent-yellow w-3"
                        checked={formData.selectTags.includes(tag)}
                        onChange={(e) =>
                          handleCheck(e, checked, setChecked, formData)
                        }
                      />
                      <label htmlFor={tag} className="text-sm capitalize">
                        {tag}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label value={"Relevant College Departments"} />

                <div className="grid grid-cols-3 w-full gap-1">
                  {depts.map((dept, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        name="relevantCollegeDepartment"
                        value={dept}
                        id={dept}
                        checked={formData.relevantCollegeDepartment.includes(
                          dept
                        )}
                        onChange={(e) =>
                          handleCheck(e, checked, setChecked, formData)
                        }
                        className="accent-yellow w-3"
                      />
                      <label htmlFor={dept} className="text-sm capitalize">
                        {dept}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Label
              value={"Add Main Poster"}
              htmlFor={"poster"}
              className={"mb-2"}
            />
            <input type="file" name="poster" id="poster" className="hidden" />
            <label
              htmlFor="poster"
              className="border border-gray-200 rounded-md py-2 px-6 hover:bg-gray-200 hover:text-black cursor-pointer transition-all w-fit text-sm"
            >
              Choose file
            </label>
          </div>
          <div className="flex flex-col gap-1 col-span-1 md:col-span-2">
            <Label value={"Add Images"} htmlFor={"images"} className={"mb-2"} />
            <input
              type="file"
              name="images"
              id="images"
              multiple
              onChange={saveFileInputData}
              className="hidden"
            />
            <label
              htmlFor="images"
              className="border border-gray-200 rounded-md py-2 px-6 hover:bg-gray-200 hover:text-black cursor-pointer transition-all w-fit text-sm"
            >
              Choose file
            </label>
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
            <Label value={"Fest Sponsors"} htmlFor={"festSponsor"} />
            <InputText
              name={"festSponsor"}
              id={"festSponsor"}
              onChange={(e) => setValues(e, formData, setFormData)}
              value={formData.festSponsor}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Fest Food Stalls"} htmlFor={"festFoodStalls"} />
            <InputText
              name={"festFoodStalls"}
              id={"festFoodStalls"}
              onChange={(e) => setValues(e, formData, setFormData)}
              value={formData.festFoodStalls}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Fest Accomodations"} htmlFor={"festAccomodation"} />
            <InputText
              name={"festAccomodation"}
              id={"festAccomodation"}
              onChange={(e) => setValues(e, formData, setFormData)}
              value={formData.festAccomodation}
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
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "FEST", payload: formData });
            navigate("/add_fest/verify");
          }}
          className="mx-auto py-3 px-32 text-black bg-yellow mt-8 hover:bg-yellow/90 transition-all font-bold text-base rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
