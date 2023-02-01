// const greet1 = (a, b) => {
//   console.log(a + b);
// };

// const greet2 = (a, b) => {
//   console.log(a - b);
// };

// console.log(111)

// const timerId = setTimeout(greet1, 0, 5, 10);

// console.log(timerId)

// const timerId1 = setTimeout(greet2, 2500, 100, 50);

// console.log(timerId1)

// console.log(222)

// // clearTimeout(timerId);

// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let a = null;

// // console.log(timerId)

// startBtn.addEventListener("click", () => {
//  a = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);

// });

// stopBtn.addEventListener("click", () => {
//   console.log(a)
//   clearInterval(a);
//   console.log(a)
//   console.log(`Interval with id ${a} has stopped!`);
// });

// const date = new Date();

// console.log(date.getTime());
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// // console.log(date.getTime());

// // // console.log(new Date(93750427970))

// // const date = new Date();
// // console.log("Date: ", date);

// // Повертає день місяця від 1 до 31
// // console.log("getDate(): ", date.getDate());

// // // Повертає день тижня від 0 до 6
// // console.log("getDay(): ", date.getDay());

// // // Повертає місяць від 0 до 11
// // console.log("getMonth(): ", date.getMonth());

// // // Повертає рік з 4 цифр
// // console.log("getFullYear(): ", date.getFullYear());

// // // Повертає години
// // console.log("getHours(): ", date.getHours());

// // // Повертає хвилини
// // console.log("getMinutes(): ", date.getMinutes());

// // // Повертає секунди
// // console.log("getSeconds(): ", date.getSeconds());

// const date = new Date();
// console.log("Date: ", date);

// // Повертає день місяця від 1 до 31
// console.log("getUTCDate(): ", date.getUTCDate());

// // Повертає день тижня від 0 до 6
// console.log("getUTCDay(): ", date.getUTCDay());

// // Повертає місяць від 0 до 11
// console.log("getUTCMonth(): ", date.getUTCMonth());

// // Повертає рік з 4 цифр
// console.log("getUTCFullYear(): ", date.getUTCFullYear());

// // Повертає години
// console.log("getUTCHours(): ", date.getUTCHours());

// // Повертає хвилини
// console.log("getUTCMinutes(): ", date.getUTCMinutes());

// // Повертає секунди
// console.log("getUTCSeconds(): ", date.getUTCSeconds());

// // Повертає мілісекунди
// console.log("getUTCMilliseconds(): ", date.getUTCMilliseconds());

// Write a function which returns a day number that was some amount of days ago from the passed date.

// const getPastDay = (date, days) => {
//   const MS_PER_DAY = 1000 * 60 * 60 * 24;
//   const msPerDays = MS_PER_DAY * days;
//   const delta = date - msPerDays;
//   return new Date(delta).getDate();
// };

// const date = new Date(2022, 0, 2);
// console.log(getPastDay(date, 1)); // 1, (1 Jan 2022)
// console.log(getPastDay(date, 2)); // 31, (31 Dec 2021)
// console.log(getPastDay(date, 365)); // 2, (2 Jan 2021)

// // Write a function that formats a date in such format "YYYY/MM/DD HH:mm".

// const formatDate = (date) => {
// const year = date.getFullYear()
// const month = String(date.getMonth() + 1).padStart(2, '0')
// const days = String(date.getDate()).padStart(2, '0')
// const hours = String(date.getHours()).padStart(2, '0')
// const minutes = String(date.getMinutes()).padStart(2, '0')
// return `${year}/${month}/${days} ${hours}:${minutes}`
// }

// console.log(formatDate(new Date("6/15/2019 09:15:00"))); // "2019/06/15 09:15"
// console.log(formatDate(new Date())); // gets current local time

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.daysSpan = document.querySelector(`${selector} [data-value="days"]`);
    this.hoursSpan = document.querySelector(
      `${selector}  [data-value="hours"]`
    );
    this.minsSpan = document.querySelector(`${selector}  [data-value="mins"]`);
    this.secsSpan = document.querySelector(`${selector}  [data-value="secs"]`);
    this.updateTimer();
  }

  updateTimer() {
    setInterval(() => {
      const currentTime = Date.now();
      const delta = this.targetDate - currentTime;
      const { days, hours, minutes, seconds } = this.convertTime(delta);
      this.daysSpan.textContent = days;
      this.hoursSpan.textContent = hours;
      this.minsSpan.textContent = minutes;
      this.secsSpan.textContent = seconds;
    }, 1000);
  }

  convertTime(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }
}

const timer1 = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 1, 2024"),
});

const timer2 = new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("May 9, 2023"),
});

const timer3 = new CountdownTimer({
  selector: "#timer-3",
  targetDate: new Date("Nov 1, 2023"),
});
