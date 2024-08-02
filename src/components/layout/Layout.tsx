import "./style.css";
import { Outlet } from "react-router-dom";
import { Avatar } from "@mui/material";
import { Popover, Typography } from "antd";
import MusicPlayerBotton from "../musicPlayer/MusicPlayerBotton";
import useUserVerification from "../../hooks/useUserVerification";
import ContentLogout from "./ContentLogout";

const Layout = () => {
  useUserVerification();

  return (
    <div className="h-screen bg-[#999184] w-screen p-3 lg:p-16 lg:pl-16 lg:pt-8 lg:min-w-[1300px]">
      <div className=" relative rounded-t-2xl">
        <div className="flex justify-between p-4 absolute lg:block z-[1000] bg-[#c8bfae] w-full rounded-t-2xl layout-container">
          <div className="mt-2 flex items-center gap-4">
            <Popover content={<ContentLogout />}>
              <Avatar
                src="public/image/logo.jpeg"
                sx={{ width: 70, height: 70 }}
              />
            </Popover>
            <Typography className="font-bold text-xl">Sagu Music</Typography>
          </div>
        </div>
      </div>
      <div className=" w-full min-[320px]:h-[70vh] min-[375px]:h-[86vh] min-[400px]:h-[89vh] lhd:h-[77vh]  qhd:h-[85vh]  dk:h-[91vh] bg-[#c8bfae] rounded-2xl  drop-shadow-xl overflow-y-auto custom-scrollbar layout-container">
        <div className="overflow-y-auto dk:overflow-hidden custom-scrollbar">
          <div className="pt-[110px] lg:pb-0">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="fixed bg-[#1d2124] w-full h-20 bottom-0 left-0 rounded-t-xl">
        <MusicPlayerBotton />
      </div>
    </div>
  );
};

export default Layout;
