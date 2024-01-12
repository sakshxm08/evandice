import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { background, who_are_we } from "../assets/images/images";
import TeamCard from "../components/TeamCard";

const About = () => {
  const team_members = ["", "", "", "", "", ""];
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
        <div className="w-full bg-gray-100/40 backdrop-blur-2xl rounded-2xl p-6 xl:p-2 flex items-center justify-between text-black gap-6">
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
              Lorem ipsum dolor sit amet consectetur. Sit fermentum sed lobortis
              massa adipiscing sed vel. Pretium quis orci eget tincidunt libero
              et. At varius sit velit nisl eu cursus nec laoreet nibh. Purus
              semper maecenas ut viverra hac. Eget diam cras est viverra ut
              consectetur. Est blandit aliquam ut sit sit. Ultrices et eget
              venenatis nunc diam faucibus netus amet nibh. Vitae mauris
              tincidunt fringilla fermentum lobortis nisl. Hendrerit consequat
              facilisis amet cursus cras. Sit pharetra semper neque consequat
              maecenas pharetra est luctus. Mi aenean auctor consectetur aliquet
              ut odio ullamcorper. Sed donec sit id sit arcu et varius sapien
              laoreet. Id risus iaculis posuere nec enim id facilisis nascetur.
              Placerat.
            </div>
            <div className="flex gap-4 items-center pt-6 md:justify-start justify-center sm:flex-row flex-col">
              <button className="text-black flex items-center justify-start text-sm font-medium h-10 w-36 bg-[#FBBC05] rounded-full group overflow-hidden relative">
                <div className="group-hover:-translate-x-ful min-w-[9rem] h-full whitespace-nowrap transition-all duration-500 flex items-center justify-center mx-auto">
                  Our Instagram
                </div>
                <div className=" absolute group-hover:left-0 min-w-[9rem] gap-1 h-full flex justify-center items-center left-full bg-instagram text-white z-20 transition-all duration-500">
                  <FiInstagram size={20} />
                  @evandize_
                </div>
              </button>
              <button className="text-white flex items-center justify-start text-sm font-medium h-10 w-36 bg-[#4E54C8] rounded-full group overflow-hidden relative">
                <div className="group-hover:-translate-x-ful min-w-[9rem] h-full whitespace-nowrap transition-all duration-500 flex items-center justify-center mx-auto">
                  Our Linkedin
                </div>
                <div className=" absolute group-hover:left-0 min-w-[9rem] gap-1 h-full flex justify-center items-center left-full bg-[#0077B5] text-white z-20 transition-all duration-500">
                  <FaLinkedin size={20} />
                  @evandize_
                </div>
              </button>
              <button className="text-white text-sm font-medium h-10 w-36 bg-[#0163E0] rounded-full">
                Read More
              </button>
            </div>
          </div>
          <img src={who_are_we} className=" hidden lg:block w-1/3" alt="" />
        </div>
        <div className=" drop-shadow-sm">
          Lorem ipsum dolor sit amet consectetur. Massa nunc blandit justo
          auctor ac nisi. Lobortis aliquam placerat at eu. Nisi porta nunc quis
          ipsum praesent quis risus risus aliquet. Quam ornare proin orci sed
          consequat. Id morbi purus aliquet cursus aliquet iaculis habitasse
          tellus. Ultricies magna ligula at habitant fermentum nunc lacinia.
          Libero laoreet sit lobortis non a viverra at purus. Odio ut maecenas
          cursus in. Arcu quam enim metus amet enim amet. Nisi sed pharetra nunc
          a vel nullam adipiscing id. Elit orci facilisi venenatis at velit
          felis nulla. Eget augue semper malesuada eros leo sit. Dui tellus odio
          tincidunt odio diam proin laoreet quisque. Phasellus risus pretium
          ultricies nibh libero. Aliquet dapibus posuere ut amet nunc aliquam
          amet odio bibendum. Cursus et nulla maecenas suspendisse. Phasellus
          netus vulputate quis a sit sem venenatis viverra hendrerit. Id
          suscipit nisi arcu sed turpis quam et porttitor. Mi faucibus massa
          pharetra phasellus interdum id nunc mattis urna. Turpis risus viverra
          in velit sollicitudin massa nisl dictumst vitae. Non vitae orci
          bibendum vitae. Ut montes curabitur sagittis fusce sed urna. Odio
          facilisis et tincidunt et. Ut urna luctus et vel a sagittis volutpat
          duis. Fames velit velit augue tortor scelerisque libero. Tempor augue
          mi eget gravida tellus in. Vehicula pharetra a dui a scelerisque ac.
          Integer platea ac in pellentesque diam eu. In auctor non lectus augue
          nisi neque venenatis duis. Nunc turpis pellentesque dis morbi
          suspendisse vitae risus posuere. At eget volutpat porttitor egestas.
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl md:text-title uppercase font-title">
            the team
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {team_members.map((member, index) => (
              <TeamCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
