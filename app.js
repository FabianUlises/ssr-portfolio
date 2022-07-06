// Dependencies
require('dotenv').config();
const express = require('express');
const app = express();

// Middleware
// Jsx engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));


// Routes
app.get('/', (req, res) => {
    res.status(200).render('index')
})
app.all('*', (req, res) => {
    res.status(404).render('error')
})
app.listen(process.env.PORT)