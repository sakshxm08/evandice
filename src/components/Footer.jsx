import EvLogo from "../assets/logo/EvLogo";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="flex flex-col max-w-5xl w-4/5 items-center justify-center mx-auto py-16 gap-8">
      <h1 className="text-5xl md:text-title font-title uppercase">
        Contact us
      </h1>
      <div className="flex flex-col gap-4 lg:gap-0 lg:grid grid-cols-4">
        <div className="flex flex-col gap-3 sm:gap-6 w-full col-span-3 pr-0 lg:pr-48">
          <EvLogo className="w-48 md:w-60" />
          <div className=" text-justify text-sm pb-6 sm:pb-0 sm:text-base">
            <div>
              We&apos;d love to hear from you! Whether you have questions,
              comments, or just want to say hello, we&apos;re here to help.
            </div>
            <div>
              Fill out our quick and easy form or get on a call with us we look
              forward to connecting with you.
            </div>
          </div>
          <Link
            to="https://forms.gle/wizwt3SCyjpBS1Fq7"
            target="_blank"
            className="bg-primary font-medium  py-2 px-8 w-fit text-black"
          >
            Fill out the form?
          </Link>
        </div>
        <div className="flex flex-col w-full gap-6 h-full">
          <div className="pt-6 lg:pt-16 pb-6 flex flex-col gap-2 border-b-gray-600 border-b-[0.5px]">
            <Link
              to="/about"
              className="capitalize hover:text-primary transition font-light"
            >
              About us
            </Link>
            <Link
              to="/add_fest/form"
              className="capitalize hover:text-primary transition font-light"
            >
              Register a fest
            </Link>
            <Link
              to="add_event/form"
              className="capitalize hover:text-primary transition font-light"
            >
              Add an event
            </Link>
          </div>
          <div className="flex flex-col gap-3 justify-center font-light">
            <Link
              to="#"
              target="_blank"
              onClick={() =>
                (window.location = "mailto:evandize.management@gmail.com")
              }
              className="hover:text-primary transition-all text-sm"
            >
              evandize.management@gmail.com
            </Link>
            <div className="flex gap-2">
              <Link
                to="https://www.instagram.com/evandize__?igsh=MXgzM3JpN29zZ3p0cA=="
                target="_blank"
                className=" w-8 aspect-square p-1 rounded-full hover:bg-white transition-all group cursor-pointer flex items-center justify-center"
              >
                <FiInstagram
                  className="group-hover:text-black transition-all"
                  size={20}
                />
              </Link>
              <Link
                to="https://www.linkedin.com/company/evandize/"
                target="_blank"
                className="w-8 aspect-square p-1 rounded-full hover:bg-white transition-all group cursor-pointer flex items-center justify-center"
              >
                <FiLinkedin
                  className="group-hover:text-black transition-all"
                  size={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
