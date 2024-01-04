import { useState } from "react";
import { background } from "../assets/images/images";
import Dropdown from "../components/Dropdown";

export const RegisterFest = () => {
  const initialValues = {
    name: "",
    clgName: "",
    email: "",
    gender: "",
    state: "",
    city: "",
    contactNo: "",
    instagram: "",
    dept: "",
  };
  const depts = [
    "Computer Science Engineering",
    "Information Technology",
    "Electronics and Communcation Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
  ];
  const [formData, setFormData] = useState(initialValues);
  const setValues = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [checked, setChecked] = useState([]);
  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 h-full -z-50 overflow-hidden w-screen">
        <img
          src={background}
          alt="background"
          className="w-screen h-auto brightness-90"
        />
        <div className="absolute inset-0 h-full w-screen bg-gradient-to-t from-50% from-black"></div>
      </div>
      <div className="py-32 max-w-7xl w-11/12 mx-auto">
        <h1 className="text-title font-title uppercase mx-auto text-center">
          add an event
        </h1>
        <div className="grid grid-cols-3 mx-auto w-11/12 my-16">
          <div className="flex items-center flex-col justify-center gap-2 text-sm">
            <div className="text-yellow">Event Category</div>
            <div className="flex items-center gap-4">
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
            <div className="text-yellow">Find a fest</div>
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
            <button className="py-3 px-6 bg-yellow rounded-md font-bold text-black w-fit h-fit hover:bg-yellow/80 transition-all">
              Create a new fest
            </button>
          </div>
        </div>
        <form className="flex flex-col gap-4 my-4 text-sm">
          <div className="grid grid-cols-3 w-full relative gap-10 ">
            <div className="flex flex-col gap-1">
              <label htmlFor="event_name" className="text-yellow text-xs">
                Event Name
              </label>
              <input
                type="text"
                className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
                name="event_name"
                id="event_name"
                onChange={setValues}
                value={formData.event_name}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="event_date" className="text-yellow text-xs">
                Event Date/s
              </label>
              <input
                type="text"
                className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
                name="event_date"
                id="event_date"
                onChange={setValues}
                value={formData.event_date}
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
            <div className="flex flex-col gap-1">
              <label htmlFor="map_link" className="text-yellow text-xs">
                Google Maps Link
              </label>
              <input
                type="text"
                className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
                name="map_link"
                id="map_link"
                onChange={setValues}
                value={formData.map_link}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-yellow text-xs">
                Email for Contact
              </label>
              <input
                type="text"
                className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
                name="email"
                id="email"
                onChange={setValues}
                value={formData.email}
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
              <div className="text-yellow text-xs">Event Type</div>
              <div className="flex items-center gap-4">
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    id="offline"
                    name="type"
                    className="accent-yellow"
                  />
                  <label htmlFor="offline">Offline</label>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    id="online"
                    name="type"
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
                    className="accent-yellow"
                  />
                  <label htmlFor="free_accomod">Yes, Free</label>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    id="paid_accomod"
                    name="accomodation"
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
                  />
                  <label htmlFor="no_accomod">No</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-yellow text-xs">Registration Fees</div>
              <div className="flex items-center gap-4">
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    id="paid_plan"
                    name="registerfees"
                    className="accent-yellow"
                  />
                  <label htmlFor="paid_plan">Paid</label>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    id="free_plan"
                    name="registerfees"
                    className="accent-yellow"
                  />
                  <label htmlFor="free_plan">Free</label>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    id="multiple_plan"
                    name="registerfees"
                    className="accent-yellow"
                  />
                  <label htmlFor="multiple_plan">Multiple Planss</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 col-span-3">
              <div className="text-yellow text-xs">
                Relevant College Departments
              </div>
              <div className="grid grid-cols-4 items-cente gap-4">
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
            <div className="flex flex-col gap-1 col-span-2">
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
                Event Sponsors
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
                Event Food Stalls
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
          </div>
          <button className="mx-auto py-3 px-32 text-black bg-yellow mt-8 hover:bg-yellow/90 transition-all font-bold text-base rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

{
  /* <div className="flex flex-col gap-1"> */
}
{
  /* <Dropdown
  formData={formData}
  setFormData={setFormData}
  type={"gender"}
/> */
}
// </div>

{
  /* <div className="flex flex-col gap-1"> */
}
{
  /* <Dropdown
  formData={formData}
  setFormData={setFormData}
  type={"state"}
/> */
}
// </div>
{
  /* <div className="flex flex-col gap-1"> */
}
{
  /* <Dropdown
  formData={formData}
  setFormData={setFormData}
  type={"city"}
/> */
}
// </div>
