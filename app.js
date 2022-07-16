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
// Root / Home page
app.get('/', (req, res) => {
    res.status(200).render('index')
});
// Catch all / err
app.all('*', (req, res) => {
    res.render('error');
});

// Server listening
app.listen(process.env.PORT);