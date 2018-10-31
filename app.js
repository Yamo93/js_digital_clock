const DOMstrings = {
    timeHour: document.querySelector(".clock-box__time-hour"),
    timeMinute: document.querySelector(".clock-box__time-minute"),
    timeSecond: document.querySelector(".clock-box__time-second"),
    dateMonth: document.querySelector(".clock-box__date-left--month"),
    dateDay: document.querySelector(".clock-box__date-left--date"),
    dateYear: document.querySelector(".clock-box__date-left--year"),
    dateWeekDay: document.querySelector(".clock-box__date-weekday")
};

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


function setTime() {
    DOMstrings.timeHour.textContent = new Date().getHours();
    DOMstrings.timeMinute.textContent = new Date().getMinutes();
    DOMstrings.timeSecond.textContent = new Date().getSeconds();
    DOMstrings.dateMonth.textContent = months[new Date().getMonth()];
    DOMstrings.dateDay.textContent = new Date().getDate();
    DOMstrings.dateYear.textContent = new Date().getFullYear();
    DOMstrings.dateWeekDay.textContent = weekDays[new Date().getDay()];
}

setInterval(setTime, 1000);