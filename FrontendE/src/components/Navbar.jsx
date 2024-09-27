import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[13vh] bg-slate-950   ">
      <div className=" flex justify-between   items-center pl-5 pr-5    ">
        <img
          className=" w-20 h-24 rounded-[50%] overflow-hidden flex justify-center object-cover"
          src={assets.logo}
          alt=""
        />
        <div className=" flex text-white gap-5 cursor-pointer">
        <Link to='/'><p className=" text-[1.4vw]">Home</p></Link>  
        <Link to='/about'> <p className=" text-[1.4vw]">About</p></Link>
         <Link to='/contact'><p className=" text-[1.4vw]">Contact Us</p></Link> 
          <select className=" bg-black cursor-pointer  text-[1.4vw]" name="Bikes" id="Bikes">
            <option value="Bikes">Bikes</option>
            <option value="Hero">Hero</option>
            <option value="Avon">Avon</option>
            <option className=" border-none " value="Hercules">
              Hercules
            </option>
          </select>
        </div>
        <div >
        <div className="flex text-white gap-3   justify-center  items-center ">
          <img
            className=" w-5 h-5 text-white cursor-pointer"
            src={assets.search_icon}
            alt=""
          />
          <p className=" text-2xl">search</p>
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
