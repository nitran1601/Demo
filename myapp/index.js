var express = require('express');

var userRoute = require('./routes/user.route');
var port = 3000;

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get('/', function(req,res){
    res.render('index',{
        name: 'Le Do Cinema'
    });
});

app.use('/users', userRoute);

app.listen(port, function(){
    console.log('Server listening on port ' + port);
});
