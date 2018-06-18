var webpack = require('webpack');
var webpackDevMiddlware = require('webpack-dev-middleware');
var webpackHotMiddlware = require('webpack-hot-middleware');
var config = require('./webpack.hot.config.js');

var app = new (require('express'));
var port = 3000;
var host = '0.0.0.0';

var compiler = webpack(config);

app.use(webpackDevMiddlware(compiler, {
    noInfo:true,
    publicPath: config.output.publicPath
}))

app.use(webpackHotMiddlware(compiler));

app.get("/", function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, host, function(error){
    if(error){
        console.error(error);
    } else {
        console.info("success",port,host,port);
    }
});