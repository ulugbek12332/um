import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(!open)} className="flex relative">
      <div className="element w-[117px] h-[50px] bg-[#32363C] rounded-[10px] text-center">
        <p className="text-[#F79841]">Earn per tap</p>
        <p className="text-[#FFFFFF]">+12</p>
      </div>

      <ul
        tabIndex={0}
        className={open == true ? "dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm absolute top-[120%]" : "hidden"}
      >
        <div className="close">
          {/* <IoExitSharp onClick={() => setOpen(false)}/> */}
        </div>
        <li>
          <a>lvl 1 +2</a>
        </li>
        <li>
          <a>lvl 2 +3</a>
        </li>
        <li>
          <a>lvl 3 +4</a>
        </li>
      </ul>

      <div className="element w-[117px] h-[50px] bg-[#32363C] rounded-[10px] text-center">
        <p className="text-[#F79841]">Coins to level up</p>
        <p className="text-[#FFFFFF]">10 </p>
      </div>
      <div className="element w-[117px] h-[50px] bg-[#32363C] rounded-[10px] text-center">
        <p className="text-[#F79841]">Profit per hour</p>
        <p className="text-[#FFFFFF]">+636</p>
      </div>
      <InfoBox text={"Earn per tap"} value={+18648} />
      <InfoBox text={"Coins to level up"} value={10} />
      <InfoBox text={"Profit per hour"} value={+18648} />
    </div>
  );
};

function InfoBox(text, value) {
  <div className="element w-[117px] h-[50px] bg-[#32363C] rounded-[10px] text-center">
    <p className="text-[#F79841]">{text}</p>
    <p className="text-[#FFFFFF]">{value}</p>
  </div>;
}

export default Header;
