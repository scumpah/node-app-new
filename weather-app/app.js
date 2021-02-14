const geoaddress = require('./utils/geocode');
const forecast = require('./utils/forecast');

geoaddress(process.argv[2],(error, {latitude, longitude, location}) => {
    if(!process.argv[2]) {
        return console.log('Provide a valid location');
    }
    if(error) {
        return console.log('Error: ' + error);
    }
    forecast(latitude,longitude,(error, data1) => {
        if(error) {
            return console.log('Error forecast: ' + error);
        }
        console.log('Location: '+ location +' Data forecast: '+ JSON.stringify(data1));
    })
})