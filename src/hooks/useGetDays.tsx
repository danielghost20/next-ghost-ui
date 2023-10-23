import { useEffect, useState } from "react";

export default function useGetDays (year: number, month: number) {
    const [daysOfMonth, setDaysOfMonth] = useState<Date[]>([])

    useEffect(() => {
        const days = new Date(year, month, 0).getDate()
        
        const daysArr: Date[] = []

        for(let i = 1; i <= days; i++) {
            daysArr.push(new Date(year, month - 1, i));
        }

        setDaysOfMonth(daysArr)
    }, [year, month])

    return {daysOfMonth}

}