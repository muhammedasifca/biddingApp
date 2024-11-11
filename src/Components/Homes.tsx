import { useNavigate } from "react-router-dom";
import { HomesProps } from "../type";

const Homes = (props: HomesProps) => {
  const { data } = props;
  const navigate = useNavigate();
  const toDetails = (itemId: number) => {
    const homeDetails = data.find((item) => item.id === itemId);
    navigate("details", { state: { homeDetails } });
  };
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-[30px] w-full">
      {data.map((item) => (
        <div key={item.id} className="grow">
          <div className="flex justify-center p-6 gap-1">
            <div className="flex flex-col gap-[32px] ">
              <div>
                <h3 className="text-[20px] font-medium ">{item.type}</h3>
              </div>
              <div className="w-[270px] h-[190px] ">
                <img
                  src={item.img}
                  alt={item.type}
                  className="rounded-[6px] h-full "
                />
              </div>
              <div className="flex justify-between h-[44px]">
                <div className="flex gap-1 flex-col">
                  <h3 className="text-[20px] font-medium leading-[25.2px] text-[#1a202c] ">
                    <span>&#8377;</span>
                    {item.price}
                  </h3>
                  <p className="text-[14px] text-[#9b9b9b] opacity-70 ">
                    Current Bid
                  </p>
                </div>

                <button
                  onClick={() => toDetails(item.id)}
                  className="pr-5 pl-5 bg-[#3d3d35] rounded-md text-[white] text-[16px] font-medium align-middle"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Homes;
