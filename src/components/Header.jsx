import { Link, NavLink } from "react-router-dom";
import EvUserIcon from "../assets/icons/EvUserIcon";
import { useEffect, useRef } from "react";

const Header = () => {
  const nav_links = [
    { route: "Home", link: "/" },
    { route: "Events", link: "/events" },
    { route: "Register for a Fest", link: "/register_fest" },
    { route: "Add an Event", link: "/add_event" },
    { route: "About Us", link: "/about" },
  ];

  const nav_ref = useRef();
  useEffect(() => {
    window.onscroll = function () {
      const nav = nav_ref.current;
      if (document.documentElement.scrollTop >= 80) {
        nav.classList.add("bg-black/60");
        nav.classList.add("backdrop-blur-md");
        nav.classList.remove("bg-transparent");
      } else {
        nav.classList.add("bg-transparent");
        nav.classList.remove("bg-black/60");
        nav.classList.remove("backdrop-blur-md");
      }
    };
  });

  return (
    <div
      className="w-screen  top-0  fixed right-0 bg-transparent z-50 transition-all duration-300 "
      ref={nav_ref}
    >
      <div className="flex items-center justify-end gap-6 px-6 py-8">
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
          <Link
            to="/login"
            className=" w-20 text-sm flex items-center justify-center h-full border-[1.5px] border-primary text-primary font-semibold hover:bg-primary hover:text-black transition-all"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="w-20 text-sm flex items-center justify-center h-full bg-primary text-black font-semibold hover:bg-primary/75 hover:border-primary/75 transition-all"
          >
            Sign Up
          </Link>
          <Link className="flex items-center justify-center rounded-full  transition-all outline outline-none outline-offset-0 hover:outline-primary">
            <EvUserIcon className="h-full w-auto" size={40} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
