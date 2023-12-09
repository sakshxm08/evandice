import { LuUser } from "react-icons/lu";
import { background, login_bg } from "../assets/images/images";
import { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Dropdown from "../components/Dropdown";

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
  // const [states] = useState([]);
  // const [districts, setDistricts] = useState([]);
  // const [statesData, setStatesData] = useState([]);

  const [name, setName] = useState("");
  const [clgName, setClgName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [instagram, setInstagram] = useState("");
  const [dept, setDept] = useState("");

  // useEffect(() => {
  //   fetch("states.json")
  //     .then((res) => res.json())
  //     .then((res) => setStatesData(res[0].states));
  // }, []);

  // useEffect(() => {
  //   statesData.map((state) => states.push(state.state));
  // }, [statesData, states]);
  // useEffect(() => {
  //   statesData
  //     .filter((sel_state) => sel_state === state)
  //     .map((state) => setDistricts(state.districts));
  // }, [state, statesData]);

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
        <form className="flex flex-col gap-4 my-16">
          <div className="grid grid-cols-3 w-full relative gap-10 ">
            {isEditable ? (
              <div className="absolute right-0 -top-12 flex justify-center items-center gap-4">
                <div
                  className="border py-1 px-4 rounded text-sm cursor-pointer border-yellow text-yellow hover:bg-yellow hover:text-black transition-all"
                  onClick={() => setIsEditable(false)}
                >
                  Save
                </div>
                <div
                  className="border py-1 px-4 rounded text-sm cursor-pointer hover:bg-gray-100 hover:text-black"
                  onClick={() => setIsEditable(false)}
                >
                  Cancel
                </div>
              </div>
            ) : (
              <div
                className="absolute right-0 -top-12 text-center border py-1 px-4 rounded text-sm hover:bg-gray-100 hover:text-black transition-colors cursor-pointer"
                onClick={() => setIsEditable(true)}
              >
                Edit
              </div>
            )}

            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-yellow text-sm">
                Name
              </label>
              <input
                type="text"
                className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
                disabled={!isEditable}
                value={name}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="college-name" className="text-yellow text-sm">
                College Name
              </label>
              <input
                type="text"
                className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
                name="college-name"
                id="college-name"
                onChange={(e) => setClgName(e.target.value)}
                disabled={!isEditable}
                value={clgName}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-yellow text-sm">
                Email
              </label>
              <input
                type="text"
                className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                disabled={!isEditable}
                value={email}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Dropdown
                isEditable={isEditable}
                value={gender}
                setValue={setGender}
                type={"gender"}
                values={genders}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="city" className="text-yellow text-sm">
                City
              </label>
              <input
                type="text"
                className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
                name="city"
                id="city"
                onChange={(e) => setCity(e.target.value)}
                disabled={!isEditable}
                value={city}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="state" className="text-yellow text-sm">
                State
              </label>
              <input
                type="text"
                className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
                name="state"
                id="state"
                onChange={(e) => setState(e.target.value)}
                disabled={!isEditable}
                value={state}
              />
            </div>
          </div>
          <h2 className="font-semibold text-xl text-white mt-4">
            Personal Details
          </h2>
          <div className="grid grid-cols-3 w-full relative gap-10 ">
            <div className="flex flex-col gap-1">
              <label htmlFor="contact_no" className="text-yellow text-sm">
                Contact Number
              </label>
              <input
                type="number"
                className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
                name="contact_no"
                id="contact_no"
                onChange={(e) => setContactNo(e.target.value)}
                disabled={!isEditable}
                value={contactNo}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="instagram" className="text-yellow text-sm">
                Instagram
              </label>
              <input
                type="text"
                className="py-2 px-4 rounded bg-transparent border disabled:border-gray-600 disabled:text-gray-500 outline-none focus-visible:border-yellow"
                name="instagram"
                id="instagram"
                onChange={(e) => setInstagram(e.target.value)}
                disabled={!isEditable}
                value={instagram}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Dropdown
                isEditable={isEditable}
                value={dept}
                setValue={setDept}
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
