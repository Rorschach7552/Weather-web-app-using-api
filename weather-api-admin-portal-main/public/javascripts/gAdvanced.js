function setWeatherData(lat, long) {
    var apiString = ("https://api.weather.gov/points/"+ long + "," + lat);

    fetch(apiString)
        .then(response => response.json())
        .then(response => {

            for (i = 0; i < 7; i++) {
                var id = "weatherinfo" + i;
                var list = document.getElementById(id);
                var data = ["Current Conditons: " + response.daily.temperature_2m_max[i], "Feels Like: " + response.daily.apparent_temperature_max[i], "Temp: " + response.daily.temperature_2m_max[i], "Wind Direction: " + response.daily.winddirection_10m_dominant[i], "Probability of Precipitation: " + response.daily.precipitation_probability_max[i] + " %"];

                data.forEach((item) => {
                    let li = document.createElement("li");
                    li.innerText = item;
                    list.appendChild(li);
                })
            }
        })
        .catch(err => {
            console.log(err);
        });
}