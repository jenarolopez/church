import React from "react";
import { IMember } from "../../../../Interface";
import { months } from "../../../../utils/Constants";
import { getDateString } from "../../../../utils/helper";

const PersonalInformation = (props: { member: IMember }) => {
  
  return (
    <div className="bg-white flex flex-col p-6 rounded shadow-md shadow-slate-400">
      <span className="font-bold text-xl text-slate-800">
        Personal Information
      </span>
      <div className="grid grid-cols-1 mt-2 flex-wrap tablet:grid-cols-3">
        <div className="flex flex-row flex-wrap mt-2 gap-2 tablet:flex-col">
          <span className="text-sm text-slate-600 min-w-[200px]">
            First Name
          </span>{" "}
          <span className="text-md text-slate-800 font-bold">
            {props.member.firstName}
          </span>
        </div>
        <div className="flex flex-row flex-wrap mt-2 gap-2 tablet:flex-col">
          <span className="text-sm text-slate-600 min-w-[200px]">
            Middle Name
          </span>{" "}
          <span className="text-md text-slate-800 font-bold">
            {props.member.middleName}
          </span>
        </div>
        <div className="flex flex-row flex-wrap mt-2 gap-2 tablet:flex-col">
          <span className="text-sm text-slate-600 min-w-[200px]">
            Last Name
          </span>{" "}
          <span className="text-md text-slate-800 font-bold">
            {props.member.lastName}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-2 flex-wrap tablet:grid-cols-3">
        <div className="flex flex-row flex-wrap mt-2 gap-2 tablet:flex-col">
          <span className="text-sm text-slate-600 min-w-[200px]">Gender</span>{" "}
          <span className="text-md text-slate-800 font-bold">
            {props.member.gender.toUpperCase()}
          </span>
        </div>
        <div className="flex flex-row flex-wrap mt-2 gap-2 tablet:flex-col">
          <span className="text-sm text-slate-600 min-w-[200px]">Birthday</span>{" "}
          <span className="text-md text-slate-800 font-bold">{getDateString(props.member.birthday)}</span>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
