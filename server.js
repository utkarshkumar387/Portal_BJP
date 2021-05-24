var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var ejs = require('ejs');
var expressLayouts = require('express-ejs-layouts');
var engine = require('ejs-mate');
var fileUpload = require('express-fileupload');
var app = express();

var cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(fileUpload());
app.use(express.static(__dirname + '/public'));
app.engine('ejs', engine);
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(morgan('dev'));

require('./routes/routes')(app);


app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.use(expressLayouts);
app.set('layout', './layout');
app.set('layout', './editorLayout');

app.listen(process.env.PORT || 5050, () => console.log("server running on 5050...."));

