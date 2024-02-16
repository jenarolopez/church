import React from "react";
import Divider from "../../../../assets/Divider";
import { IWorkingInformation } from "../../../../Interface";

const WorkInformation = (props: { work: IWorkingInformation }) => {
  return (
    <div className="bg-white flex flex-col p-6 rounded shadow-md shadow-slate-400 mt-2">
      <span className="font-bold text-xl text-slate-800">Work Information</span>
      <div className="flex flex-col mt-2">
        <Divider />
        <div className="flex flex-row flex-wrap gap-2">
          <span className="text-sm text-slate-800 min-w-[180px] font-bold self-center">
            Work
          </span>{" "}
          <span className="text-sm text-slate-600 self-center">
            {props.work.work}
          </span>
        </div>
        <Divider />
        <div className="flex flex-row flex-wrap gap-2">
          <span className="text-sm text-slate-800 min-w-[180px] font-bold self-center">
            Position
          </span>{" "}
          <span className="text-sm text-slate-600 self-center">
            {props.work.position}
          </span>
        </div>
        <Divider />
        <div className="flex flex-row flex-wrap gap-2">
          <span className="text-sm text-slate-800 min-w-[180px] font-bold self-center">
            Company Name
          </span>{" "}
          <span className="text-sm text-slate-600 self-center">
            {props.work.companyName}
          </span>
        </div>
        <Divider />
        <div className="flex flex-row flex-wrap gap-2">
          <span className="text-sm text-slate-800 min-w-[180px] font-bold self-center">
            Telephone number
          </span>{" "}
          <span className="text-sm text-slate-600 self-center">
            {props.work.telephoneNumber}
          </span>
        </div>
        <Divider />
        <div className="flex flex-row flex-wrap gap-2">
          <span className="text-sm text-slate-800 min-w-[180px] font-bold self-center">
            Email
          </span>{" "}
          <span className="text-sm text-slate-600 self-center">
            {props.work.email}
          </span>
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default WorkInformation;
