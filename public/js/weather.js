const apiKey = {
    key: '56a6725cd93e2c8d09bec051fc6a726b',
    base: 'https://api.openweathermap.org/data/2.5/',
};

export function weatherSearch() {
    const searchBox = document.querySelector('.search-box');
    searchBox.addEventListener('keypress', setQuery);
    window.addEventListener('load', () => {
        getResults('Moncton, CA');
        get5DayForecast('Moncton, CA');
    });

    function setQuery(evt) {
        if (evt.keyCode == 13) {
            getResults(searchBox.value);
            get5DayForecast(searchBox.value);
        }
    };

    function getResults(query) {
        if (query.trim().length < 3) return;
        fetch(`${apiKey.base}weather?q=${query}&units=metric&appid=${apiKey.key}`).then(weather => {
            return weather.json();;
        }).then(displayResults);
    };

    function displayResults(weather) {
        document.querySelector('.location .city').innerHTML = `${weather.name}, ${weather.sys.country}`;

        document.querySelector('.location .date').innerHTML = new Date().toDateString();

        document.querySelector('.current .temp').innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

        document.querySelector('.current .feels-like').innerHTML = `Feels like ${Math.round(weather.main.feels_like)}<span>°C</span>`;

        document.querySelector('.current .weather').innerHTML = `${weather.weather[0].main}`;

        document.querySelector('.current .hi-low').innerHTML = `High of ${Math.round(weather.main.temp_min)}°C / Low of ${Math.round(weather.main.temp_max)}°C`;

        document.querySelector('.current .humidity').innerHTML = `Humidity: ${weather.main.humidity}%`;

        const weatherContainer = document.querySelector('.weather_container');
        if (Math.round(weather.main.temp) < 25 && Math.round(weather.main.temp) >= 18) {
            weatherContainer.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, .3), rgba(0, 0, 0, .6)), url('../images/weather.jpg') top center no-repeat";
            weatherContainer.style.backgroundSize = "cover";
        } else if (Math.round(weather.main.temp) > 25) {
            weatherContainer.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, .3), rgba(0, 0, 0, .6)), url('../images/hot-weather.jpg') top center no-repeat";
            weatherContainer.style.backgroundSize = "cover";
        } else if (Math.round(weather.main.temp) < 18 && Math.round(weather.main.temp) > 5) {
            weatherContainer.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, .3), rgba(0, 0, 0, .6)), url('../images/autumn.jpg') top center no-repeat";
            weatherContainer.style.backgroundSize = "cover";
        } else {
            weatherContainer.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, .3), rgba(0, 0, 0, .6)), url('../images/winter.jpg') top center no-repeat";
            weatherContainer.style.backgroundSize = "cover";

        }
    };

    function get5DayForecast(query) {
        if (query.trim().length < 3) return;
        fetch(`${apiKey.base}forecast?q=${query}&units=metric&appid=${apiKey.key}`).then(weather => {
            return weather.json();;
        }).then(display5DayResults);
    };

    function display5DayResults(weather) {
        const fiveDayDateArray = document.querySelectorAll('.five-day_date');
        const fiveDayTempsArray = document.querySelectorAll('.five-day_temp-hi-low');
        const fiveDayWeather = document.querySelectorAll('.five-day_weather');

        let x = 4;

        for (let i = 1; i <= fiveDayDateArray.length; i++) {
            let dateNow = new Date();
            dateNow.setDate(dateNow.getDate() + i);

            fiveDayDateArray[i - 1].innerHTML = dateNow.toDateString();


            fiveDayTempsArray[i - 1].innerHTML = `${Math.round(weather.list[x].main.temp)}°C`;

            fiveDayWeather[i - 1].innerHTML = `${weather.list[x].weather[0].description}`;

            x += 8;
        };
    };
};