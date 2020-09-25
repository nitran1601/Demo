var express = require('express');
var cookieParser = require('cookie-parser');
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.roure');
var port = 3000;

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser());

app.get('/', function(req,res){
    res.render('index',{
        name: 'Le Do Cinema'
    });
});

app.use('/users', userRoute);
app.use('/auth', authRoute);

app.listen(port, function(){
    console.log('Server listening on port ' + port);
});
