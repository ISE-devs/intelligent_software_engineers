var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('../webpack.config');

var app = express();
app.set('port',(process.env.PORT || 3000));
app.use('/static',express.static('dist'));
app.use(webpackDevMiddleware(webpack(webpackConfig)));

app.get('/',(res,req,next)=>{
    res.send('prueba');
});

app.listen(app.get('port'),()=>{
    console.log('server on')
})

