import React from "react";

function Navbar() {
  return (
    <div className="flex h-[60px] justify-between items-center">
      <div className="flex gap-[40px]">
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
      </div>
      <div className="text-[#37447E] text-[26px] font-[900] leading-[38px] flex-grow-1">
        Landing
      </div>
      <div>
        <button className="btn-primary">Buy Now</button>
      </div>
    </div>
  );
}

export default Navbar;
