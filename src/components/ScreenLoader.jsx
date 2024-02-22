import { GridLoader } from "react-spinners";
export const ScreenLoader = () => {
  return (
    <div className="fixed bg-black inset-0 w-screen h-screen flex items-center justify-center z-[1000] bg-[radial-gradient(169.40%_89.55%_at_93.76%_40.29%,#370006cc_0%,rgba(0,0,0)_100%)]">
      <GridLoader color="#DF9438" />
    </div>
  );
};
