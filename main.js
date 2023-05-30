const express = require('express');
const routes = require('./routes/mainRoute')
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET, PUT"
}

app.use(cors(corsOptions));

app.use('/', routes);

app.listen(2020, () => {
    console.log('server is listening on port 2020');
});