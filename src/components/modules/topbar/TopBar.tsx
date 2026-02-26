import { Logout, Notifications, Person, Settings } from "@mui/icons-material";
import CustomBox from "../../atoms/customBox/CustomBox";
import { Link, useNavigate } from "react-router";
import { ICONS, IMAGES } from "../../../assets/exports";
import DrawerNotification from "../drawerNotification/DrawerNotification";
import { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";

const TopBar = () => {
  const [openNotification, setOpenNotification] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-row gap-x-3 sticky top-0 z-99">
      <CustomBox customClasses="w-[79%] rounded-2xl pl-5 p-1.5 flex items-center justify-between shadow">
        <Link to={"/"}>
          <h2 className="text-black font-medium text-base">Dashboard</h2>
        </Link>
        <TextField
          variant="outlined"
          type="search"
          placeholder="Search"
          className="w-89 bg-background border-none rounded-xl"
          sx={{
            "& fieldset": {
              border: "none",
            },
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <img src={ICONS.Search} alt="search" className="w-6 h-6" />
                </InputAdornment>
              ),
            },
          }}
        />
      </CustomBox>
      <img
        onClick={() => setOpenNotification(true)}
        src={ICONS.Notification}
        alt="notification"
        className="cursor-pointer w-16 h-16 p-4 bg-white rounded-2xl"
      />
      <img
        onClick={() => navigate("/settings")}
        src={ICONS.Setting}
        alt="setting"
        className="cursor-pointer w-16 h-16 p-4 bg-white rounded-2xl"
      />
      <div className="dropdown dropdown-hover dropdown-end">
        <img
          src={IMAGES.DummyPROFILE}
          onClick={() => navigate("/profile")}
          alt="profile"
          className="w-16 h-16 rounded-2xl object-cover cursor-pointer "
          tabIndex={0}
          role="button"
        />
        <div
          tabIndex={-1}
          className="dropdown-content menu bg-white rounded-box z-1 p-3 shadow-sm gap-y-2 w-40"
        >
          <Link
            to={"/profile"}
            className="flex items-center gap-0.5 w-full cursor-pointer group text-secondary-text hover:text-primary hover:bg-background hover:font-medium px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out"
          >
            <Person className="group-hover:text-primary" />
            Profile
          </Link>
          <Link
            to={"/settings"}
            className="flex items-center gap-0.5 w-full cursor-pointer group text-secondary-text hover:text-primary hover:bg-background hover:font-medium px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out"
          >
            <Settings className="group-hover:text-primary" />
            Settings
          </Link>
          <Link
            to={"/notifications"}
            className="flex items-center gap-0.5 w-full cursor-pointer group text-secondary-text hover:text-primary hover:bg-background hover:font-medium px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out"
          >
            <Notifications className="group-hover:text-primary" />
            Notifications
          </Link>

          <Link
            to={"/logout"}
            className="flex items-center gap-0.5 w-full cursor-pointer group text-secondary-text hover:text-primary hover:bg-background hover:font-medium px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out"
          >
            <Logout className="group-hover:text-primary" />
            Logout
          </Link>
        </div>
      </div>
      <DrawerNotification
        open={openNotification}
        onClose={() => setOpenNotification(false)}
      />
    </div>
  );
};

export default TopBar;
