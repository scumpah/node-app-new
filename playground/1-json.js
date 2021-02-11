const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const dataJson = dataBuffer.toString();

var data = JSON.parse(dataJson);
data.name = 'Raghav';
data.age = 25;

const result = JSON.stringify(data);
fs.writeFileSync('1-json.json',result);

