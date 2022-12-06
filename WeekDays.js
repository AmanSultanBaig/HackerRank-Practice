const weekDays = ["MON", "TUSE", "WEDN", "TH", "FRI", "SAT", "SUN"];

const weekDayText = (index) => {
    if(Number(index) > weekDays.length) {
        return console.log("Invalid Weekday Index")
    }
    return console.log(weekDays[index])
}

weekDayText(10)