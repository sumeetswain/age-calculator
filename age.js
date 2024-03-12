const getData = () => {
    let age = document.querySelector("#age")
    age.style.display = "block"
    let [bdayYear, bdayMonth, bday] = document.querySelector("#birthday").value.split("-").map(a => parseInt(a))
    console.log(bday, bdayMonth, bdayYear);
    const date = new Date()
    let today = date.getDate()
    let thisMonth = date.getMonth() + 1
    let thisYear = date.getFullYear()
    console.log(today, thisMonth, thisYear)
    if (bdayYear > thisYear ||
        (bdayYear == thisYear && bdayMonth > thisMonth) ||
        (bdayYear == thisYear && bdayMonth == thisMonth && bday > today)) {
        age.innerHTML = "Enter Valid Age"
    } else {
        age.innerHTML = calculate(today, thisMonth, thisYear, bday, bdayMonth, bdayYear);

    }

}
const calculate = (today, thisMonth, thisYear, bday, bdayMonth, bdayYear) => {

    let days, months, years
    years = thisYear - bdayYear

    if (thisMonth >= bdayMonth) { // this will execute when the current month is greater than birthday month, meaning the bday month has passed
        months = thisMonth - bdayMonth
    } else { // this will execute when the bday month has not passed
        years--
        months = 12 + thisMonth - bdayMonth
    }

    if (today >= bday) { // if the bday date has passed we can simply subtract
        days = today - bday
    } else {
        months--
        days = getDaysInMonth(bdayYear, bdayMonth) + today - bday
    }
    if (months < 0) {
        months = 11
        years--
    }
    return (`${days} days,${months} months,${years} years`)
    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate()
    }
}
document.querySelector("#birthday").value = "2024-01-01"