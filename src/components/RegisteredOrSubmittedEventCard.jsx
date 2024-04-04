import { MdArrowOutward } from "react-icons/md";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
export const RegisteredOrSubmittedEventCard = ({ event, type }) => {
  console.log(event);
  return (
    <Link
      to={type === "event" ? `/events/${event._id}` : `/fests/${event._id}`}
      className="border px-4 py-2 flex items-center justify-center relative flex-col gap-4 rounded-md hover:border-yellow hover:text-yellow transition-all cursor-pointer"
    >
      <span className="absolute top-2 right-2">
        <MdArrowOutward size={20} />
      </span>
      <div className="font-bold text-base">
        {event?.eventName || event?.festName}
      </div>
      <div className="flex flex-col items-center tablets:flex-row justify-between w-full text-xs text-gray-200">
        <span>
          {event?.dates.startDate === event?.dates.endDate
            ? dayjs(event?.dates.startDate).format("D MMMM YYYY")
            : dayjs(event?.dates.startDate).format("D MMM YYYY") +
              "-" +
              dayjs(event?.dates.endDate).format("D MMM YYYY")}
        </span>
        <span>{event?.address}</span>
      </div>
    </Link>
  );
};

RegisteredOrSubmittedEventCard.propTypes = {
  event: PropTypes.object,
  type: PropTypes.string,
};
