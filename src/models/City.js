export default class City {
    constructor (data){
        this.name = data.city.name;
        this.weatherList = data.list;
        this.latitude = data.city.coord.lat;
        this.longitude = data.city.coord.lon;
    }
    getTempList() {
        return this.weatherList.map(weather => weather.main.temp - 273);
    }
    getPressureList() {
        return this.weatherList.map(weather => weather.main.pressure);
    }
    getHumidityList(){
        return this.weatherList.map(weather => weather.main.humidity);
    }

}

