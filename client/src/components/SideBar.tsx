import React from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { FiSettings, FiLink } from "react-icons/fi";
import { ImQrcode } from "react-icons/im";
const SideBar = () => {
  return (
    <div className="w-1/5 h-screen flex  bg-gray-300 ">
      <nav className="w-full bg-[#1F2121] text-white pt-6 p-4 space-y-3">
        <div>
          <p className="font-bold text-2xl cursor-pointer mb-6">
            Short.ly
          </p>
        </div>
        <p className="flex gap-2 items-center p-4  bg-gray-600/30 cursor-pointer">
          <MdOutlineSpaceDashboard /> Dashboard
        </p>
        <p className="flex gap-2 items-center  p-4  bg-gray-600/30 cursor-pointer">
          <SiGoogleanalytics />
          Links
        </p>
        <p className="flex gap-2 items-center  p-4  bg-gray-600/30 cursor-pointer">
          <ImQrcode />
          Qrcodes <small>beta</small>
        </p>
        <p className="flex gap-2 items-center  p-4  bg-gray-600/30 cursor-pointer">
          <FiSettings />
          settings
        </p>
        <div className="flex items-center gap-2 ">
            <div className="w-12 h-12 bg-red-500 rounded-full overflow-hidden">
              <img src="" alt="" />
              </div>
              Mathuew Dawid.
          </div>
        
      </nav>
    </div>
  );
};

export default SideBar;
