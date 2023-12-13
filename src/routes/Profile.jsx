import { LuUser } from "react-icons/lu";
import { background, login_bg } from "../assets/images/images";
import { useEffect, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Dropdown from "../components/Dropdown";
import { State, City } from "country-state-city";
import { FaUserEdit } from "react-icons/fa";
import { IoMdSave } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Profile = () => {
  const [userImg] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const genders = ["Male", "Female", "Prefer not to say"];
  const depts = [
    "Computer Science Engineering",
    "Information Technology",
    "Electronics and Communcation Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
  ];
  const [states] = useState([]);
  const [cities, setCities] = useState([]);
  const [stateData, setStateData] = useState([]);

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

  const [formData, setFormData] = useState(initialValues);

  const setValues = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
    console.log(stateData);
  }, [stateData, formData.state, cities]);
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
          My profile
        </h1>
        <div className="hover:bg-gray-400 bg-gray-200  mx-auto my-4  rounded-full  w-32 aspect-square transition-all overflow-hidden group">
          {userImg ? (
            <>
              <div className=" text-black relative font-light h-full w-full flex items-center justify-center cursor-pointer object-cover overflow-hidden">
                <img src={login_bg} className="w-fll object-cover h-full" />
                <div className="absolute w-full h-full inset-0 hidden items-center flex-col gap-2 cursor-default justify-center group-hover:flex bg-black/60 text-white ">
                  <label htmlFor="user_image">
                    <MdEdit
                      size={40}
                      className="cursor-pointer p-2  rounded-full hover:bg-black transition-all"
                    />
                  </label>
                  <div className="w-1/4 h-px bg-gray-200"></div>
                  <MdDelete
                    size={40}
                    className="cursor-pointer p-2  rounded-full hover:bg-black transition-all"
                  />
                </div>
              </div>
            </>
          ) : (
            <label
              htmlFor="user_image"
              className=" text-black relative font-light h-full w-full flex items-center justify-center cursor-pointer object-cover overflow-hidden"
            >
              <LuUser size={80} />
            </label>
          )}
          <input
            type="file"
            name="user_image"
            id="user_image"
            className="hidden"
          />
        </div>
        <div className="mx-auto my-8 flex border items-center justify-center w-fit py-3 font-light px-6 text-sm rounded-full gap-4 hover:bg-white hover:text-black transition-all cursor-pointer">
          <FcGoogle size={20} /> Link Google Account
        </div>
        <div className="w-full flex justify-end text-xs">
          {isEditable ? (
            <div className="right-0 -top-12 flex justify-center items-center gap-4">
              <div
                className="border flex items-center justify-center h-8 gap-2 px-4 rounded cursor-pointer border-yellow text-yellow hover:bg-yellow hover:text-black transition-all"
                onClick={() => setIsEditable(false)}
              >
                <IoMdSave size={20} />
                Save
              </div>
              <div
                className="border flex items-center justify-center h-8 gap-2 px-4 rounded cursor-pointer hover:bg-gray-100 hover:text-black"
                onClick={() => {
                  setIsEditable(false);
                  setFormData(initialValues);
                }}
              >
                <RxCross1 />
                Cancel
              </div>
            </div>
          ) : (
            <div
              className="flex items-center justify-center gap-2 right-0 -top-12 text-center border h-8 px-4 rounded  hover:bg-yellow hover:border-yellow hover:text-black transition-colors cursor-pointer"
              onClick={() => setIsEditable(true)}
            >
              <FaUserEdit size={20} />
              Edit Details
            </div>
          )}
        </div>
        <form className="flex flex-col gap-4 my-4 text-sm">
          <div className="grid grid-cols-3 w-full relative gap-10 ">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-yellow text-xs">
                Name
              </label>
              <input
                type="text"
                className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
                name="name"
                id="name"
                onChange={setValues}
                disabled={!isEditable}
                value={formData.name}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="clgName" className="text-yellow text-xs">
                College Name
              </label>
              <input
                type="text"
                className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
                name="clgName"
                id="clgName"
                onChange={setValues}
                disabled={!isEditable}
                value={formData.clgName}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-yellow text-xs">
                Email
              </label>
              <input
                type="text"
                className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
                name="email"
                id="email"
                onChange={setValues}
                disabled={!isEditable}
                value={formData.email}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Dropdown
                isEditable={isEditable}
                formData={formData}
                setFormData={setFormData}
                type={"gender"}
                values={genders}
              />
            </div>

            <div className="flex flex-col gap-1">
              <Dropdown
                isEditable={isEditable}
                formData={formData}
                setFormData={setFormData}
                type={"state"}
                values={states}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Dropdown
                isEditable={isEditable}
                formData={formData}
                setFormData={setFormData}
                type={"city"}
                values={cities}
              />
            </div>
          </div>
          <h2 className="font-semibold text-xl text-white mt-4">
            Personal Details
          </h2>
          <div className="grid grid-cols-3 w-full relative gap-10 ">
            <div className="flex flex-col gap-1">
              <label htmlFor="contactNo" className="text-yellow text-xs">
                Contact Number
              </label>
              <input
                type="text"
                className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
                name="contactNo"
                id="contactNo"
                onChange={setValues}
                disabled={!isEditable}
                value={formData.contactNo}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="instagram" className="text-yellow text-xs">
                Instagram
              </label>
              <input
                type="text"
                className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
                name="instagram"
                id="instagram"
                onChange={setValues}
                disabled={!isEditable}
                value={formData.instagram}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Dropdown
                isEditable={isEditable}
                formData={formData}
                setFormData={setFormData}
                type={"college department"}
                values={depts}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
