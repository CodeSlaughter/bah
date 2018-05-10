const express = require('express');
const path = require('path');
const exphbs= require('express-handlebars');

const app = express();

const port = process.env.PORT || 8080

//Serve static files
app.use(express.static(path.join(__dirname, '/public')))

//Handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Route
app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.get('/about-us', (req, res) => {
    //res.send('about us')
    res.render('about')
})

app.get('/contact', (req, res) => {
    //res.send('about us')
    res.render('contact')
})

app.get('/donate', (req, res) => {
    //res.send('about us')
    res.render('donate')
})

app.get('*', (req, res) => {
    res.render('pageNotFound');
});


app.listen(port, () => console.log(`App listening on port ${port}`));