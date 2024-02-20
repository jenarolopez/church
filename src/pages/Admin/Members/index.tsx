import React, { useEffect } from "react";
import { ITable, IMember } from "../../../Interface";
import {
  calculateAge,
  getAddressString,
  getFullName,
} from "../../../utils/helper";
import DataTable, { ITableItemProps } from "../../../components/Table";
import Modal from "../../../components/Modal";
import Select from "../../../components/Select";
import RegistrationModal from "./Modal";
import { setLoading } from "../../../reducer/loading/loadingSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchMembers } from "../../../reducer/member/action";
import { getMembers } from "../../../reducer/member/membersSlice";
// import { UserCircleIcon } from "@heroicons/react/16/solid";
import UserCircle from "../../../assets/images/no-profile.svg";
import {
  getTableLimit,
  setTableLimit,
} from "../../../reducer/settings/settingsSlice";
import { redirect, useNavigate } from "react-router-dom";
const Members = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [inputSearch, setInputSearch] = React.useState("");
  const navigate = useNavigate();
  const dataRenderer = (props: ITableItemProps) => {
    // console.log(props, "1222");
  };

  const dispatch = useDispatch() as Function;
  const members = useSelector(getMembers);
  const tableLimit = useSelector(getTableLimit);

  useEffect(() => {
    dispatch(fetchMembers({ limit: tableLimit, page: 1 }));
  }, [dispatch, tableLimit]);

  return (
    <div className="flex-1 backdrop-blur-xl bg-white/30">
      <div className="flex flex-col w-[95%] ml-auto mr-auto relative desktop:w-[80%] laptop:w-[90%] tablet:w-[90%] pt-4 tablet:pt-10">
        <div className="mb-3 tablet:mb-4">
          <h1 className="text-3xl font-bold col">Church Members</h1>
        </div>
        <RegistrationModal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />

        <DataTable
          rows={members.list}
          renderRow={dataRenderer}
          onClick={(id) => {
            navigate(`view/${id}`);
          }}
          pagination={{
            currentPage: members.currentPage,
            hasNextPage: members.hasNextPage,
            hasPrevPage: members.hasPrevPage,
            totalCount: members.totalCount,
            totalPages: members.totalPages,
            onChangePage: (page) => {
              dispatch(fetchMembers({ limit: tableLimit, page }));
            },
          }}
          filterElement={
            <div>
              <select>
                <option value="0">Default</option>
                <option value="1">First Name</option>
                <option value="3">Last Name</option>
                <option value="4">Age</option>
              </select>
            </div>
          }
          addButton={
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className="flex justify-between flex-row text-sm focus:ring-2 focus:text-white ring-slate-600 px-3 py-2 rounded bg-slate-500 hover:bg-slate-600 text-gray-200 font-bold ring-offset-1"
            >
              Add User
            </button>
          }
          setTableLimit={(e: Event) => {
            const target = e.target as HTMLSelectElement;
            dispatch(setTableLimit(parseInt(target.value)));
          }}
          searchInputValue={inputSearch}
          searchOnChange={(e) => {
            setInputSearch(e.target.value);
          }}
          headers={[
            {
              key: "id",
              title: "ID",
              className: "w-20 justify-center min-w-[5rem]",
            },
            {
              title: "Image",
              className: "w-16 justify-center",
              dataRender: (props: IMember) => {
                return (
                  <div className="w-10 h-10 bg-slate-100 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={props.image ? props.image : UserCircle}
                      alt={props.firstName}
                      onError={function (e) {
                        (e.target as HTMLImageElement).src = UserCircle;
                      }}
                    />
                  </div>
                );
              },
            },
            { key: "firstName", title: "First name" },
            { key: "lastName", title: "Last name" },
            {
              title: "Age",
              className: "w-16  min-w-[4rem]",
              dataRender: (props: IMember) => {
                return calculateAge(props.birthday);
              },
            },
            {
              title: "Contact",
              dataRender: (props: IMember) => {
                return props.addresses[0].contactNumber;
              },
            },
            {
              title: "Address",
              className: "w-[200px] min-w-[200px]",
              dataRender: (props: IMember) => {
                if (props.addresses.length > 0) {
                  return (
                    <span
                      className="line-clamp-2"
                      title={getAddressString(props.addresses[0])}
                    >
                      {getAddressString(props.addresses[0])}
                    </span>
                  );
                } else {
                  return "";
                }
              },
            },
          ]}
          className="w-full min-h-[500px] h-[70vh] max-h-[1000px] backdrop-blur-xl bg-white rounded-md"
        />
      </div>
    </div>
  );
};

export default Members;
