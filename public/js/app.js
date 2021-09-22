import * as calender from './calender.js';
import * as weather from './weather.js';
const navBar = document.querySelector('.navBar');
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.navList');
const navLines = document.querySelectorAll('.hamburger_line');
const sideBarBtn = document.querySelector('.id-side-btn');
const sideBar = document.querySelector('.important-dates_side-bar');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('toggle');
    navLines[0].classList.toggle('line1');
    navLines[1].classList.toggle('line2');
});

document.body.addEventListener('click', (event) => {
    let clickedInNavList = navList.contains(event.target);
    let clickedInNavBar = navBar.contains(event.target);

    if (!clickedInNavList && !clickedInNavBar) {
        if (navList.classList.contains('toggle')) {
            navList.classList.remove('toggle');
            navLines[0].classList.remove('line1');
            navLines[1].classList.remove('line2');
        };
    };

});

let prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        navBar.style.top = "0";
    } else {
        navBar.style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
});

sideBarBtn.addEventListener('click', () => {
    sideBar.classList.toggle('slide-out');
    document.querySelector('.side-line1').classList.toggle('side-line-toggle');
    document.querySelector('.side-line2').classList.toggle('side-line-toggle');
});




if (document.querySelector('.schedule-intro')) {
    calender.loadCalendar();
    calender.useCalendar();
    calender.changeMonth();
}

if (document.querySelector('.weather-section_container')) {
    weather.weatherSearch();
}