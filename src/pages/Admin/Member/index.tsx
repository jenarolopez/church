import React, { useEffect, useRef, useState } from "react";
import { ITable, IMember } from "../../../Interface";
import {
  calculateAge,
  classNames,
  getAddressString,
  getFullName,
} from "../../../utils/helper";
import DataTable, { ITableItemProps } from "../../../components/Table";
import Modal from "../../../components/Modal";
import Select from "../../../components/Select";
import { setLoading } from "../../../reducer/loading/loadingSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchMember } from "../../../reducer/member/action";
import { getMember } from "../../../reducer/member/memberSlice";
// import { UserCircleIcon } from "@heroicons/react/16/solid";
import UserCircle from "../../../assets/images/no-profile.svg";
import PersonalInformation from "./InfomationCards/PersonalInformation";
import WorkInformation from "./InfomationCards/WorkInformation";
import EducationalBackground from "./InfomationCards/EducationalBackground";
import Divider from "../../../assets/Divider";
import ContactInformation from "./InfomationCards/ContactInformation";
import MarriageInformation from "./InfomationCards/MarriageInformation";
import DependentsInformation from "./InfomationCards/DependentsInformation";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
  UserGroupIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import Family from "../../../assets/images/family.svg";
import FamilyBackground from "./InfomationCards/FamilyBackground";
import { userRequest } from "../../../request/request";
import { IMemberSlice } from "../../../reducer/IReducer";
import { initialMemberState } from "./member";
import { redirect, useParams } from "react-router-dom";
const Member = (props: any) => {
  const loader = async () => {
    // const user = await getUser();
    if (true) {
      return redirect("/login");
    }
    return null;
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const [height, setHeight] = React.useState("");

  const dataRenderer = (props: ITableItemProps) => {
    console.log(props, "1222");
  };

  const params = useParams();

  const dispatch = useDispatch() as Function;
  useEffect(() => {
    dispatch(fetchMember(params.id));
  }, [dispatch]);

  // useEffect(() => {
  // const handleResize = () => {
  //   const childrens = leftDiv.current?.children as HTMLCollectionOf<Element>;
  //   if (childrens) {
  //     let newHeight = 8;
  //     Array.from(childrens).forEach((child) => {
  //       // Do something with each child element
  //       newHeight += child.clientHeight;
  //     });
  //     newHeight += 8;
  //     setHeight(`${newHeight}px`);
  //     console.log(newHeight)
  //   }

  // };
  // handleResize()
  // window.addEventListener("resize", handleResize);

  // return () => {
  //   window.removeEventListener("resize", handleResize);
  // };
  // }, [leftDiv]);
  const [memberData, setMemberData] = useState<IMember>(initialMemberState);

  const member = useSelector(getMember);
  // console.log(member, "zzz");
  useEffect(() => {
    if (member.data.id) {
      setMemberData(member.data);
    }
  }, [member]);
  console.log(memberData, "zzzz");
  return (
    <div className="flex-1 backdrop-blur-xl bg-white/30">
      <div className="flex flex-col w-[95%] ml-auto mr-auto relative desktop:w-[65%] laptop:w-[90%] tablet:w-[90%] pt-4 tablet:pt-10">
        <div className="mb-3 tablet:mb-4">
          <h1 className="text-3xl font-bold col">Church Member</h1>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col gap-2 col-span-1 sticky top-0">
            <div className="flex flex-col p-6 items-center bg-white rounded shadow-md shadow-slate-400">
              <div className="w-40 h-40 bg-slate-100 rounded-full overflow-hidden shadow-md shadow-slate-300">
                <img
                  className="w-full h-full object-cover"
                  src={memberData.image ? memberData.image : UserCircle}
                  alt={memberData.firstName}
                  onError={function (e) {
                    (e.target as HTMLImageElement).src = UserCircle;
                  }}
                />
              </div>
              <span className="text-xl mt-4 font-bold font-roboto tracking-wide text-slate-800">
                {getFullName({
                  firstName: memberData?.firstName,
                  middleName: memberData?.middleName,
                  lastName: memberData?.lastName,
                })}
              </span>
              <span className="text-sm mt-1 text-slate-600">
                {memberData.addresses.length > 0 &&
                  `${memberData.addresses[0].barangay} ${memberData.addresses[0].cityMunicipality} ${memberData.addresses[0].province}`}
              </span>
              <div className="flex flex-row gap-2 mt-4">
                <button
                  onClick={() => {}}
                  className="flex justify-between flex-row text-sm focus:ring-2 focus:text-white ring-blue-600 px-3 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold ring-offset-1"
                >
                  Update
                </button>
                <button
                  onClick={() => {}}
                  className="flex justify-between flex-row text-sm focus:ring-2 focus:text-white ring-rose-600 px-3 py-2 rounded bg-rose-500 hover:bg-rose-600 text-white font-bold ring-offset-1"
                >
                  Remove
                </button>
              </div>
            </div>

            {memberData.addresses.map((address) => (
              <ContactInformation
                key={address.id}
                address={address}
                branch={"WOLCA Apalit"}
              />
            ))}
          </div>
          <div
            className={classNames(
              `w-full col-span-2 overflow-auto overflow-x-hidden pb-2`
            )}
          >
            {/* <div className="flex flex-row">
              <span className=" bg-white p-[3px] px-2 shadow-2xl flex items-center cursor-pointer hover:bg-slate-100 flex-1 justify-center">
                <UserIcon className="w-8 h-8 fill-slate-800" />
              </span>
              <span className=" bg-white p-[3px] px-2 shadow-2xl flex items-center cursor-pointer hover:bg-slate-100 flex-1 justify-center">
                <BriefcaseIcon className="w-8 h-8 fill-slate-800" />
              </span>
              <span className=" bg-white p-[3px] px-2 shadow-2xl flex items-center cursor-pointer hover:bg-slate-100 flex-1 justify-center">
                <BriefcaseIcon className="w-8 h-8 fill-slate-800" />
              </span>
              <span className=" bg-white p-[3px] px-2 shadow-2xl flex items-center cursor-pointer hover:bg-slate-100 flex-1 justify-center">
                <AcademicCapIcon className="w-8 h-8 fill-slate-800" />
              </span>
              <span className=" bg-white p-[3px] px-2 shadow-2xl flex items-center cursor-pointer hover:bg-slate-100 flex-1 justify-center">
                <HeartIcon className="w-8 h-8 fill-slate-800" />
              </span>
              <span className=" bg-white p-[3px] px-2 shadow-2xl flex items-center cursor-pointer hover:bg-slate-100 flex-1 justify-center">
                <UsersIcon className="w-8 h-8 fill-slate-800" />
              </span>
              <span className=" bg-white p-[3px] px-2 shadow-2xl flex items-center cursor-pointer hover:bg-slate-100 flex-1 justify-center">
                <UserGroupIcon className="w-8 h-8 fill-slate-800" />
              </span>
            </div> */}

            <PersonalInformation member={memberData} />
            <WorkInformation work={memberData.workInformation} />
            <FamilyBackground family={memberData.familyBackground} />
            <EducationalBackground education={memberData.education} />
            <MarriageInformation spouse={memberData.marriageInformation} />
            {memberData.dependents.map((dependent) => (
              <DependentsInformation key={dependent.id} dependent={dependent} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
