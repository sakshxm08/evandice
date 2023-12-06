import { Link, NavLink } from "react-router-dom";
import EvUserIcon from "../assets/icons/EvUserIcon";

const Header = () => {
  const nav_links = [
    { route: "Home", link: "/" },
    { route: "Events", link: "/events" },
    { route: "Register for a Fest", link: "/register" },
    { route: "Add an Event", link: "/addevent" },
  ];
  return (
    <div className="w-screen flex items-center justify-end top-8  fixed right-6 bg-transparent gap-6 z-50">
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
        <Link className=" w-20 text-sm flex items-center justify-center h-full border-[1.5px] border-primary text-primary font-semibold hover:bg-primary hover:text-black transition-all">
          Login
        </Link>
        <Link className="w-20 text-sm flex items-center justify-center h-full bg-primary text-black font-semibold hover:bg-primary/75 hover:border-primary/75 transition-all">
          Sign Up
        </Link>
        <Link className="flex items-center justify-center rounded-full  transition-all outline outline-none outline-offset-0 hover:outline-primary">
          <EvUserIcon className="h-full w-auto" size={40} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
