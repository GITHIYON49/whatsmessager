import { Video, EllipsisVertical, Search } from "lucide-react";
import { Profilepic } from "../../assets/image";
const Topbar = () => {
  return (
    <>
      <div className="h-16 w-full bg-gray-100 p-3 flex justify-between items-center absolute top-0">
        <div className="h-full flex items-center gap-3">
          <div className="w-11 h-11 rounded-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={Profilepic}
              alt="profile-pic"
            />
          </div>
          <span>kumar</span>
        </div>
        <div className="w-2/5 sm:w-1/3 md:w-1/5 flex items-center justify-between">
          <div className="py-1 px-3 border-2 border-slate-200 rounded-xl">
            <Video className="text-gray-500" />
          </div>

          <Search className="text-gray-600" />
          <EllipsisVertical className="text-gray-600" />
        </div>
      </div>
    </>
  );
};

export default Topbar;
