function setWeatherData(lat, long) {
    var apiString = ("https://api.weather.gov/points/"+ long + "," + lat);

    fetch(apiString)
        .then(response => response.json())
        .then(response => {
            fetch(response.properties.forecast)
                .then(res => res.json())
                .then(response => {
                    //console.log(response.properties.periods)
            });  


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