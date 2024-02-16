export const PlanCard = () => {
  return (
    <div className="w-full border border-yellow/90 rounded-xl p-4 flex flex-col gap-4 items-center justify-center">
      <h2 className="uppercase font-bold">Plan 1</h2>
      <div className="flex flex-col items-center justify-center gap-2 w-full">
        <div className="bg-white/30 backdrop-blur-2xl w-full py-2 rounded-full text-center text-yellow font-semibold">
          ₹4,000
        </div>
        <ul className="bg-white/30 backdrop-blur-2xl w-full py-4 rounded-2xl text-center px-4 text-xs flex flex-col gap-1">
          <li>Accomodation</li>
          <li>Free Food and Drinks</li>
          <li>Exclusive Entry</li>
        </ul>
      </div>
      <div className="text-xs text-gray-300">Show More</div>
    </div>
  );
};
