import { CalendarIcon } from "@heroicons/react/24/solid";
import React, { useRef } from "react";

interface DatePickerProps {
  onChange: (date: Date) => void;
}

const DatePicker = ({ onChange }: DatePickerProps) => {
  const dateInputRef = useRef<HTMLInputElement>(null);
  return (
    <span className="flex flex-col justify-center">
      <button
        onClick={() => {
          dateInputRef.current?.showPicker();
        }}
        className="flex w-32 flex-row text-sm focus:ring-2 focus:text-white ring-slate-600 px-3 py-2 rounded bg-slate-500 hover:bg-slate-600 text-gray-200 font-bold ring-offset-1"
      >
        Select Date&nbsp;
        <CalendarIcon className="h-5 w-5" />
      </button>
      <input
        ref={dateInputRef}
        onChange={(e) => {
          const date = new Date(e.target.value)
          onChange(date);
        }}
        id="member-birthday"
        className="h-0 w-full"
        type="date"
      />
    </span>
  );
};

export default DatePicker;
