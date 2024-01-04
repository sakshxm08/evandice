import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
export const UserMenu = () => {
  const { user } = useAuthContext();

  const { logout } = useLogout();

  const signout = () => {
    logout();
  };
  return (
    <>
      {user && (
        <div className=" p-2 drop-shadow-lg  bg-gray-950 border border-gray-700 rounded-md shadow text-white w-max flex flex-col gap-1 cursor-default min-w-[250px]">
          <div className="px-4">
            <div className="py-3">
              <div className=" flex items-center">
                <div className=" flex flex-col gap-0 ">
                  <span className="font-titleFont font-light text-base whitespace-nowrap">
                    Hello,{" "}
                    <span className="font-medium">
                      {user.name.split(" ")[0]}
                    </span>
                  </span>
                  <span className="text-xs text-gray-500">{user.email}</span>
                </div>
              </div>
            </div>

            {/* <div>
          <div className="h-[0.5px] w-full bg-gray-400"></div>
          <div className="flex flex-col gap-0 text-sm py-2">
            <span className="py-1 active:text-green-800 hover:font-semibold font-light cursor-pointer">
              Orders
            </span>
            <Link
              to="/stash"
              className="py-1 active:text-green-800 hover:font-semibold font-light cursor-pointer"
            >
              Stash
            </Link>
            <span className="py-1 active:text-green-800 hover:font-semibold font-light cursor-pointer">
              Contact Us
            </span>
          </div>
        </div> */}

            <div>
              <div className="h-[0.5px] w-full bg-gray-400"></div>

              <div className="flex flex-col text-sm py-2">
                <Link
                  to="/profile"
                  className="py-1 active:text-yellow hover:font-semibold font-light cursor-pointer"
                >
                  Edit Profile
                </Link>
                <span
                  className="py-1 text-red-500 active:text-red-800 hover:font-semibold font-light cursor-pointer"
                  onClick={signout}
                >
                  Signout
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
