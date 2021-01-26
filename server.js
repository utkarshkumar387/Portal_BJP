var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var ejs = require('ejs');
var expressLayouts = require('express-ejs-layouts');
var engine = require('ejs-mate');
var fileUpload = require('express-fileupload');

var app = express();

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

require('./routes/index')(app);
require('./routes/committee')(app);
require('./routes/privilege')(app);
require('./routes/blogs')(app);
require('./routes/blogsUnapproved')(app);
require('./routes/blogsRejected')(app);
require('./routes/complaints')(app);
require('./routes/complaintsUnapproved')(app);
require('./routes/complaintsRejected')(app);
require('./routes/complaintsView')(app);
require('./routes/blogsView')(app);
require('./routes/profile')(app);
require('./routes/events')(app);
require('./routes/eventsUnapproved')(app);
require('./routes/eventsRejected')(app);
require('./routes/eventsView')(app);
require('./routes/profileEdit')(app);
require('./routes/editorPage')(app);
require('./routes/committeeMy')(app);
require('./routes/committeeClicked')(app);


app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.use(expressLayouts);
app.set('layout', './layout');

app.listen(process.env.PORT || 5050, () => console.log("server running on 5050...."));

