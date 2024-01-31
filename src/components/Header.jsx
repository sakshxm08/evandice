import { Link, NavLink } from "react-router-dom";
import EvUserIcon from "../assets/icons/EvUserIcon";
import EvLogo from "../assets/logo/EvLogo";
import { useEffect, useRef, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { UserMenu } from "./UserMenu";
import { useLogout } from "../hooks/useLogout";
import { CiLogout } from "react-icons/ci";
const Header = () => {
  const nav_links = [
    { route: "Home", link: "/" },
    { route: "Events", link: "/all_events" },
    { route: "Competitions", link: "/all_competitions" },
    { route: "Register a Fest", link: "/add_fest/form" },
    { route: "Add an Event", link: "/add_event/form" },
    { route: "About Us", link: "/about" },
  ];

  const { user } = useAuthContext();

  const nav_ref = useRef();
  useEffect(() => {
    window.onscroll = function () {
      const nav = nav_ref.current;
      if (document.documentElement.scrollTop >= 80) {
        nav.classList.add("bg-black/60");
        nav.classList.add("backdrop-blur-xl");
        nav.classList.remove("bg-transparent");
      } else {
        nav.classList.add("bg-transparent");
        nav.classList.remove("bg-black/60");
        nav.classList.remove("backdrop-blur-xl");
      }
    };
  });

  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen((open) => !open);
  };

  const { logout } = useLogout();

  const signout = () => {
    logout();
    openMenu();
  };
  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [open]);
  const hamburger = useRef(null);
  const sidebar = useRef(null);
  document.onclick = function (e) {
    if (
      !hamburger.current.contains(e.target) &&
      !sidebar.current.contains(e.target)
    ) {
      setOpen(false);
    }
  };
  return (
    <>
      <nav
        className="w-screen fixed top-0 left-0 bg-transparent z-50 transition-all duration-300 flex items-center justify-between"
        ref={nav_ref}
      >
        <Link to="/" className="pl-8 py-2">
          <EvLogo className="w-32 md:w-40" />
        </Link>
        <div className="lg:flex hidden items-center justify-end gap-4 xl:gap-6 px-6">
          <div className="flex gap-4 xl:gap-8 items-center">
            {nav_links.map((item) => (
              <NavLink
                key={item.link}
                to={item.link}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "font-light h-full flex items-center justify-center text-white  cursor-pointer transition-all duration-200 relative after:absolute hover:after:w-full after:w-0 after:transition-all after:duration-300 after:content-[''] after:h-[0.5px] after:bg-primary after:left-0 after:-bottom-0"
                    : isActive
                    ? "font-light h-full flex items-center justify-center text-primary  cursor-pointer transition-all duration-200 relative after:absolute after:w-full after:transition-all after:duration-300 after:content-[''] after:h-[0.5px] after:bg-primary after:left-0 after:-bottom-0"
                    : "font-light h-full flex items-center justify-center text-white hover:text-primary cursor-pointer transition-all duration-200 relative after:absolute hover:after:w-full after:w-0 after:transition-all after:duration-300 after:content-[''] after:h-[0.5px] after:bg-primary after:left-0 after:-bottom-0"
                }
              >
                {item.route}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center gap-4 justify-center h-8">
            {!user ? (
              <>
                <Link
                  to="/auth/login"
                  className=" w-20 text-sm flex items-center justify-center h-full border-[1.5px] border-primary text-primary font-semibold hover:bg-primary hover:text-black transition-all"
                >
                  Login
                </Link>
                <Link
                  to="/auth/signup"
                  className="w-20 text-sm flex items-center justify-center h-full bg-primary text-black font-semibold hover:bg-primary/75 hover:border-primary/75 transition-all"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <div className="group relative cursor-pointer">
                  <div className="flex items-center justify-center rounded-full  transition-all outline outline-none outline-offset-0 group-hover:outline-primary">
                    <EvUserIcon className="h-full w-auto" size={40} />
                  </div>
                  <div className="group-hover:scale-y-100 origin-top shadow scale-y-0 flex opacity-0 group-hover:opacity-100 ease-in-out duration-500 absolute top-[calc(100%+10px)] right-0">
                    <UserMenu />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div
          className={`h-screen flex flex-col justify-between pt-20 pb-32 gap-6 lg:hidden fixed top-0  w-2/3 bg-primary max-w-[350px] shadow-2xl ${
            open ? "right-0" : "-right-full"
          } transition-all duration-500 ease-in-out px-8 text-lg`}
          ref={sidebar}
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 pb-8 border-b border-b-gray-50">
              {!user ? (
                <>
                  <Link
                    to="/auth/login"
                    onClick={openMenu}
                    className="w-1/2 text-base py-2 flex items-center justify-center border-[1.5px] border-white text-white font-semibold hover:bg-white hover:text-primary transition-all"
                  >
                    Login
                  </Link>
                  <Link
                    to="/auth/signup"
                    onClick={openMenu}
                    className="w-1/2 text-base py-2 flex items-center justify-center border-[1.5px] border-white bg-white text-primary font-semibold hover:bg-white/75 hover:border-primary/75 transition-all"
                  >
                    Sign Up
                  </Link>
                </>
              ) : (
                <>
                  <div className=" flex flex-col">
                    <span className="font-titleFont font-light text-lg whitespace-nowrap">
                      Hello,{" "}
                      <span className="font-medium text-xl">
                        {user.name.split(" ")[0]}
                      </span>
                    </span>
                    <span className="text-xs text-gray-500">{user.email}</span>
                    <Link
                      to="/profile"
                      onClick={openMenu}
                      className="active:text-black cursor-pointer mt-4"
                    >
                      Edit Profile
                    </Link>
                  </div>
                </>
              )}
            </div>
            {nav_links.map((item) => (
              <NavLink
                key={item.link}
                to={item.link}
                onClick={openMenu}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-white  cursor-pointer transition-all duration-200"
                    : isActive
                    ? "text-black  cursor-pointer transition-all duration-200 "
                    : "text-white hover:text-black cursor-pointer transition-all duration-200 "
                }
              >
                {item.route}
              </NavLink>
            ))}
          </div>
          {user && (
            <div className="flex flex-col gap-4 pt-8 border-t border-t-gray-50">
              <span
                className="text-red-500 bg-white w-full py-2 text-center rounded-full justify-center active:text-red-800 cursor-pointer flex gap-2 items-center"
                onClick={signout}
              >
                <CiLogout size={20} />
                Signout
              </span>
            </div>
          )}
        </div>

        <div
          className="flex lg:hidden flex-col gap-2 w-8 mr-8 transition-all z-[100]"
          onClick={openMenu}
          ref={hamburger}
        >
          <span
            className={`h-px w-full ${
              open ? "bg-black" : "bg-white"
            } rounded-full transition-all duration-500 ease-in-out`}
          ></span>
          <span
            className={`h-px ${
              open ? "w-2/3 bg-black" : "w-full bg-white"
            } rounded-full transition-all duration-500 ease-in-out`}
          ></span>
          <span
            className={`h-px w-full ${
              open ? "bg-black" : "bg-white"
            } rounded-full transition-all duration-500 ease-in-out`}
          ></span>
        </div>
      </nav>
    </>
  );
};

export default Header;
