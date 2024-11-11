import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import UserContext from "../context/UserContext";
import { DataType } from "../type";

const Details = () => {
  const { setHomeData, userSel, setNotification } = useContext(UserContext);
  const location = useLocation();
  const { id, price, img, type } = location.state.homeDetails;

  const bidAmount = useRef<HTMLInputElement>(null);
  const [bid, setBid] = useState<number>(price);
  useEffect(() => {
    setHomeData((prev: DataType) =>
      prev.map((item) => {
        if (item.id == id) {
          return { ...item, price: bid };
        } else {
          return item;
        }
      })
    );
  }, [bid]);
  const submitBid = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (bidAmount.current?.value && parseInt(bidAmount.current?.value) > bid) {
      bidAmount.current ? setBid(parseInt(bidAmount.current.value)) : 0;
      setNotification((prev: any) => [
        ...prev,
        {
          houseName: type,
          userName: userSel?.name,
          bidAmount: bidAmount.current?.value,
          houseImg: img,
          userImg: userSel?.img,
        },
      ]);
    } else {
      alert("Please Enter Value Greater Than Current Bid");
    }
    setTimeout(() => {
      (e.target as any).reset();
    }, 10);
  };
  console.log(userSel);

  return (
    <>
      <Navbar></Navbar>
      <div className="">
        <div className="w-[60%] m-auto pt-[120px] pb-[120px] ">
          <div className="flex gap-8 flex-wrap">
            <div className="w-[600px] h-[350px] ">
              <img className="w-full h-full rounded-md " src={img} alt="" />
            </div>
            <div className="flex flex-col gap-7">
              <div className="font-pops flex flex-col gap-3 p-4 ">
                <div className="flex flex-col gap-2 ">
                  <h2 className="font-semibold text-[28px] ">
                    Your Future Home
                  </h2>
                  <p className="text-[20px] text-[#90a3bf]">{type}</p>
                </div>
                <div className="flex flex-col  ">
                  <h1 className="text-[32px]  font-semibold leading-10 ">
                    <span>&#8377;</span>
                    {bid}
                  </h1>
                  <p className="font-[#000]  opacity-50 text-[14px] ">
                    Current Bid
                  </p>
                </div>
              </div>
              <form
                className="flex flex-wrap h-[56px] gap-8 "
                onSubmit={submitBid}
              >
                <input
                  type="number"
                  ref={bidAmount}
                  className="w-full text-[18px] h-[56px] px-4 py-1 border-[1px] focus:outline-none"
                  placeholder="Enter Amount"
                ></input>
                <button className=" w-full text-white font-medium h-[56px] px-5 rounded-md bg-[#3d3d35] ">
                  Bid Now
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full h-14">
          <Link
            to="/home"
            className="font-semibold text-green-800 block underline w-fit h-full m-auto"
          >
            {" "}
            Go to HomePage
          </Link>
        </div>
      </div>
    </>
  );
};

export default Details;
