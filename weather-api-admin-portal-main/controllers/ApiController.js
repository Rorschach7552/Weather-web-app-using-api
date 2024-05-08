const WeatherApi = require('../models/WeatherApi');

class ApiController {
    static #selectedApi = null
    static #latitude = 0
    static #longitude = 0

    static async SetApi(id) {
        this.#selectedApi = await WeatherApi.GetApi(id)
    }

    static setLocation(zip) {
        var url = "https://nominatim.openstreetmap.org/search?q=" + zip + "&format=json";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    this.#latitude = data[0].lat;
                    this.#longitude = data[0].lon;
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    static GetSimpleScript() {
        return this.#selectedApi.script_simple
    }

    static GetAdvancedScript() {
        return this.#selectedApi.script_advanced
    }

    static GetLat() {
        return this.#latitude
    }

    static GetLong() {
        return this.#longitude
    }

}

module.exports = ApiController