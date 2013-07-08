
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));



app.get('/',function(req,res){
	res.render('index',{title:'Home'});
});

//signup

app.get('/signup',function(req,res){
	res.send('Signup');
});

//login

app.get('/login',function(req,res){
	res.send('Login');
});

//users


app.get('/user/:id', function(req, res){
  res.send('user ' + req.params.id);
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
