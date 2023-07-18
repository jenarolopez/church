import React from "react";
import { members } from "../../../Interface";
import { ITable, IMember } from "../../../Interface";
import {
  calculateAge,
  getAddressString,
  getFullName,
} from "../../../utils/helper";
import DataTable from "../../../components/Table";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid/models";

const Members = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "profile",
      headerName: "Image",
      width: 100,
      sortable: false,
      renderCell: (e) => {
        return (
          <div className="h-10 w-10">
            <img
              src={e.value}
              className="w-full h-full object-cover rounded-full"
              alt={e.row.firstName}
            />
          </div>
        );
      },
    },
    { field: "firstName", headerName: "First Name", width: 160 },
    { field: "lastName", headerName: "Last Name", width: 160 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 100,
      valueGetter: (params: GridValueGetterParams) =>
        calculateAge(params.row.birthDay),
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        getFullName({
          firstName: params.row.firstName,
          middleName: params.row.middleName,
          lastName: params.row.lastName,
        }),
    },
    {
      field: "contactNo",
      headerName: "Contact",
      width: 130,
    },
    {
      field: "address",
      headerName: "Address",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      minWidth: 200,
      flex: 1,
      valueGetter: (params: GridValueGetterParams) =>
        getAddressString(params.row.address),
    },
  ];

  return (
    <div className="flex-1 backdrop-blur-xl bg-white/30">
      <div className="flex flex-col w-[95%] ml-auto mr-auto relative desktop:w-[80%] laptop:w-[90%] tablet:w-[90%] pt-4 tablet:pt-10">
        <div className="mb-3 tablet:mb-4">
          <h1 className="text-3xl font-bold col">Church Members</h1>
        </div>
        <DataTable
          rows={members.map((data, index) => {
            return {
              id: index,
              ...data,
            };
          })}
          columnRender={columns}
          className="w-full h-[70vh] backdrop-blur-xl bg-white/70 rounded-md"
        />
      </div>
    </div>
  );
};

export default Members;
