function setWeatherData(lat, long) {
    var apiString = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + long + "&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,precipitation_probability_max,winddirection_10m_dominant&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=Pacific%2FAuckland";

    fetch(apiString)
        .then(response => response.json())
        .then(response => {

            for (i = 0; i < 7; i++) {
                var id = "weatherinfo" + i;
                var list = document.getElementById(id);
                var data = ["Current Conditons: " + response.daily.temperature_2m_max[i], "Feels Like: " + response.daily.apparent_temperature_max[i], "Temp: " + response.daily.temperature_2m_max[i], "Wind Direction: " + response.daily.winddirection_10m_dominant[i], "Probability of Precipitation: " + response.daily.precipitation_probability_max[i] + " %"];
                var id2 = "weatherextended" + i
                var list2 = document.getElementById(id2);
                var data2 = ["Weather Code: " + response.daily.weathercode[i], "Precipitation Sum: " + response.daily.precipitation_sum[i]];

                data.forEach((item) => {
                    let li = document.createElement("li");
                    li.innerText = item;
                    list.appendChild(li);
                })

                data2.forEach((item) => {
                    let li = document.createElement("li");
                    li.innerText = item;
                    list2.appendChild(li);
                })
            }
        })
        .catch(err => {
            console.log(err);
        });
}
