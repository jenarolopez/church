import React from "react";
import { IDependent } from "../../../../Interface";

const DependentsInformation = (props: { dependent: IDependent }) => {
  return (
    <div className="bg-white flex flex-col p-6 rounded shadow-md shadow-slate-400 mt-2">
      <span className="font-bold text-xl text-slate-800">Dependent</span>
      <div className="grid grid-cols-1 mt-2 flex-wrap tablet:grid-cols-3">
        <div className="flex flex-row flex-wrap mt-2 gap-2 tablet:flex-col">
          <span className="text-sm text-slate-600 min-w-[200px]">
            First Name
          </span>{" "}
          <span className="text-md text-slate-800 font-bold">Wala</span>
        </div>
        <div className="flex flex-row flex-wrap mt-2 gap-2 tablet:flex-col">
          <span className="text-sm text-slate-600 min-w-[200px]">
            Middle Name
          </span>{" "}
          <span className="text-md text-slate-800 font-bold">Wala</span>
        </div>
        <div className="flex flex-row flex-wrap mt-2 gap-2 tablet:flex-col">
          <span className="text-sm text-slate-600 min-w-[200px]">
            Last Name
          </span>{" "}
          <span className="text-md text-slate-800 font-bold">Wala</span>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-2 flex-wrap tablet:grid-cols-3">
        <div className="flex flex-row flex-wrap mt-2 gap-2 tablet:flex-col">
          <span className="text-sm text-slate-600 min-w-[200px]">Birthday</span>{" "}
          <span className="text-md text-slate-800 font-bold">
            January 10, 1999
          </span>
        </div>
      </div>
    </div>
  );
};

export default DependentsInformation;
