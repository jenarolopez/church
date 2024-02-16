import React from "react";
import { IMarriageInformation } from "../../../../Interface";
import { getDateString } from "../../../../utils/helper";

const MarriageInformation = (props: { spouse: IMarriageInformation }) => {
  return (
    <div className="bg-white flex flex-col p-6 rounded shadow-md shadow-slate-400 mt-2">
      <span className="font-bold text-xl text-slate-800">
        Marriage Information
      </span>
      <div className="grid grid-cols-1 mt-2 flex-wrap tablet:grid-cols-3">
        <div className="flex flex-row flex-wrap mt-2 gap-2 tablet:flex-col">
          <span className="text-sm text-slate-600 min-w-[200px]">
            Spouse First Name
          </span>{" "}
          <span className="text-md text-slate-800 font-bold">
            {props.spouse.spouseFirstName}
          </span>
        </div>
        <div className="flex flex-row flex-wrap mt-2 gap-2 tablet:flex-col">
          <span className="text-sm text-slate-600 min-w-[200px]">
            Spouse Middle Name
          </span>{" "}
          <span className="text-md text-slate-800 font-bold">
            {props.spouse.spouseMiddleName}
          </span>
        </div>
        <div className="flex flex-row flex-wrap mt-2 gap-2 tablet:flex-col">
          <span className="text-sm text-slate-600 min-w-[200px]">
            Spouse Last Name
          </span>{" "}
          <span className="text-md text-slate-800 font-bold">
            {props.spouse.spouseLastName}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-2 flex-wrap tablet:grid-cols-3">
        <div className="flex flex-row flex-wrap mt-2 gap-2 tablet:flex-col">
          <span className="text-sm text-slate-600 min-w-[200px]">
            Spouse Birthday
          </span>{" "}
          <span className="text-md text-slate-800 font-bold">
            {getDateString(props.spouse.spouseBirthday)}
          </span>
        </div>
        <div className="flex flex-row flex-wrap mt-2 gap-2 tablet:flex-col">
          <span className="text-sm text-slate-600 min-w-[200px]">
            Date of Marriage
          </span>{" "}
          <span className="text-md text-slate-800 font-bold">
            {getDateString(props.spouse.dateOfMarriage)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MarriageInformation;
