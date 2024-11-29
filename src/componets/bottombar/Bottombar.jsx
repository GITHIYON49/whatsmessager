import { Smile, Plus, Mic } from "lucide-react";

const Bottombar = () => {
  return (
    <>
      <div className="h-16 w-full hidden  bg-gray-100 p-3 md:flex justify-between items-center absolute bottom-0">
        <Smile />
        <Plus />
        <input
          type="text"
          className="w-5/6 p-3 outline-none rounded-lg placeholder:text-gray-500 text-base"
          placeholder="Type message"
        />
        <Mic />
      </div>
    </>
  );
};

export default Bottombar;
