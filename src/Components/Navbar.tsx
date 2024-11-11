import { FaBell } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";

import UserContext from "../context/UserContext";

const Navbar = () => {
  const { userSel, setUserSel } = useContext(UserContext);
  console.log(userSel);

  useEffect(() => {
    localStorage.setItem("profile", JSON.stringify(userSel));
  }, [userSel]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("profile") || "");
    setUserSel(data);
  }, []);

  return (
    <nav className="border-[1px] border-[#c3d4e9] border-opacity-40 h-[124px] flex items-center">
      <div className="flex justify-between px-8  grow ">
        <div className="ml-7">
          <Link to="/home" className="font-semibold font-pops text-[32px] ">
            BIDHERE
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <Link
            to="/notification"
            className="cursor-pointer w-[44px] h-[44px] border-[1px] border=[c3d4e9] flex items-center justify-center rounded-full "
          >
            <FaBell className="opacity-80 w-6 " />
          </Link>
          <Link to="/" className="h-[40px] w-[40px] ">
            <img
              className="w-full h-full rounded-full "
              src={userSel?.img}
              alt=""
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
