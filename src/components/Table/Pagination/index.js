import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { classNames } from "../../../utils/helper";

function Pagination(props) {
  const { page, totalPage = 1, onChangePage = () => {} } = props;

  const pages = [1];
  let firstPages = [];
  let middlePages = [];
  let lastPages = [];

  firstPages = [1, 2, 3, 4, 5, 6, 7, 8, 9, null];
  lastPages = [totalPage, totalPage - 1, totalPage - 2];
  for (let x = 2; x <= totalPage; x++) {
    pages.push(x);
  }

  if (page > 8) {
    firstPages = [1, 2, 3, null];
    for (let x = page - 2; x <= page + 2; x++) {
      middlePages.push(x);
    }
    middlePages.push(null);
  }

  if (page > totalPage - 6) {
    middlePages = [];
    lastPages = [];
    for (let x = totalPage, y = 0; x >= 1; x--, y++) {
      if (y == 9) {
        break;
      }
      lastPages.push(x);
    }
  }

  const newPages =
    pages.length <= 20
      ? pages
      : [...firstPages, ...middlePages, ...lastPages.reverse()];

  return (
    <div className={"flex flex-row gap-1 flex-wrap"}>
      <button
        className={classNames(
          "w-[30px] h-[30px] flex justify-between flex-row p-1 ring-slate-600 rounded font-bold ring-offset-1 bg-slate-700 text-gray-200",
          page <= 10 ? "opacity-50" : "opacity-100 hover:bg-slate-600 focus:ring-2 focus:text-white"
        )}
        disabled={page <= 10 ? true : false}
        onClick={() => {
          props.onChangePage(page - 10);
        }}
      >
        <ChevronDoubleLeftIcon />
      </button>

      <button
        className={classNames(
          "w-[30px] h-[30px] flex justify-between flex-row p-1 ring-slate-600 rounded font-bold ring-offset-1 bg-slate-700  text-gray-200",
          page == 1 ? "opacity-50" : "opacity-100 hover:bg-slate-600 focus:ring-2 focus:text-white"
        )}
        disabled={page == 1 ? true : false}
        onClick={() => {
          props.onChangePage(page - 1);
        }}
      >
        <ChevronLeftIcon />
      </button>

      {newPages.map((pageNum, index) => {
        // console.log(pageNum == (index + 1) )
        const nullClass =
          pageNum == null
            ? "bg-slate-200 text-slate-700 pointer-events-none"
            : "";
        const currentPageClass =
          pageNum == page
            ? "bg-slate-200 text-slate-700 pointer-events-none"
            : "focus:ring-2 focus:text-white hover:bg-slate-600";
        const buttonCustomClass =
          pageNum != page && pageNum != null && "bg-slate-500";
        return (
          <button
            className={
              classNames(
                "w-[30px] h-[30px] flex justify-center flex-row p-1 ring-slate-600 rounded text-gray-200 font-bold ring-offset-1",
                nullClass,
                currentPageClass,
                buttonCustomClass
              )
              // page != pageNum && pageNum != null
              //   ? ["classes.page", "classes.pointer"]
              //   : pageNum == null
              //   ? "classes.separator"
              //   : "classes.currentPage"
            }
            onClick={() => {
              props.onChangePage(pageNum);
            }}
            key={index}
          >
            <p> {`${pageNum != null ? pageNum : "..."}`} </p>
          </button>
        );
      })}

      <button
        className={classNames(
          "w-[30px] h-[30px] flex justify-between flex-row p-1 ring-slate-600 rounded font-bold ring-offset-1 bg-slate-700  text-gray-200",
          page == totalPage ? "opacity-50" : "opacity-100 hover:bg-slate-600 focus:ring-2 focus:text-white"
        )}
        disabled={page == totalPage ? true : false}
        onClick={() => {
          props.onChangePage(page + 1);
        }}
      >
        <ChevronRightIcon />
      </button>

      <button
        className={classNames(
          "w-[30px] h-[30px] flex justify-between flex-row p-1 ring-slate-600 rounded font-bold ring-offset-1 bg-slate-700  text-gray-200",
          page >= totalPage - 10
            ? "opacity-50"
            : "opacity-100 hover:bg-slate-600 focus:ring-2 focus:text-white"
        )}
        disabled={page >= totalPage - 10 ? true : false}
        onClick={() => {
          props.onChangePage(page + 10);
        }}
      >
        <ChevronDoubleRightIcon />
      </button>
    </div>
  );
}
export default Pagination;
