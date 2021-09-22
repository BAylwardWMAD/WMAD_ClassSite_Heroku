const date = new Date();
let wmadSwitch = true;

export function loadCalendar() {
    const seniorClassInput = document.querySelector('.slider');

    seniorClassInput.addEventListener('click', () => {
        if (wmadSwitch) wmadSwitch = false;
        else wmadSwitch = true;

        if (wmadSwitch) {
            document.querySelector('.senior-selected').innerHTML = 'Senior A';
            document.querySelector('.schedule-info').style.opacity = 0;
        } else {
            document.querySelector('.senior-selected').innerHTML = 'Senior B';
            document.querySelector('.schedule-info').style.opacity = 0;
        };
    });

    date.setDate(1);

    const monthDays = document.querySelector('.days');

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const prevMonthLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    const firstDayNum = date.getDay();

    const lastDayNum = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

    const nextDays = 7 - lastDayNum - 1;

    const months = [
        'January',
        'Feburary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    document.querySelector('.date h1').innerHTML = months[date.getMonth()];

    let days = "";

    for (let x = firstDayNum; x > 0; x--) {
        days += `<div class="prev-date">${prevMonthLastDay - x + 1}</div>`
    }
    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="current">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`
    }
    monthDays.innerHTML = days;
}

export function changeMonth() {
    document.querySelector('.prev').addEventListener('click', () => {
        date.setMonth(date.getMonth() - 1);
        loadCalendar();
        useCalendar();
    });
    document.querySelector('.next').addEventListener('click', () => {
        date.setMonth(date.getMonth() + 1);
        loadCalendar();
        useCalendar();
    });

};

export function useCalendar() {
    const daysArray = document.querySelector('.days').children;
    const dayInfo = document.querySelector('.dayInfo');
    const scheduleInfo = document.querySelector('.schedule-info')
    const daysOfWeek = [
        'Sunday',
        'Monday - On Campus',
        'Tuesday - On Campus',
        'Wednesday - On Campus',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    function scrollToService(selector, yOffset) {
        const serviceOffset = selector.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
            top: serviceOffset,
            behavior: 'smooth'
        });
    }

    for (let i = 0; i < daysArray.length; i++) {
        daysArray[i].addEventListener('click', () => {
            scheduleInfo.style.opacity = 1;
            scrollToService(scheduleInfo, -100);
            for (let j = 0; j < daysArray.length; j++) {
                if (daysArray[j].classList.contains('current')) {
                    daysArray[j].classList.toggle('current');
                }
            }
            daysArray[i].classList.toggle('current');
            let dayOfMonth = new Date(date);

            dayOfMonth.setDate(daysArray[i].innerHTML);

            dayInfo.innerHTML = daysOfWeek[dayOfMonth.getDay()];

            document.querySelector('.date p').innerHTML = dayOfMonth.toDateString();


            if (wmadSwitch) {
                switch (daysOfWeek[dayOfMonth.getDay()]) {
                    case 'Sunday':
                        document.querySelector('.class1 p').innerHTML = "Weekend";
                        document.querySelector('.class2 p').innerHTML = "Weekend";
                        document.querySelector('.class3 p').innerHTML = "Weekend";
                        document.querySelector('.class4 p').innerHTML = "Weekend";
                        document.querySelector('.class5 p').innerHTML = "Weekend";
                        document.querySelector('.class6 p').innerHTML = "Weekend";
                        break;
                    case 'Monday - On Campus':
                        document.querySelector('.class1 p').innerHTML = "N-Tier Development<br>PROG1179<br><br>Instructor: Judson Murray";
                        document.querySelector('.class2 p').innerHTML = "N-Tier Development<br>PROG1179<br><br>Instructor: Judson Murray";
                        document.querySelector('.class3 p').innerHTML = "<strong>Free Period</strong>";
                        document.querySelector('.class4 p').innerHTML = "<strong>Free Period</strong>";
                        document.querySelector('.class5 p').innerHTML = "Server Side Web (ASP.NET)<br>PROG1025<br><br>Instructor: Judson Murray";
                        document.querySelector('.class6 p').innerHTML = "Server Side Web (ASP.NET)<br>PROG1025<br><br>Instructor: Judson Murray";
                        break;
                    case 'Tuesday - On Campus':
                        document.querySelector('.class1 p').innerHTML = "Employment Strategies<br>PERS1070<br><br>Instructor: Sean Hemming";
                        document.querySelector('.class2 p').innerHTML = "Intermediate Java<br>PROG1090I<br><br>Instructor: Andre Boudreau";
                        document.querySelector('.class3 p').innerHTML = "Intermediate Java<br>PROG1090J<br><br>Instructor: Andre Boudreau";
                        document.querySelector('.class4 p').innerHTML = "<strong>Free Period</strong>";
                        document.querySelector('.class5 p').innerHTML = "Advanced JavaScript<br>PROG1317A<br><br>Instructor: Chris Cusack";
                        document.querySelector('.class6 p').innerHTML = "<strong>Free Period</strong>";
                        break;
                    case 'Wednesday - On Campus':
                        document.querySelector('.class1 p').innerHTML = "Adv JavaScript<br>PROG1317A<br><br>Instructor: Chris Cusack";
                        document.querySelector('.class2 p').innerHTML = "Adv JavaScript<br>PROG1317A<br><br>Instructor: Chris Cusack";
                        document.querySelector('.class3 p').innerHTML = "Server Side Web (ASP.NET)<br>PROG1025<br><br>Instructor: Judson Murray";
                        document.querySelector('.class4 p').innerHTML = "Server Side Web (ASP.NET)<br>PROG1025<br><br>Instructor: Judson Murray";
                        document.querySelector('.class5 p').innerHTML = "<strong>Free Period</strong>";
                        document.querySelector('.class6 p').innerHTML = "<strong>Free Period</strong>";
                        break;
                    case 'Thursday':
                        document.querySelector('.class1 p').innerHTML = "N-Tier Development<br>PROG1179<br><br>Instructor: Judson Murray";
                        document.querySelector('.class2 p').innerHTML = "N-Tier Development<br>PROG1179<br><br>Instructor: Judson Murray";
                        document.querySelector('.class3 p').innerHTML = "<strong>Free Period</strong>";
                        document.querySelector('.class4 p').innerHTML = "Employment Strategies<br>PERS1070<br><br>Instructor: Sean Hemming";
                        document.querySelector('.class5 p').innerHTML = "<strong>Free Period</strong>";
                        document.querySelector('.class6 p').innerHTML = "<strong>Free Period</strong>";
                        break;
                    case 'Friday':
                        document.querySelector('.class1 p').innerHTML = "Server Side Web (ASP.NET)<br>PROG1025<br><br>Instructor: Judson Murray";
                        document.querySelector('.class2 p').innerHTML = "Server Side Web (ASP.NET)<br>PROG1025<br><br>Instructor: Judson Murray";
                        document.querySelector('.class3 p').innerHTML = "Intermediate Java<br>PROG1090J<br><br>Instructor: Andre Boudreau";
                        document.querySelector('.class4 p').innerHTML = "Intermediate Java<br>PROG1090J<br><br>Instructor: Andre Boudreau";
                        document.querySelector('.class5 p').innerHTML = "Adv JavaScript<br>PROG1317A<br><br>Instructor: Chris Cusack";
                        document.querySelector('.class6 p').innerHTML = "Adv JavaScript<br>PROG1317A<br><br>Instructor: Chris Cusack";
                        break;
                    case 'Saturday':
                        document.querySelector('.class1 p').innerHTML = "Weekend";
                        document.querySelector('.class2 p').innerHTML = "Weekend";
                        document.querySelector('.class3 p').innerHTML = "Weekend";
                        document.querySelector('.class4 p').innerHTML = "Weekend";
                        document.querySelector('.class5 p').innerHTML = "Weekend";
                        document.querySelector('.class6 p').innerHTML = "Weekend";
                        break;
                };
            } else {
                switch (daysOfWeek[dayOfMonth.getDay()]) {
                    case 'Sunday':
                        document.querySelector('.class1 p').innerHTML = "Weekend";
                        document.querySelector('.class2 p').innerHTML = "Weekend";
                        document.querySelector('.class3 p').innerHTML = "Weekend";
                        document.querySelector('.class4 p').innerHTML = "Weekend";
                        document.querySelector('.class5 p').innerHTML = "Weekend";
                        document.querySelector('.class6 p').innerHTML = "Weekend";
                        break;
                    case 'Monday - On Campus':
                        document.querySelector('.class1 p').innerHTML = "Intermediate Java<br>PROG1090I<br><br>Instructor: Andre Boudreau";
                        document.querySelector('.class2 p').innerHTML = "Intermediate Java<br>PROG1090I<br><br>Instructor: Andre Boudreau";
                        document.querySelector('.class3 p').innerHTML = "<strong>Free Period</strong>";
                        document.querySelector('.class4 p').innerHTML = "<strong>Free Period</strong>";
                        document.querySelector('.class5 p').innerHTML = "Advanced JavaScript<br>PROG1317A<br><br>Instructor: Chris Cusack";
                        document.querySelector('.class6 p').innerHTML = "Advanced JavaScript<br>PROG1317A<br><br>Instructor: Chris Cusack";
                        break;
                    case 'Tuesday - On Campus':
                        document.querySelector('.class1 p').innerHTML = "Server Side Web (ASP.NET)<br>PROG1025<br><br>Instructor: Bonnie Ryan";
                        document.querySelector('.class2 p').innerHTML = "Server Side Web (ASP.NET)<br>PROG1025<br><br>Instructor: Bonnie Ryan";
                        document.querySelector('.class3 p').innerHTML = "N-Tier Development<br>PROG1179<br><br>Instructor: Stephen Carter";
                        document.querySelector('.class4 p').innerHTML = "N-Tier Development<br>PROG1179<br><br>Instructor: Stephen Carter";
                        document.querySelector('.class5 p').innerHTML = "Employment Strategies<br>PERS1070<br><br>Instructor: Sean Hemming";
                        document.querySelector('.class6 p').innerHTML = "Advanced JavaScript<br>PROG1317A<br><br>Instructor: Chris Cusack";
                        break;
                    case 'Wednesday - On Campus':
                        document.querySelector('.class1 p').innerHTML = "Server Side Web (ASP.NET)<br>PROG1025<br><br>Instructor: Bonnie Ryan";
                        document.querySelector('.class2 p').innerHTML = "Server Side Web (ASP.NET)<br>PROG1025<br><br>Instructor: Bonnie Ryan";
                        document.querySelector('.class3 p').innerHTML = "<strong>Free Period</strong>";
                        document.querySelector('.class4 p').innerHTML = "Employment Strategies<br>PERS1070<br><br>Instructor: Sean Hemming";
                        document.querySelector('.class5 p').innerHTML = "N-Tier Development<br>PROG1179<br><br>Instructor: Stephen Carter";
                        document.querySelector('.class6 p').innerHTML = "N-Tier Development<br>PROG1179<br><br>Instructor: Stephen Carter";
                        break;
                    case 'Thursday':
                        document.querySelector('.class1 p').innerHTML = "Advanced JavaScript<br>PROG1317A<br><br>Instructor: Chris Cusack";
                        document.querySelector('.class2 p').innerHTML = "Advanced JavaScript<br>PROG1317A<br><br>Instructor: Chris Cusack";
                        document.querySelector('.class3 p').innerHTML = "Intermediate Java<br>PROG1090I<br><br>Instructor: Andre Boudreau";
                        document.querySelector('.class4 p').innerHTML = "Intermediate Java<br>PROG1090I<br><br>Instructor: Andre Boudreau";
                        document.querySelector('.class5 p').innerHTML = "Server Side Web (ASP.NET)<br>PROG1025<br><br>Instructor: Bonnie Ryan";
                        document.querySelector('.class6 p').innerHTML = "Server Side Web (ASP.NET)<br>PROG1025<br><br>Instructor: Bonnie Ryan";
                        break;
                    case 'Friday':
                        document.querySelector('.class1 p').innerHTML = "<strong>Free Period</strong>";
                        document.querySelector('.class2 p').innerHTML = "<strong>Free Period</strong>";
                        document.querySelector('.class3 p').innerHTML = "<strong>Free Period</strong>";
                        document.querySelector('.class4 p').innerHTML = "<strong>Free Period</strong>";
                        document.querySelector('.class5 p').innerHTML = "<strong>Free Period</strong>";
                        document.querySelector('.class6 p').innerHTML = "<strong>Free Period</strong>";
                        break;
                    case 'Saturday':
                        document.querySelector('.class1 p').innerHTML = "Weekend";
                        document.querySelector('.class2 p').innerHTML = "Weekend";
                        document.querySelector('.class3 p').innerHTML = "Weekend";
                        document.querySelector('.class4 p').innerHTML = "Weekend";
                        document.querySelector('.class5 p').innerHTML = "Weekend";
                        document.querySelector('.class6 p').innerHTML = "Weekend";
                        break;
                };
            };
        });

    }
}