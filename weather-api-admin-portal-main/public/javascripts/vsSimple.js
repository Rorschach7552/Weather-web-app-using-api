function setWeatherData(lat, long) {
var apiString = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+ lat + "," + long + "?unitGroup=us&key=K9P3UL5B35GJ5HKRG6UF6YU72&contentType=json";

fetch(apiString)
.then(response => response.json())
.then(response => {
    let list1 = document.getElementById("weatherinfo");
    
    let data1 = ["Current Conditons: " + response.days[0].conditions, "Feels Like: " + response.days[0].feelslike, "Temp: " + response.days[0].temp, "Humidity: " +  response.days[0].humidity, "Probability of Precipitation: " +  response.days[0].precipprob + " %"];

    data1.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list1.appendChild(li);
    })

    let list2 = document.getElementById("upcomingweatherinfo");

    let data2 = ["Current Conditons: " + response.days[1].conditions, "Feels Like: " + response.days[1].feelslike, "Temp: " + response.days[1].temp, "Humidity: " +  response.days[1].humidity, "Probability of Precipitation: " +  response.days[1].precipprob + " %"];

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