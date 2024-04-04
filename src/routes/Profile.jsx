import { LuUser } from "react-icons/lu";
import { login_bg } from "../assets/images/images";
import { useEffect, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Dropdown from "../components/Dropdown";
import { State, City } from "country-state-city";
import { FaUserEdit } from "react-icons/fa";
import { IoMdSave } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { InputText, Label } from "../components/FormComponents";
import { depts, genders, interests } from "../assets/values";
import { useAuthContext } from "../hooks/useAuthContext";
import { setValues } from "../services/helperFunctions";
import { apiConnector } from "../services/apiConnector";
import { endpoints } from "../services/apiRoutes";
import { toast } from "react-toastify";
import { GridLoader } from "react-spinners";
import { RegisteredOrSubmittedEventCard } from "../components/RegisteredOrSubmittedEventCard";

const Profile = () => {
  const { user } = useAuthContext();

  const [userImg] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const [states] = useState([]);
  const [cities, setCities] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [showRegisteredEvents, setShowRegisteredEvents] = useState(false);

  const initialValues = {
    name: user?.name || "",
    clgName: user?.clgName || "",
    email: user?.email || "",
    gender: user?.gender || "",
    state: user?.state || "",
    city: user?.city || "",
    contactNo: user?.contactNo || "",
    instagram: user?.instagram || "",
    dept: user?.dept || "",
    interests: user?.interests || [],
  };

  const [formData, setFormData] = useState(initialValues);

  const [checked, setChecked] = useState({
    interests: formData.interests,
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
    // Check if selected state has changed
    const citiesOfState = State.getStatesOfCountry("IN")
      .filter((s) => s.name === formData.state)
      .flatMap((s) => City.getCitiesOfState("IN", s.isoCode))
      .map((city) => city.name);

    setCities(citiesOfState);
    if (formData.state !== user?.state) {
      setFormData({ ...formData, city: "" }); // Reset city when state changes
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.state]);

  const handleSave = (e) => {
    e.preventDefault();
    setIsLoading(true);
    apiConnector("PUT", endpoints.AUTH.PROFILE, formData, {
      "Content-Type": "application/json",
    })
      .then(() => {
        setIsEditable(false);
        toast.success("Details updated successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="w-full">
      {isLoading && (
        <div className="fixed bg-black/60 inset-0  w-screen h-screen flex items-center justify-center z-[1000] ">
          <GridLoader color="#DF9438" />
        </div>
      )}
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
              onClick={handleSave}
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
            <Label value={"Name"} htmlFor={"name"} />
            <InputText
              name="name"
              id="name"
              onChange={(e) => setValues(e, formData, setFormData)}
              disabled={!isEditable}
              value={formData.name}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"College Name"} htmlFor={"clgName"} />
            <InputText
              name="clgName"
              id="clgName"
              onChange={(e) => setValues(e, formData, setFormData)}
              disabled={!isEditable}
              value={formData.clgName}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Email"} htmlFor={"email"} />
            <InputText
              type="email"
              name="email"
              id="email"
              onChange={(e) => setValues(e, formData, setFormData)}
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
            <Label value={"Contact Number"} htmlFor={"contactNo"} />
            <InputText
              type="number"
              name="contactNo"
              id="contactNo"
              onChange={(e) => setValues(e, formData, setFormData)}
              disabled={!isEditable}
              value={formData.contactNo}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label value={"Instagram"} htmlFor={"instagram"} />
            <InputText
              name="instagram"
              id="instagram"
              onChange={(e) => setValues(e, formData, setFormData)}
              disabled={!isEditable}
              value={formData.instagram}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 w-full relative gap-4 mt-4">
          <div className="flex flex-col gap-2">
            <Label value={"Add my interests"} />

            <div className="grid grid-cols-3 w-full gap-1">
              {interests.map((interest, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    name="interests"
                    value={interest}
                    checked={formData.interests.includes(interest)}
                    onChange={handleCheck}
                    id={interest}
                    disabled={!isEditable}
                    className="accent-yellow w-3 disabled:cursor-not-allowed peer"
                  />
                  <label
                    htmlFor={interest}
                    className="text-sm capitalize peer-disabled:text-gray-400 peer-disabled:cursor-not-allowed peer-checked:peer-disabled:font-black peer-checked:peer-disabled:text-gray-100"
                  >
                    {interest}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label value={"College Department"} />

            <div className="grid grid-cols-3 w-full gap-1">
              {depts.map((department, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name="dept"
                    value={department}
                    disabled={!isEditable}
                    checked={formData.dept === department}
                    // onChange={handleCheck}
                    onChange={(e) => {
                      console.log(formData.dept, department);
                      setValues(e, formData, setFormData);
                    }}
                    id={department}
                    className="accent-yellow w-3 disabled:cursor-not-allowed peer"
                  />
                  <label
                    htmlFor={department}
                    className="text-sm capitalize peer-disabled:text-gray-400 peer-disabled:cursor-not-allowed peer-checked:peer-disabled:font-black peer-checked:peer-disabled:text-gray-100"
                  >
                    {department}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </form>

      <div className="text-yellow text-base flex items-center gap-4 font-bold uppercase mt-8">
        <div>You registered for...</div>
        <button
          type
          onClick={() => setShowRegisteredEvents((prev) => !prev)}
          className="text-white text-sm underline underline-offset-1 hover:text-yellow transition-all"
        >
          {showRegisteredEvents ? "Hide" : "Show"}
        </button>
      </div>
      {showRegisteredEvents && (
        <div className="grid grid-cols-4 w-full relative gap-10 mt-4">
          <RegisteredOrSubmittedEventCard />
          <RegisteredOrSubmittedEventCard />
          <RegisteredOrSubmittedEventCard />
          <RegisteredOrSubmittedEventCard />
          <RegisteredOrSubmittedEventCard />
          <RegisteredOrSubmittedEventCard />
        </div>
      )}
    </div>
  );
};

export default Profile;
