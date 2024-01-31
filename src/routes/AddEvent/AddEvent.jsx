import { useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { State, City } from "country-state-city";
import { useEventContext } from "../../hooks/useEventContext";
import { InputRadio, InputText, Label } from "../../components/FormComponents";
import {
  accomodations,
  certificates,
  depts,
  event_types,
  fees_plans,
  tags,
} from "../../assets/values";

export const AddEvent = () => {
  const [states] = useState([]);
  const [cities, setCities] = useState([]);
  const [stateData, setStateData] = useState([]);

  const { dispatch, event } = useEventContext();

  const navigate = useNavigate();

  const location = useLocation();

  const [formData, setFormData] = useState(
    location.state ? location.state.formData : event
  );

  const setValues = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [checked, setChecked] = useState({
    depts: formData.depts,
    tags: formData.tags,
  });
  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = { ...checked };
    if (event.target.checked) {
      updatedList[event.target.name].push(event.target.value);
    } else {
      updatedList[event.target.name].splice(
        checked[event.target.name].indexOf(event.target.value),
        1
      );
    }
    setChecked({ ...updatedList });
    formData[event.target.name] = updatedList[event.target.name];
  };

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

      <form className="flex flex-col gap-4 my-4 lg:text-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full relative gap-10 ">
          <div className="flex flex-col gap-1">
            <Label value={"Event Name"} htmlFor={"name"} />
            <InputText
              name={"name"}
              id={"name"}
              onChange={setValues}
              value={formData.name}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Event Date/s"} htmlFor={"date"} />

            <input
              type="text"
              className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
              name="date"
              id="date"
              onChange={setValues}
              value={formData.date}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Address"} htmlFor={"address"} />
            <InputText
              name={"address"}
              id={"address"}
              onChange={setValues}
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
            <Label value={"Google Maps Link"} htmlFor={"gmap_link"} />
            <InputText
              name={"gmap_link"}
              id={"gmap_link"}
              onChange={setValues}
              value={formData.gmap_link}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label value={"Contact Number"} htmlFor={"contact_no"} />
            <InputText
              type="number"
              name={"contact_no"}
              id={"contact_no"}
              onChange={setValues}
              value={formData.contact_no}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Event Type"} />
            <div className="flex items-center gap-4">
              {event_types.map((type, index) => (
                <InputRadio
                  key={index + type}
                  id={type}
                  name="type"
                  onChange={setValues}
                  checked={formData.type === type}
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
                  name="accomodation"
                  onChange={setValues}
                  checked={formData.accomodation === accomodation.value}
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
                        name="tags"
                        value={tag}
                        id={tag}
                        className="accent-yellow w-3"
                        checked={formData.tags.includes(tag)}
                        onChange={handleCheck}
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
                        name="depts"
                        value={dept}
                        id={dept}
                        checked={formData.depts.includes(dept)}
                        onChange={handleCheck}
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
            <Label value={"Add Instagram Link"} htmlFor={"instagram"} />

            <InputText
              name={"instagram"}
              id={"instagram"}
              onChange={setValues}
              value={formData.instagram}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Add Facebook Link"} htmlFor={"facebook"} />
            <InputText
              name={"facebook"}
              id={"facebook"}
              onChange={setValues}
              value={formData.facebook}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Add Twitter Link"} htmlFor={"twitter"} />
            <InputText
              name={"twitter"}
              id={"twitter"}
              onChange={setValues}
              value={formData.twitter}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Event Sponsors"} htmlFor={"sponsors"} />
            <InputText
              name={"sponsors"}
              id={"sponsors"}
              onChange={setValues}
              value={formData.sponsors}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Event Food Stalls"} htmlFor={"foodstalls"} />
            <InputText
              name={"foodstalls"}
              id={"foodstalls"}
              onChange={setValues}
              value={formData.foodstalls}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Event Accomodations"} htmlFor={"accomodations"} />
            <InputText
              name={"accomodations"}
              id={"accomodations"}
              onChange={setValues}
              value={formData.accomodations}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label value={"Registration Fees"} />
            <div className="flex items-center gap-4">
              {fees_plans.map((plan, index) => (
                <InputRadio
                  key={index + plan.id}
                  id={plan.id}
                  name="registerfees"
                  onChange={setValues}
                  checked={formData.registerfees === plan.value}
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
            onChange={setValues}
            value={formData.desc}
          ></textarea>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full relative gap-10 ">
          <div className="flex flex-col gap-1">
            <Label value={"Winner Prizes"} htmlFor={"winner"} />
            <InputText
              name={"winner"}
              id={"winner"}
              onChange={setValues}
              value={formData.winner}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Participation Prizes"} htmlFor={"participant"} />
            <InputText
              name={"participant"}
              id={"participant"}
              onChange={setValues}
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
                  onChange={setValues}
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
              onChange={setValues}
              value={formData.email}
            />
          </div>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "EVENT", payload: formData });
            navigate("/add_event/verify");
          }}
          className="mx-auto py-3 px-32 text-black bg-yellow mt-8 hover:bg-yellow/90 transition-all font-bold text-base rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
