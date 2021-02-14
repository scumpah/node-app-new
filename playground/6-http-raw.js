const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=bbeb258e1dff8735695571dfbe5f75fc&query=45,-75';

const request = http.request(url,(response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })
})

request.on('error', (error) => {
    console.log("Error: " + error);
})

request.end()