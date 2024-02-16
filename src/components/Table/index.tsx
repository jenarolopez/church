import React, { ChangeEventHandler, useState } from "react";
import { classNames } from "../../utils/helper";
import Pagination from "./Pagination";
import { getTableLimit } from "../../reducer/settings/settingsSlice";
import { useSelector } from "react-redux";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/16/solid";
import { IMember } from "../../Interface";

export interface ITableProps {
  renderRow: React.ReactNode | any;
  className?: string;
  headers: Array<{
    title: string;
    className?: string;
    key?: string;
    dataRender?: Function;
  }>;
  rows: Array<{
    id: number;
    [key: string]: any;
  }>;
  setTableLimit?: React.ReactNode | any;
  addButton?: React.ReactNode | any;
  filterElement?: React.ReactNode | any;
  searchOnChange?: ChangeEventHandler<HTMLInputElement>;
  searchInputValue?: String | any;
  pagination?: {
    currentPage: number;
    totalCount: number;
    totalPages: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    onChangePage: (page: number) => void;
  };
  onClick: (rowData: number) => void;
}

export type ITableItemProps = Pick<ITableProps, "rows">;

const DataTable: React.FC<ITableProps> = (props) => {
  const renderData = (header: any, row: any) => {
    if (!header.key && header.dataRender) {
      return header.dataRender(row);
    }
    if (header.key == "action") return "button";
    if (row[`${header.key}`]) return row[`${header.key}`];
    return props.renderRow(row);
  };

  const tableLimit = useSelector(getTableLimit);
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div className={`flex flex-col p-4 ${props.className}`}>
      <div className="mb-2 flex flex-row justify-between">
        {props.addButton}
        <span className="flex flex-row gap-2">
          <input
            value={props.searchInputValue}
            className="p-2 pl-2 pr-2 text-sm font-roboto rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
            type="text"
            placeholder="Search for User"
            onChange={props.searchOnChange}
          />
          <button
            onClick={() => {
              setOpenFilter(!openFilter);
            }}
            className={
              "w-[38px] h-[38px] flex justify-center items-center flex-row p-[8px] focus:ring-2 focus:text-white ring-slate-600 rounded bg-slate-500 hover:bg-slate-600 text-gray-200 font-bold ring-offset-1"
            }
          >
            <AdjustmentsHorizontalIcon />
          </button>
        </span>
      </div>
      <div
        className={classNames(
          "overflow-hidden transition-all duration-500",
          openFilter ? "h-20" : "h-0"
        )}
      >
        {
          props.filterElement
        }
      </div>
      <div className="min-w-full h-full overflow-x-auto border-[1px] rounded-md">
        <div className="flex flex-row bg-slate-500 rounded sticky top-0 z-10">
          {props.headers.map((header, index) => {
            return (
              <span
                key={index}
                className={classNames(
                  `flex p-2 py-3 font-roboto text-sm tracking-wider items-center bg-slate-500 border-x-[1px] font-bold text-white border-slate-400 ${
                    header.className ? header.className : "flex-1 min-w-[120px]"
                  }`,
                  index == 0 ? "border-l-0 rounded-bl-lg rounded-tl-lg" : "",
                  index == props.headers.length - 1
                    ? "border-r-0 rounded-br-lg rounded-tr-lg"
                    : ""
                )}
              >
                {header.title}
              </span>
            );
          })}
        </div>
        {props.rows.map((row, index: number) => {
          const background = index % 2 == 0 ? "bg-slate-200" : "bg-slate-300";
          return (
            <div
              key={index}
              className={classNames("flex flex-row group")}
              onClick={() => {
                props.onClick(row.id);
              }}
            >
              {props.headers.map((header, hIndex: number) => {
                const headerStyle = props?.headers[hIndex]?.className
                  ? props?.headers[hIndex]?.className || ""
                  : "flex-1 min-w-[120px]";
                return (
                  <span
                    key={hIndex}
                    className={classNames(
                      `flex sticky top-0 py-[3px] px-3 text-slate-700 font-pop text-md border-b border-slate-300 items-center text-sm cursor-pointer group-hover:bg-slate-100`,
                      headerStyle,
                      background
                    )}
                  >
                    {renderData(header, row)}
                  </span>
                );
                return <></>;
              })}
            </div>
          );
        })}
      </div>
      <div className={"flex flex-wrap justify-between mt-2 gap-2"}>
        <Pagination
          page={props.pagination?.currentPage}
          totalPage={props.pagination?.totalPages}
          hasPrevPage={props.pagination?.hasPrevPage}
          hasNextPage={props.pagination?.hasNextPage}
          onChangePage={props.pagination?.onChangePage}
        />
        <div className="flex flex-row justify-center items-center gap-2">
          <span className="text-sm">Show: </span>
          <select
            onChange={props.setTableLimit}
            defaultValue={tableLimit}
            className="h-[30px] w-12 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border text-sm"
          >
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export const DataItem: React.FC<{
  children: React.ReactNode;
  className: string;
}> = (props) => {
  return (
    <span className={props.className ? props.className : '"w-auto flex-1 flex'}>
      {props.children}
    </span>
  );
};

export default DataTable;
