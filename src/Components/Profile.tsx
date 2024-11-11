import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { ProfileProps } from "../type";

const Profile = (props: ProfileProps) => {
  const { setUserSel } = useContext(UserContext);
  const navigate = useNavigate();
  const { data } = props;
  const selectUser = (itemid: number) => {
    const selData = data.find((item) => item.id == itemid);
    setUserSel(selData ? selData : null);
    navigate("/home");
  };

  return (
    <div className="flex flex-wrap gap-4">
      {data.map((item) => (
        <div
          onClick={() => selectUser(item.id)}
          key={item.id}
          className=" cursor-pointer flex flex-col gap-[13px]  bg-white w-[155px] h-[119px] items-center justify-center rounded-[23px] "
        >
          <div className="w-[50px] h-[50px] ">
            <img
              className=" rounded-full size-full"
              src={item.img}
              alt={item.name}
            />
          </div>
          <h3 className="leading-6">{item.name}</h3>
        </div>
      ))}

      <div className=" cursor-pointer flex flex-col gap-2 bg-white w-[155px] h-[119px] items-center justify-center rounded-[23px] ">
        <div className="w-[50px] h-[50px] ">
          <p className=" rounded-full size-full bg-slate-200 flex items-center justify-center">
            <span className="text-[30px]">+</span>
          </p>
        </div>
        <h3>Add</h3>
      </div>
    </div>
  );
};
export default Profile;
