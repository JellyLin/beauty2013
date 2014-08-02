
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , graph = require('fbgraph');

//require( './db' );

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('CSIE_BEAUTY_@)!#'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


app.get('/', routes.index);
app.get('/users', user.list);
app.get('/like/:num', function(req,res){
  var html = '<html><head><meta property="og:title" content="飛上資頭變美女 - 2013 輔大資工週美少女 "/><meta property="og:type" content="eventwebsite"/><meta property="og:image" content="http://stu.csie.fju.edu.tw/beauty/2013/img/c'+(req.params.num-1)+'.jpg"/><meta name="description" content="我喜歡'+req.params.num+'號！"/><script type="text/javascript">setTimeout(function(){window.location = "../";},200)</script></head><body></body></html>';
  res.send(html);
});
/*app.get('/img/:pic', function(req,res){
  res.redirect('http://bardiche.org/beauty/img/'+req.params.pic);
});*/
app.get('/channel.html', function(req,res){
  var channel = '<script src="//connect.facebook.net/zh_TW/all.js"></script>';
  res.send(channel);
});
app.get('/vote/:id', routes.vote );

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Something broke!');
});

