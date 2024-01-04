import EvLogo from "../assets/logo/EvLogo";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="flex flex-col max-w-5xl w-4/5 items-center justify-center mx-auto py-16 gap-8">
      <h1 className="text-title font-title uppercase">Contact us</h1>
      <div className="flex flex-col gap-4 lg:gap-0 lg:grid grid-cols-4">
        <div className="flex flex-col gap-3 sm:gap-6 w-full col-span-3 pr-0 lg:pr-48">
          <EvLogo width={200} />
          <div>
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per .
          </div>
        </div>
        <div className="flex flex-col w-full gap-6 h-full">
          <h2 className="text-4xl uppercase text-primary font-medium pt-7 sm:py-7">
            About us
          </h2>
          <div className="flex flex-col gap-3 justify-center font-light">
            <span>+919876543210</span>
            <span>jkm@gmail.com</span>
            <span>BITS PILANI</span>
            <div className="flex gap-2">
              <span className="w-8 aspect-square p-1 rounded-full hover:bg-white transition-all group cursor-pointer flex items-center justify-center">
                <FiFacebook
                  className="group-hover:text-black transition-all"
                  size={20}
                />
              </span>
              <span className="w-8 aspect-square p-1 rounded-full hover:bg-white transition-all group cursor-pointer flex items-center justify-center">
                <FiTwitter
                  className="group-hover:text-black transition-all"
                  size={20}
                />
              </span>
              <span className=" w-8 aspect-square p-1 rounded-full hover:bg-white transition-all group cursor-pointer flex items-center justify-center">
                <FiInstagram
                  className="group-hover:text-black transition-all"
                  size={20}
                />
              </span>
              <span className="w-8 aspect-square p-1 rounded-full hover:bg-white transition-all group cursor-pointer flex items-center justify-center">
                <FiYoutube
                  className="group-hover:text-black transition-all"
                  size={20}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
