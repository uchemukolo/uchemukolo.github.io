// Setup ======
const express = require('express');
const morgan = require('morgan');             // log requests to the console (express4)
const bodyParser = require('body-parser');    // pull information from HTML POST (express4)
const methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// init app
const app = express();

app.use(express.static(__dirname + '../../template/views'));    // set the static files location
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as jso
app.use(methodOverride());


// APIs
app.get('/api/users/index', (req, res) =>{
    res.json({name: "Hello World"});
});

app.listen(3030, () =>{
    console.log('Express is listening on port 3030... ');
});
