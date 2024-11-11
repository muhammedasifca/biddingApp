import { useState } from "react";
import UserContext from "./UserContext";
import { bidding } from "../Datas/Bidding";
import { notificationType } from "../type";

const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userSel, setUserSel] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("profile") as string);
    return stored || null;
  });

  const [homeData, setHomeData] = useState(() => {
    const homeFull = JSON.parse(localStorage.getItem("homes") as string);
    return homeFull || bidding;
  });

  const [notification, setNotification] = useState<notificationType>(() => {
    const notes = JSON.parse(localStorage.getItem("notes") as string);
    return notes || null;
  });
  console.log(notification);

  return (
    <UserContext.Provider
      value={{
        userSel,
        setUserSel,
        homeData,
        setHomeData,
        notification,
        setNotification,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
