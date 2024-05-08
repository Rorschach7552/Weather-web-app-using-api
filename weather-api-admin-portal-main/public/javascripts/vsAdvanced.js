function setWeatherData(lat, long) {
    var apiString = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + lat + "," + long + "?unitGroup=us&key=K9P3UL5B35GJ5HKRG6UF6YU72&contentType=json";

    fetch(apiString)
        .then(response => response.json())
        .then(response => {

            for (i = 0; i < 7; i++) {
                var id = "weatherinfo" + i;
                var list = document.getElementById(id);
                var data = ["Current Conditons: " + response.days[i].conditions, "Feels Like: " + response.days[i].feelslike, "Temp: " + response.days[i].temp, "Humidity: " + response.days[i].humidity, "Probability of Precipitation: " + response.days[i].precipprob + " %"];
                var id2 = "weatherextended" + i
                var list2 = document.getElementById(id2);
                var data2 = ["dew: " + response.days[i].dew, "Wind Gust: " + response.days[i].windgust, "Wind Speed: " + response.days[i].windspeed, "Visibility: " + response.days[i].visibility, "UV index: " + response.days[i].uvindex];

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

