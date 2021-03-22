const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const exphbs = require('express-handlebars');
const PORT = process.env.PORT ||3000;
const server = http.createServer(app);
const multer = require('multer');
const upload = multer();

// Body Parser MW
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// public css/imgs
app.use(upload.array());
app.use(express.static('public'));


// Handlebars MW
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: '.hbs',

    // functions for handlebars
    helpers: {
    }
});

app.engine('.hbs', hbs.engine); // template engine
app.set('view engine', '.hbs');

app.use('/', require('./views/routes/index')); // handles switching pages

// set static folder
app.use('/', express.static(path.join(__dirname, 'public')));

server.listen(PORT, () => console.log(`Server running at ${PORT}`));