/**
*Joel Loo
*Tiffany Trinh
*German Flores
*/

/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var placeHold = require('./routes/placeHolder');

var browse = require('./routes/browse');
var ooz = require('./routes/ooz');
var saturation = require('./routes/saturation');
var trilogy = require('./routes/trilogy');
var steve = require('./routes/steve');
var currents = require('./routes/currents');
var rodeo = require('./routes/rodeo');

var login = require('./routes/login');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get("/placeHolder", placeHold.viewProject);
app.get("/browse", browse.viewProject);
app.get('/ooz', ooz.viewProject);
app.get('/saturation', saturation.viewProject);
app.get('/trilogy', trilogy.viewProject);
app.get('/steve', steve.viewProject);
app.get('/currents', currents.viewProject);
app.get('/rodeo', rodeo.viewProject);

app.get('/login', login.viewProject);
app.get('/index', index.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
