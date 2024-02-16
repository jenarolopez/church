import React from "react";
import { IFamilyBackground } from "../../../../Interface";

const FamilyBackground = (props: { family: IFamilyBackground }) => {
  return (
    <div className="bg-white flex flex-col p-6 rounded shadow-md shadow-slate-400 mt-2">
      <span className="font-bold text-xl text-slate-800">
        Family Background
      </span>
      <div className="grid grid-cols-1 mt-2 flex-wrap tablet:grid-cols-3">
        <div className="flex flex-row flex-wrap mt-2 gap-2 tablet:flex-col">
          <span className="text-sm text-slate-600 min-w-[200px]">
            Father's First Name
          </span>{" "}
          <span className="text-md text-slate-800 font-bold">
            {props.family.fatherFirstName}
          </span>
        </div>
        <div className="flex flex-row flex-wrap mt-2 gap-2 tablet:flex-col">
          <span className="text-sm text-slate-600 min-w-[200px]">
            Father's Middle Name
          </span>{" "}
          <span className="text-md text-slate-800 font-bold">
            {props.family.fatherMiddleName}
          </span>
        </div>
        <div className="flex flex-row flex-wrap mt-2 gap-2 tablet:flex-col">
          <span className="text-sm text-slate-600 min-w-[200px]">
            Father's Last Name
          </span>{" "}
          <span className="text-md text-slate-800 font-bold">
            {props.family.fatherLastName}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-2 flex-wrap tablet:grid-cols-3">
        <div className="flex flex-row flex-wrap mt-2 gap-2 tablet:flex-col">
          <span className="text-sm text-slate-600 min-w-[200px]">
            Father's Work
          </span>{" "}
          <span className="text-md text-slate-800 font-bold">
            {props.family.fatherWork}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-2 flex-wrap tablet:grid-cols-3">
        <div className="flex flex-row flex-wrap mt-2 gap-2 tablet:flex-col">
          <span className="text-sm text-slate-600 min-w-[200px]">
            Mother's First Name
          </span>{" "}
          <span className="text-md text-slate-800 font-bold">
            {props.family.motherFirstName}
          </span>
        </div>
        <div className="flex flex-row flex-wrap mt-2 gap-2 tablet:flex-col">
          <span className="text-sm text-slate-600 min-w-[200px]">
            Mother's Middle Name
          </span>{" "}
          <span className="text-md text-slate-800 font-bold">
            {props.family.motherMiddleName}
          </span>
        </div>
        <div className="flex flex-row flex-wrap mt-2 gap-2 tablet:flex-col">
          <span className="text-sm text-slate-600 min-w-[200px]">
            Mother's Last Name
          </span>{" "}
          <span className="text-md text-slate-800 font-bold">
            {props.family.motherLastName}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-2 flex-wrap tablet:grid-cols-3">
        <div className="flex flex-row flex-wrap mt-2 gap-2 tablet:flex-col">
          <span className="text-sm text-slate-600 min-w-[200px]">
            Mother's Work
          </span>{" "}
          <span className="text-md text-slate-800 font-bold">
            {props.family.motherWork}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-2 flex-wrap tablet:grid-cols-3">
        <div className="flex flex-row flex-wrap mt-2 gap-2 tablet:flex-col">
          <span className="text-sm text-slate-600 min-w-[200px]">
            Number of Siblings
          </span>{" "}
          <span className="text-md text-slate-800 font-bold">
            {props.family.noOfSiblings}
          </span>
        </div>
        <div className="flex flex-row flex-wrap mt-2 gap-2 tablet:flex-col">
          <span className="text-sm text-slate-600 min-w-[200px]">
            Number of Christians
          </span>{" "}
          <span className="text-md text-slate-800 font-bold">
            {props.family.noOfChristianSiblings}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FamilyBackground;
