const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');

// Define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

// Setup Handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views',viewsPath);

//register partials to be used
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req,res) => {
    res.render('index',{
        title: "Weather Application",
        author: "Raghav"
    });
})

app.get('/about', (req,res) => {
    res.render('about',{
        title: "About",
        author: "Raghav"
    });
})

app.get('/help', (req,res) => {
    res.render('help',{
        title: "Help page",
        author: "Raghav",
        helpText: "Helpful text"
    });
})

app.get('/weather', (req,res) => {
    res.send({
        forecast: "Forecast",
        location: "1010,1011"
    });
})

app.get('/help/*', (req,res) => {
    res.render('error',{
        title: "Help 404",
        author: "Raghav",
        errorText: "Help page not found"
    });
})

app.get('*', (req,res) => {
    res.render('error',{
        title: "404",
        author: "Raghav",
        errorText: "Page not found"
    });
})

app.listen(3000, () => {
    console.log('Server is up in port 3000');
});
