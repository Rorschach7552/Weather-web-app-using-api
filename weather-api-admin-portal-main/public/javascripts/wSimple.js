function setWeatherData(lat, long) {
    var apiString = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + long + "&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,precipitation_probability_max,winddirection_10m_dominant&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=Pacific%2FAuckland";

    fetch(apiString)
        .then(response => response.json())
        .then(response => {


            let list1 = document.getElementById("weatherinfo");

            let data1 = ["Current Conditons: " + response.current_weather.temperature, "windspeed: " + response.current_weather.windspeed, "wind direction: " + response.current_weather.winddirection, "Humidity: " + response.hourly.relativehumidity_2m[0], "Probability of Precipitation: " + response.hourly.precipitation_probability[0] + " %"];

            data1.forEach((item) => {
                let li = document.createElement("li");
                li.innerText = item;
                list1.appendChild(li);
            })

            let list2 = document.getElementById("upcomingweatherinfo");

            let data2 = ["Tomorrow's Conditons: " + response.daily.temperature_2m_max[1], "Feels Like: " + response.daily.apparent_temperature_max[1], "Temp: " + response.daily.temperature_2m_max[1], "Wind Direction: " + response.daily.winddirection_10m_dominant[1], "Probability of Precipitation: " + response.daily.precipitation_probability_max[1] + " %"];

            data2.forEach((item) => {
                let li = document.createElement("li");
                li.innerText = item;
                list2.appendChild(li);
            })
        })
        .catch(err => {
            console.log(err);
        });
}