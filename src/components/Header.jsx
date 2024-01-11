import { Link, NavLink } from "react-router-dom";
import EvUserIcon from "../assets/icons/EvUserIcon";
import EvLogo from "../assets/logo/EvLogo";
import { useEffect, useRef } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { UserMenu } from "./UserMenu";

const Header = () => {
  const nav_links = [
    { route: "Home", link: "/" },
    { route: "Events", link: "/all_events" },
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

  return (
    <nav
      className="w-screen  fixed top-0 left-0 bg-transparent z-50 transition-all duration-300 flex items-center justify-between"
      ref={nav_ref}
    >
      <Link to="/" className="hidden md:block pl-8">
        <EvLogo width={150} />
      </Link>
      <Link to="/" className="block md:hidden pl-8">
        <EvLogo width={100} />
      </Link>
      <div className="lg:flex hidden items-center justify-end gap-6 px-6 py-8">
        <div className="flex gap-8 items-center">
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
                to="/login"
                className=" w-20 text-sm flex items-center justify-center h-full border-[1.5px] border-primary text-primary font-semibold hover:bg-primary hover:text-black transition-all"
              >
                Login
              </Link>
              <Link
                to="/signup"
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
    </nav>
  );
};

export default Header;
{
  /* <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  /> */
}
