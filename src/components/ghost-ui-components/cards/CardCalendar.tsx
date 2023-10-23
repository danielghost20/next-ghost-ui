"use client"

import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useGetDays from "@/hooks/useGetDays";

export default function CardCalendar() {

    const [calendar, setCalendar] = useState([])
    const {daysOfMonth} = useGetDays(2023, 10)
    for(let i = 0; i < daysOfMonth.length; i++) {
        console.log(daysOfMonth[i].getDate())
    }

  return (
    <div className="max-w-xl p-3 rounded-md w-full h-72 border-2">
      <div className="flex justify-between w-full">
        <div className="flex gap-2">
          <span>Septiembre</span>
          <span>2022</span>
        </div>
        <div className="flex gap-3">
          <IoIosArrowBack />
          <IoIosArrowForward />
        </div>
      </div>
        <table className="w-full flex flex-col justify-center gap-2">
          <tr className="w-full grid grid-cols-7 place-content-center">
          <th className="max-w-max m-auto">D</th>
            <th className="max-w-max m-auto">L</th>
            <th className="max-w-max m-auto">M</th>
            <th className="max-w-max m-auto">M</th>
            <th className="max-w-max m-auto">J</th>
            <th className="max-w-max m-auto">V</th>
            <th className="max-w-max m-auto">S</th>
          </tr>
          <tr className="w-full grid grid-cols-7 place-content-center">
            <td className="max-w-max m-auto">1</td>
            <td className="max-w-max m-auto">2</td>
            <td className="max-w-max m-auto">3</td>
            <td className="max-w-max m-auto">4</td>
            <td className="max-w-max m-auto">5</td>
            <td className="max-w-max m-auto">6</td>
            <td className="max-w-max m-auto">7</td>
          </tr>
        </table>
    </div>
  );
}
