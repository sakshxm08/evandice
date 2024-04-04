import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { background, who_are_we } from "../assets/images/images";
import { Link } from "react-router-dom";
// import TeamCard from "../components/TeamCard";

const About = () => {
  // const team_members = ["", "", "", "", "", ""];
  return (
    <div className=" relative">
      <div className="absolute top-0 left-0 h-full -z-50 overflow-hidden object-cover">
        <img
          src={background}
          alt="background"
          className="h-full w-screen object-cover object-center"
        />
        <div className="absolute inset-0 h-full w-screen bg-gradient-to-t from-50% from-black"></div>
      </div>
      <div className="py-32 flex flex-col items-center justify-center max-w-7xl w-11/12 mx-auto gap-10">
        <h1 className="text-5xl md:text-title uppercase font-title">
          About us
        </h1>
        <div className="w-11/12 bg-gray-100/40 backdrop-blur-2xl rounded-2xl p-6 xl:px-2 xl:py-4 flex items-center justify-between text-black gap-6">
          <div className="flex flex-col justify-center gap-4 xl:pl-6 w-full lg:w-2/3">
            <div className="flex sm:flex-row flex-col sm:items-center gap-6">
              <img
                src={who_are_we}
                className=" lg:hidden block w-full sm:w-1/3"
                alt=""
              />

              <div className="flex flex-col justify-center gap-2">
                <h4 className="font-medium uppercase">Team Evandize</h4>
                <h1 className="text-5xl font-semibold">Who are we?</h1>
              </div>
            </div>
            <div className="text-sm">
              <p>
                Gear up for a festival frenzy like never before! Evandize is not
                just about events; it&apos;s about creating memories that will
                have people talking for years. Come join the party where
                innovation meets celebration - because regular festivals are so
                last season!
              </p>
            </div>
            <div className="flex gap-4 items-center md:justify-start justify-center pt-6 sm:flex-row flex-col">
              <Link
                to="https://www.instagram.com/evandize__?igsh=MXgzM3JpN29zZ3p0cA=="
                target="_blank"
                className="text-black flex items-center justify-start text-sm font-medium h-10 w-36 bg-[#FBBC05] rounded-full group overflow-hidden relative"
              >
                <div className="group-hover:-translate-x-ful min-w-[9rem] h-full whitespace-nowrap transition-all duration-500 flex items-center justify-center mx-auto">
                  Our Instagram
                </div>
                <div className=" absolute group-hover:left-0 min-w-[9rem] gap-1 h-full flex justify-center items-center left-full bg-instagram text-white z-20 transition-all duration-500">
                  <FiInstagram size={20} />
                  @evandize_
                </div>
              </Link>
              <Link
                to="https://www.linkedin.com/company/evandize/"
                target="_blank"
                className="text-white flex items-center justify-start text-sm font-medium h-10 w-36 bg-[#4E54C8] rounded-full group overflow-hidden relative"
              >
                <div className="group-hover:-translate-x-ful min-w-[9rem] h-full whitespace-nowrap transition-all duration-500 flex items-center justify-center mx-auto">
                  Our Linkedin
                </div>
                <div className=" absolute group-hover:left-0 min-w-[9rem] gap-1 h-full flex justify-center items-center left-full bg-[#0077B5] text-white z-20 transition-all duration-500">
                  <FaLinkedin size={20} />
                  @evandize_
                </div>
              </Link>
              {/* <button className="text-white text-sm font-medium h-10 w-36 bg-[#0163E0] rounded-full">
                Read More
              </button> */}
            </div>
          </div>
          <img src={who_are_we} className=" hidden lg:block w-1/3" alt="" />
        </div>
        <div className=" drop-shadow-sm w-3/4 mx-auto text-center flex flex-col justify-center items-center gap-4">
          <p>
            We specialize in turning ordinary events into mind-blowing
            experiences with themes so wild, you&apos;ll wonder why you ever
            settled for the ordinary. Planning, promoting, executing -
            we&apos;re the wizards behind the curtain handling it all. You focus
            on the fun; we&apos;ll handle the rest. It&apos;s a festival.
            Let&apos;s keep it stress-free!
          </p>
          <p>
            We&apos;re not just event planners; wevre your partners in crime. We
            collaborate with colleges to capture their vibe and inject it into
            festivals that scream personality. Tech geeks? Guilty as charged! We
            use the latest wizardry to streamline everything - from ticketing to
            social media hype. Let&apos;s make your festival as smooth as a
            perfectly mixed beat.
          </p>
          <p>
            Join us in redefining the landscape of college festivals. Let
            Evandize be the catalyst for an era where each festival is not just
            an event but an immersive experience that sparks inspiration and
            leaves a legacy. Elevate your celebrations with us - where
            innovation meets celebration!
          </p>
        </div>
        {/* <div className="w-full flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl md:text-title uppercase font-title">
            the team
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {team_members.map((member, index) => (
              <TeamCard key={index} />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
