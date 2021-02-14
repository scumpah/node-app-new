const request = require('request');

const geoaddress = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYXJzMTIyMzMzNDQ0NCIsImEiOiJja2wzZWs5dXUwbHl0MnFtcjl3dHdoeno1In0.lYXOGBmrAqb-SikpZsWkqA&limit=1';
    request({url, json:true}, (error, {body}) => {
    if(error) {
         callback('Unable to find Lat/Long', undefined);
    } else if(body.features.length === 0) {
         callback('Unable to find matching results. Try Different search term', undefined)
    } else {
        const feature = body.features[0];
        const {place_name: location, center: coordinates} = feature;
         callback(undefined, {
             latitude: coordinates[1],
             longitude: coordinates[0],
             location
         });
    } 
})
}

module.exports = geoaddress;