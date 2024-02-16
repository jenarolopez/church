import React from "react";
import Divider from "../../../../assets/Divider";
import { IEducationalBackground } from "../../../../Interface";

const EdicationalBackground = (props: {
  education: IEducationalBackground;
}) => {
  return (
    <div className="bg-white flex flex-col p-6 rounded shadow-md shadow-slate-400 mt-2">
      <span className="font-bold text-xl text-slate-800">
        Educational Background
      </span>
      <div className="flex flex-col mt-2">
        <Divider />
        <div className="flex flex-row flex-wrap gap-2">
          <span className="text-sm text-slate-800 min-w-[180px] font-bold self-center">
            School last attended
          </span>{" "}
          <span className="text-sm text-slate-600 self-center">
            {props.education.schoolLastAttended}
          </span>
        </div>
        <Divider />
        <div className="flex flex-row flex-wrap gap-2">
          <span className="text-sm text-slate-800 min-w-[180px] font-bold self-center">
            Course
          </span>{" "}
          <span className="text-sm text-slate-600 self-center">
            {props.education.course}
          </span>
        </div>
        <Divider />
        <div className="flex flex-row flex-wrap gap-2">
          <span className="text-sm text-slate-800 min-w-[180px] font-bold self-center">
            Year graduated
          </span>{" "}
          <span className="text-sm text-slate-600 self-center">{props.education.yearGraduated}</span>
        </div>
        <Divider />
        <div className="flex flex-row flex-wrap gap-2">
          <span className="text-sm text-slate-800 min-w-[180px] font-bold self-center">
            Is graduated
          </span>{" "}
          <span className="text-sm text-slate-600 self-center">{props.education.graduated ? "Yes" : "No"}</span>
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default EdicationalBackground;
