export async function dayMonthYearShort(date: Date): Promise<string> {
    const newDate = date.toLocaleString("default", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    const [month, day, years] = newDate.split(" ");

    return `${day.replace(",", "")} ${month} ${years}`;
}

export async function monthDayYearShort(date: Date): Promise<string> {
    const newDate = date.toLocaleString("default", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    return newDate;
}
