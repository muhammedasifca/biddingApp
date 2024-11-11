import { user } from "../Datas/Users";
import Profile from "./Profile";
const ProfileSelect = () => {
  return (
    <div className="h-lvh w-lvw bg-slate-200 flex justify-center items-center ">
      <div className="w-[670px]  flex flex-col gap-8">
        <div className="flex flex-col gap-2 font-pops">
          <h1 className="font-semibold text-[42px] leading-[63px] text-center ">
            Select Your Profile
          </h1>
          <h4 className="font-normal text-[24px] text-center tracking-normal leading-9 opacity-70">
            Logged in users can View full business profile and can save contact
            details
          </h4>
        </div>
        <div>
          <Profile data={user}></Profile>
        </div>
      </div>
    </div>
  );
};

export default ProfileSelect;
