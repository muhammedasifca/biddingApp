import { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import UserContext from "../context/UserContext";
import { NewNotType } from "../type";

const Not = () => {
  const { notification, userSel } = useContext(UserContext);

  const [not, setNot] = useState(notification);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(not));
  }, [not]);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes") || "");
    const notFilter = notes
      .filter((data: NewNotType) => data.userName != userSel?.name)
      .reverse()
      .slice(0, 8);
    setNot(notFilter);
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div>
        <div>
          <h1 className="font-pops font-bold text-center my-8 text-[40px]">
            Notifications
          </h1>
        </div>
        <div className=" w-[40%] m-auto">
          {not.length != 0 ? (
            not.map((note: NewNotType, index: number) => (
              <div key={index}>
                <div className="border-[1px] rounded-lg border-[#ececec] py-5 px-5 flex flex-row gap-x-9 items-center my-3">
                  <div className="w-[50px] h-[50px] ">
                    <img
                      className="rounded-full w-full overflow-hidden h-full"
                      src={note.userImg}
                      alt=""
                    />
                  </div>
                  <p className="font-pops text-[20px] opacity-80 text-[#10130f] font-medium">
                    {note.userName} has placed bid of &#8377;{note.bidAmount} in{" "}
                    {note.houseName}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-xl text-red-800">
              Notification is empty
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Not;
