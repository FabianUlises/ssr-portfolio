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
})

app.all('*', (req, res, next) => {
    const err = new Error(`Can't find ${req.originalUrl} on this server`)
    err.status = 'fail';
    err.statusCode = 404;
    next(err)
})
// Catch all / err
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
});
// app.all('*', (req, res) => {
//     res.status(404).render('error')
// })
// Server listening
app.listen(process.env.PORT)