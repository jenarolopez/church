import React from "react";
import Church from "../../../../assets/images/church.jpg";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
const Footer = () => {
  return (
    <div className="min-h-[250px] bg-slate-800 text-slate-50 px-20 py-10 flex flex-row flex-wrap gap-20 desktop:justify-between font-pop">
      <div className="h-full flex flex-row flex-wrap gap-20">
        <img src={Church} className=" h-28 w-64 bg-cover " />
        <ul className="list-disc marker:text-slate-500 list-inside">
          <li className="cursor-pointer hover:text-slate-200 text-md subpixel-antialiased">
            About Us
          </li>
          <li className="cursor-pointer hover:text-slate-200 text-md subpixel-antialiased">
            Journey
          </li>
          <li className="cursor-pointer hover:text-slate-200 text-md subpixel-antialiased">
            Preachings
          </li>
        </ul>
      </div>
      <div className="flex flex-row ">
        <ul className="list-disc marker:text-slate-500 list-inside">
          <li className="cursor-pointer hover:text-slate-200 text-md subpixel-antialiased">
            Branches
          </li>
          <li className="cursor-pointer hover:text-slate-200 text-md subpixel-antialiased">
            Contact
          </li>
        </ul>
      </div>

      <div>
        <ul className="list-inside list-none">
          <li className="hover:text-slate-200 text-md subpixel-antialiased flex flex-row gap-2 py-1">
            <MapPinIcon className="w-5 h-5 self-center"/> 114 K-9th Street, Brgy. East Kamias, Quezon City, PH
          </li>
          <li className="hover:text-slate-200 text-md subpixel-antialiased flex flex-row gap-2 py-1">
            <PhoneIcon className="w-5 h-5 self-center"/>
            (02) 72179144 +639171465906
          </li>
          <li className="hover:text-slate-200 text-md subpixel-antialiased flex flex-row gap-2 py-1">
            <EnvelopeIcon className="w-5 h-5 self-center"/> admin@lifegiverchurch.ph
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
