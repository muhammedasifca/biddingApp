import { useContext, useEffect } from "react";
import Homes from "./Homes";
import Navbar from "./Navbar";
import UserContext from "../context/UserContext";

const MainHome = () => {
  const { homeData, setHomeData } = useContext(UserContext);

  useEffect(() => {
    localStorage.setItem("homes", JSON.stringify(homeData));
  }, [homeData]);

  useEffect(() => {
    const homes = JSON.parse(localStorage.getItem("homes") || "");
    setHomeData(homes);
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="w-[70%] m-auto">
        <div className="py-[80px] ">
          <Homes data={homeData}></Homes>
        </div>
      </div>
    </div>
  );
};
export default MainHome;
