'use strict';

const hourEl = document.getElementById('hour');
const minutesEl = document.getElementById('minute');
const secondEl = document.getElementById('second');
const milliSecondEl = document.getElementById('millisecs');
const ampmEl = document.getElementById('ampm');

const updateClock = function () {
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  // console.log(ms);
  ampmEl.textContent = 'AM';
  if (h > 12) {
    h = h - 12;
    ampmEl.textContent = 'PM';
  }
  // console.log(h);
  // console.log(s);
  h = h < 10 ? `0${h}` : h;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  // console.log(s);
  hourEl.textContent = h;
  minutesEl.textContent = m;
  secondEl.textContent = s;

  setTimeout(updateClock, 1000);
};

updateClock();

const updateMsClock = function () {
  const date = new Date();
  let ms = date.getMilliseconds();
  milliSecondEl.textContent = ms;
  // setTimeout(updateMsClock, 1);
};
updateMsClock();
