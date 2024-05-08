// https://open-meteo.com/
fetch("https://api.open-meteo.com/v1/forecast?latitude=47.87&longitude=-121.91&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,precipitation_probability_max,winddirection_10m_dominant&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=Pacific%2FAuckland")
        .then(res => res.json())
        .then(data => {
            //console.log(data)
        });

// https://www.visualcrossing.com/weather-api
// K9P3UL5B35GJ5HKRG6UF6YU72
var longitude = 48.00
var latitude = -122.20
var apiString = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+ longitude + "," + latitude + "?unitGroup=us&key=K9P3UL5B35GJ5HKRG6UF6YU72&contentType=json";
fetch(apiString)
        .then(res => res.json())
        .then(data => {
            //console.log(data)
        });
        