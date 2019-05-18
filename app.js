const express = require('express');
const path = require('path'); //deal with files paths
const webpush = require('web-push');
const bodyParser = require('body-parser'); //handling data for submission - vote
const cors = require('cors'); // let a user agent gain permission to access selected resources  from a server on a different origin. - get request

//db config
require('./config/db');

const app = express();
const poll = require('./routes/poll');
const web_push = require('./routes/web-push');
//set public folder


app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//enable cors
app.use(cors());

app.use('/poll', poll);
app.use('/web-push', web_push);


var server = app.listen(process.env.PORT || 5000, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});
