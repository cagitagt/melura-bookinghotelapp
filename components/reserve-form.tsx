"use client";

import { useState,useActionState } from "react";
import { addDays } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createReserve } from "@/lib/action";
import { RoomDetailProps, DisabledDateProps } from "@/types/room";
import clsx from "clsx";

const ReserveForm = ({
  room,
  disabledDate
}: {
  room: RoomDetailProps;
  disabledDate: DisabledDateProps[];
}) => {
  const StartDate = new Date();
  const EndDate = addDays(StartDate, 1);

  const [startDate, setStartDate] = useState(StartDate);
  const [endDate, setEndDate] = useState(EndDate);

  const handleDateChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const [state, formAction, isPending] = useActionState(createReserve.bind(null, room.id, room.price, startDate, endDate), null);

  const excludeDates = disabledDate.map((item) => {
    return{
      start:item.startDate,
      end: item.endDate,
    }
  })
  return (
    <div>
      <form action={formAction}>
        <div className="mb-4">
          <label className="block mb-2 text-xs uppercase tracking-wide text-taupe-500">
            Arrival - Departure
          </label>
          <DatePicker
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            selectsRange={true}
            excludeDateIntervals={excludeDates}
            onChange={handleDateChange}
            dateFormat={"dd-MM-YY"}
            wrapperClassName="w-full"
            className="py-2.5 px-4 rounded-full border border-taupe-200 w-full text-sm text-taupe-800 focus:outline-none focus:border-taupe-500 transition-colors duration-200"
          >
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">{state?.messageDate}</p>
            </div>
          </DatePicker>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-xs uppercase tracking-wide text-taupe-500">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Full Name..."
            className="py-2.5 px-4 rounded-full border border-taupe-200 w-full text-sm text-taupe-800 placeholder:text-taupe-400 focus:outline-none focus:border-taupe-500 transition-colors duration-200"
          />
          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">{state?.error?.name}</p>
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-xs uppercase tracking-wide text-taupe-500">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number..."
            className="py-2.5 px-4 rounded-full border border-taupe-200 w-full text-sm text-taupe-800 placeholder:text-taupe-400 focus:outline-none focus:border-taupe-500 transition-colors duration-200"
          />
          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">{state?.error?.phone}</p>
          </div>
        </div>

        {/* Pesan error umum (misal transaction gagal) */}
        {state?.message && (
          <div aria-live="polite" aria-atomic="true" className="mb-4">
            <p className="text-sm text-red-500">{state.message}</p>
          </div>
        )}
        
        <button
          type="submit"
          disabled={isPending}
          className={clsx("px-10 py-3 text-center text-sm font-medium w-full text-taupe-50 bg-taupe-800 rounded-full cursor-pointer hover:bg-taupe-700 transition-colors duration-200", {
            "opacity-50 cursor-progress" : isPending,
          })}
        >
          {isPending ? "Loading..." : "Reserve"}
        </button>
      </form>
    </div>
  );
};

export default ReserveForm;