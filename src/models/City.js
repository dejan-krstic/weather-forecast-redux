export default class City {
    constructor(data) {
        this.name = data.city.name;
        this.weatherList = data.list;
        this.latitude = data.city.coord.lat;
        this.longitude = data.city.coord.lon;
        this.population = data.city.population;

    }
    getTempList() {
        return this.weatherList.map(weather => weather.main.temp - 273);
    }
    getPressureList() {
        return this.weatherList.map(weather => weather.main.pressure);
    }
    getHumidityList() {
        return this.weatherList.map(weather => weather.main.humidity);
    }
    getZoom() {
        if (this.population > 5000000) return 8
        if (this.population > 1000000) return 9
        if (this.population > 300000) return 10
        if (this.population > 100000) return 11
        return 12

    }

}

