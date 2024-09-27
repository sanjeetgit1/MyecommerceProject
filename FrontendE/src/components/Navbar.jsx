import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="w-full h-[15vh] bg-slate-950 ">
      <div className=" flex justify-between   items-center pl-5 pr-5">
        <img
          className=" w-20 h-24 rounded-[50%] overflow-hidden flex justify-center object-cover"
          src={assets.logo}
          alt=""
        />
        <div className=" flex text-white gap-5">
          <p>Home</p>
          <p>About</p>
          <p>Contact Us</p>
          <select className=" bg-black" name="Bikes" id="Bikes">
  <option value="Bikes">Bikes</option>
  <option value="Hero">Hero</option>
  <option value="Avon">Avon</option>
  <option className=" border-none" value="Hercules">Hercules</option>
 
</select>
          
        </div>
        <div className=" flex text-white gap-3 justify-center items-center">  
           <img className=" w-5 h-5 text-white"  src={assets.search_icon} alt="" /> 
           <p className=" text-2xl">search</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
