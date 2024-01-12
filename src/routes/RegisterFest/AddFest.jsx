import { useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown";
import { State, City } from "country-state-city";
import { useNavigate } from "react-router-dom";
import { useEventContext } from "../../hooks/useEventContext";

export const AddFest = () => {
  const [states] = useState([]);
  const [cities, setCities] = useState([]);
  const [stateData, setStateData] = useState([]);

  const { dispatch, fest } = useEventContext();

  const navigate = useNavigate();

  const depts = [
    "Computer Science Engineering",
    "Information Technology",
    "Electronics and Communcation Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
  ];

  const [formData, setFormData] = useState(
    location.state ? location.state.formData : fest
  );

  const setValues = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [checked, setChecked] = useState(formData.depts);
  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
    formData.depts = updatedList;
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
      <form className="flex flex-col gap-4 my-4 text-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full relative gap-10 ">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-yellow text-xs">
              Fest Name
            </label>
            <input
              type="text"
              className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
              name="name"
              id="name"
              onChange={setValues}
              value={formData.name}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="date" className="text-yellow text-xs">
              Fest Date/s
            </label>
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
            <label htmlFor="address" className="text-yellow text-xs">
              Address
            </label>
            <input
              type="text"
              className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
              name="address"
              id="address"
              onChange={setValues}
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
            <label htmlFor="gmap_link" className="text-yellow text-xs">
              Google Maps Link
            </label>
            <input
              type="text"
              className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
              name="gmap_link"
              id="gmap_link"
              onChange={setValues}
              value={formData.gmap_link}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="contact_no" className="text-yellow text-xs">
              Contact Number
            </label>
            <input
              type="number"
              className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
              name="contact_no"
              id="contact_no"
              onChange={setValues}
              value={formData.contact_no}
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-yellow text-xs">Fest Type</div>
            <div className="flex items-center gap-4">
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  id="offline"
                  name="type"
                  className="accent-yellow"
                  checked={formData.type === "offline"}
                  onChange={setValues}
                  value={"offline"}
                />
                <label htmlFor="offline">Offline</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  id="online"
                  name="type"
                  onChange={setValues}
                  checked={formData.type === "online"}
                  value={"online"}
                  className="accent-yellow"
                />
                <label htmlFor="online">Online</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  id="hybrid"
                  name="type"
                  className="accent-yellow"
                  onChange={setValues}
                  checked={formData.type === "hybrid"}
                  value={"hybrid"}
                />
                <label htmlFor="hybrid">Hybrid</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-yellow text-xs">Accomodation Provided</div>
            <div className="flex items-center gap-4">
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  id="free_accomod"
                  name="accomodation"
                  checked={formData.accomodation === "free"}
                  onChange={setValues}
                  value={"free"}
                  className="accent-yellow"
                />
                <label htmlFor="free_accomod">Yes, Free</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  id="paid_accomod"
                  name="accomodation"
                  onChange={setValues}
                  checked={formData.accomodation === "paid"}
                  value={"paid"}
                  className="accent-yellow"
                />
                <label htmlFor="paid_accomod">Yes, Paid</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  id="no_accomod"
                  name="accomodation"
                  className="accent-yellow"
                  checked={formData.accomodation === "no"}
                  onChange={setValues}
                  value={"no"}
                />
                <label htmlFor="no_accomod">No</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 col-span-1 md:col-span-2 lg:col-span-3">
            <div className="text-yellow text-xs">
              Relevant College Departments
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-cente gap-4">
              {depts.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start justify-start gap-2 whitespace-nowra"
                >
                  <input
                    value={item}
                    id={item}
                    type="checkbox"
                    onChange={handleCheck}
                    checked={formData.depts.includes(item)}
                    className="accent-yellow mt-[3px]"
                  />
                  <label htmlFor={item}>{item}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="poster" className="text-yellow text-xs mb-1">
              Add Main Poster
            </label>
            <input type="file" name="poster" id="poster" className="hidden" />
            <label
              htmlFor="poster"
              className="border border-gray-200 rounded-md py-2 px-6 hover:bg-gray-200 hover:text-black cursor-pointer transition-all w-fit text-sm"
            >
              Choose file
            </label>
          </div>
          <div className="flex flex-col gap-1 col-span-1 md:col-span-2">
            <label htmlFor="images" className="text-yellow text-xs mb-1">
              Add Images
            </label>
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
            <label htmlFor="instagram" className="text-yellow text-xs">
              Add Instagram Link
            </label>
            <input
              type="text"
              className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
              name="instagram"
              id="instagram"
              onChange={setValues}
              value={formData.instagram}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="facebook" className="text-yellow text-xs">
              Add Facebook Link
            </label>
            <input
              type="text"
              className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
              name="facebook"
              id="facebook"
              onChange={setValues}
              value={formData.facebook}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="twitter" className="text-yellow text-xs">
              Add Twitter Link
            </label>
            <input
              type="text"
              className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
              name="twitter"
              id="twitter"
              onChange={setValues}
              value={formData.twitter}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="sponsors" className="text-yellow text-xs">
              Fest Sponsors
            </label>
            <input
              type="text"
              className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
              name="sponsors"
              id="sponsors"
              onChange={setValues}
              value={formData.sponsors}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="foodstalls" className="text-yellow text-xs">
              Fest Food Stalls
            </label>
            <input
              type="text"
              className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
              name="foodstalls"
              id="foodstalls"
              onChange={setValues}
              value={formData.foodstalls}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="accomodations" className="text-yellow text-xs">
              Fest Accomodations
            </label>
            <input
              type="text"
              className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
              name="accomodations"
              id="accomodations"
              onChange={setValues}
              value={formData.accomodations}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="poc_name" className="text-yellow text-xs">
              POC Name
            </label>
            <input
              type="text"
              className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
              name="poc_name"
              id="poc_name"
              onChange={setValues}
              value={formData.poc_name}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="poc_contact" className="text-yellow text-xs">
              POC Contact Number
            </label>
            <input
              type="text"
              className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
              name="poc_contact"
              id="poc_contact"
              onChange={setValues}
              value={formData.poc_contact}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="poc_email" className="text-yellow text-xs">
              POC Email
            </label>
            <input
              type="text"
              className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
              name="poc_email"
              id="poc_email"
              onChange={setValues}
              value={formData.poc_email}
            />
          </div>

          <div className="flex flex-col gap-1">
            <div className="text-yellow text-xs">Registration Fees</div>
            <div className="flex items-center gap-4">
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  id="paid_plan"
                  name="registerfees"
                  onChange={setValues}
                  checked={formData.registerfees === "paid"}
                  value={"paid"}
                  className="accent-yellow"
                />
                <label htmlFor="paid_plan">Paid</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  id="free_plan"
                  name="registerfees"
                  onChange={setValues}
                  checked={formData.registerfees === "free"}
                  value={"free"}
                  className="accent-yellow"
                />
                <label htmlFor="free_plan">Free</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  id="multiple_plan"
                  name="registerfees"
                  onChange={setValues}
                  checked={formData.registerfees === "multiple"}
                  value={"multiple"}
                  className="accent-yellow"
                />
                <label htmlFor="multiple_plan">Multiple Plans</label>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "EVENT", payload: formData });
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
