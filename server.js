var webpack = require('webpack');
var webpackDevMiddlware = require('webpack-dev-middleware');
var webpackHotMiddlware = require('webpack-hot-middleware');
var config = require('./webpack.hot.config.js');
var bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
var request = require('request');
var blob = require('./functions/blob');
var cors = require('cors');

var express = require('express');
var app = new (require('express'));
var port = 3000;
var host = '0.0.0.0';

var compiler = webpack(config);

// default options
app.use(fileUpload());

// const corsOptions = {
//     origin: [
//         'http://www.example.com',
//         'http://localhost:3000',
//     ],
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
//     allowedHeaders: ['Content-Type', 'Authorization'],
// };

// app.use(cors(corsOptions));

//允許 Json Data
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//靜態檔案
app.use(express.static(__dirname + '/public'));

//允許 request access
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(webpackDevMiddlware(compiler, {
    noInfo:true,
    publicPath: config.output.publicPath
}))

app.use(webpackHotMiddlware(compiler));

app.get("/", function(req,res){
    res.sendFile(__dirname + '/public/index.html');
});

app.get("/listfile", function (req, res) {
    // res.send("results");
    blob.list(function(err,results){
        res.send(JSON.stringify(results));
    })
});

app.post("/Updatefile", function (req, res) {
    var path = req.body.path;
    var name = req.body.name;
    console.log(path);
    console.log(name);
    blob.UploadFile(path , name , function (err, results) {
        res.send(JSON.stringify(results));
    })
});

app.post('/upload', function (req, res) {
    var name = req.files.sampleFile.name;
    var path = '/Users/lichenyu/Program/ProjectMod/AzureBlobReact/public/img/'+name;

    console.log(name)
    console.log(path)
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }


    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(path, function (err) {
                if (err)
                    return res.status(500).send(err);
        });

    //call Blob API
    var Api_url = "http://localhost:3000/Updatefile";
    request.post({
        url: Api_url,
        form: { path: path,name: name },
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    }, function (err, result, body) {
        if (err) return reject(err);
        console.log(err);
        const bodyObj = JSON.parse(body);
        //resolve(bodyObj.token);
        res.send('File uploaded!');
    });

    
});

app.listen(port, host, function(error){
    if(error){
        console.error(error);
    } else {
        console.info("success",port,host,port);
    }
});