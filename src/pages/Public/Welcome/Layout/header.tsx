import React, { useEffect, useState } from "react";
import Church from "../../../../assets/images/church-icon.jpg";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { classNames } from "../../../../utils/helper";
import { useLocation } from "react-router-dom";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/16/solid";
import Divider from "../../../../assets/Divider";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(useLocation(), "123123");

  return (
    <div
      className={classNames(
        "sticky top-0 z-40 w-full flex flex-row justify-between shadow px-5 transition-all ease-in-out duration-500",
        isScrolled ? "h-14 bg-slate-50" : "h-20 bg-slate-900"
      )}
    >
      <div className="h-full self-center flex flex-row py-2">
        <img src={Church} className="h-full w-44 self-center object-contain object-left" />
      </div>
      <div className="self-center">
        <ul className={classNames("hidden flex-row gap-4 text-sm font-pop antialiased laptop:flex",  isScrolled ? "text-slate-700" : "text-slate-200")}>
          <li className="cursor-pointer tracking-widest hover:text-slate-500">Home</li>
          <li className="cursor-pointer tracking-widest hover:text-slate-500">About Us</li>
          <li className="cursor-pointer tracking-widest hover:text-slate-500 flex flex-row gap-1">
            Journey <ChevronDownIcon className="w-3 h-3 self-center" />{" "}
          </li>
          <li className="cursor-pointer tracking-widest hover:text-slate-500 flex flex-row gap-1">
            Sunday Service <ChevronDownIcon className="w-3 h-3 self-center" />
          </li>
          <li className="cursor-pointer tracking-widest hover:text-slate-500 flex flex-row gap-1">
            Pastoral Works <ChevronDownIcon className="w-3 h-3 self-center" />
          </li>
          <li className="cursor-pointer tracking-widest hover:text-slate-500 flex flex-row gap-1">
            Give <ChevronDownIcon className="w-3 h-3 self-center" />
          </li>
          <li className="cursor-pointer tracking-widest hover:text-slate-500">Contact</li>
        </ul>

        <span>
          <button onClick={()=>{setIsMenuOpened(!isMenuOpened)}} className="laptop:hidden flex py-[3px] px-[5px] justify-center items-center flex-row p-[8px] focus:ring-2 focus:text-white ring-slate-600 rounded bg-slate-300 hover:bg-slate-200 font-bold ring-offset-1">
            <Bars3Icon className="w-6 h-6 laptop:w-8 laptop:h-8 text-slate-600" />
          </button>
        </span>
      </div>
      <div className={classNames("absolute top-full flex flex-col bg-slate-50 w-full left-0 transition-all overflow-hidden duration-500 laptop:hidden", isMenuOpened ? "h-[482px]" : "h-[0px]")}>
        <ul className="text-sm font-pop border-t-2 border-slate-900">
          <li className="px-8 shadow-inner cursor-pointer tracking-widest hover:text-slate-900 hover:bg-slate-100 transition-all duration-250 pb-3 pt-4 border-slate-600">
            Home
          </li>
          <li className="px-8 shadow-inner cursor-pointer tracking-widest hover:text-slate-900 hover:bg-slate-100 transition-all duration-250 pb-3 pt-4">
            About Us
          </li>
          <li className="px-8 bg-slate-200 text-slate-900 cursor-pointer tracking-widest hover:text-slate-900 hover:bg-slate-100 transition-all duration-250 pb-3 pt-4 flex flex-row gap-1">
            Journey
          </li>
          <li className="px-16 shadow-inner cursor-pointer tracking-widest hover:text-slate-900 hover:bg-slate-100 transition-all duration-250 pb-3 pt-4 flex flex-row gap-1">
            Life Retreat
          </li>
          <li className="px-16 shadow-inner cursor-pointer tracking-widest hover:text-slate-900 hover:bg-slate-100 transition-all duration-250 pb-3 pt-4 flex flex-row gap-1">
            Victorious Life Class
          </li>
          <li className="px-16 shadow-inner cursor-pointer tracking-widest hover:text-slate-900 hover:bg-slate-100 transition-all duration-250 pb-3 pt-4 flex flex-row gap-1">
            School Discipleship
          </li>
          <li className="px-8 shadow-inner cursor-pointer tracking-widest hover:text-slate-900 hover:bg-slate-100 transition-all duration-250 pb-3 pt-4 flex flex-row gap-1">
            Sunday Service
          </li>
          <li className="px-8 shadow-inner cursor-pointer tracking-widest hover:text-slate-900 hover:bg-slate-100 transition-all duration-250 pb-3 pt-4 flex flex-row gap-1">
            Pastoral Works
          </li>
          <li className="px-8 shadow-inner cursor-pointer tracking-widest hover:text-slate-900 hover:bg-slate-100 transition-all duration-250 pb-3 pt-4 flex flex-row gap-1">
            Give
          </li>
          <li className="px-8 shadow-inner cursor-pointer tracking-widest hover:text-slate-900 hover:bg-slate-100 transition-all duration-250 pb-3 pt-4">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}
