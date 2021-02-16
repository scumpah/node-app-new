const request = require('request');

const forecast = (lat, lon , callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=bbeb258e1dff8735695571dfbe5f75fc&query='+ encodeURIComponent(lat) + ',' + encodeURIComponent(lon) +'&units=f';
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service', undefined);
        } else if(body.error) {
            callback('Unable to find location', undefined);
        } else {
            const {weather_descriptions:weatherDescription, temperature, feelslike} = body.current;
           callback(undefined,{
               description: weatherDescription[0],
               temperature,
               feelslike

           });
        }
    })
}

module.exports = forecast;