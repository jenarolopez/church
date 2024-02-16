import React from "react";
import Divider from "../../../../assets/Divider";
import { IAddress } from "../../../../Interface";
import { getAddressString } from "../../../../utils/helper";

interface IContact {
  address: IAddress;
  branch: string;
}

const ContactInformation = (props: IContact) => {
  return (
    <div className="flex flex-col p-6 bg-white rounded shadow-md shadow-slate-400 ">
      <span className="font-bold text-lg text-slate-800">
        Contact Information
      </span>
      <div className="flex flex-row justify-between flex-wrap mt-2">
        <span className="text-sm text-slate-600">Contact Number:</span>{" "}
        <span className="text-sm text-slate-600 font-bold">
          {props?.address?.contactNumber}
        </span>
      </div>
      <Divider />
      <div className="flex flex-row justify-between flex-wrap">
        <span className="text-sm text-slate-600">Email Address:</span>{" "}
        <span className="text-sm text-slate-600 font-bold">
          {props?.address?.email}
        </span>
      </div>
      <Divider />
      <div className="flex flex-row justify-between flex-wrap">
        <span className="text-sm text-slate-600">Branch:</span>{" "}
        <span className="text-sm text-slate-600 font-bold">
          {props?.branch}
        </span>
      </div>
      <Divider />
      <div className="flex flex-row justify-between flex-wrap gap-[3px]">
        <span className="text-sm text-slate-600">Full Address:</span>{" "}
        <span className="text-sm text-slate-600 font-bold">
          {props.address && getAddressString(props?.address)}
        </span>
      </div>
    </div>
  );
};

export default ContactInformation;
