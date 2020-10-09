require('dotenv').config();
console.log(process.env.SESSION_SECRET);
var express = require('express');
var cookieParser = require('cookie-parser');
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var productRoute = require('./routes/product.route');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);
var APIProductRoute = require('./API/routes/product.route');
var authMiddleware = require('./middlewares/auth.middleware');
var port = 3000;

var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/API/products', APIProductRoute);
app.use(cookieParser(process.env.SESSION_SECRET));

app.get('/', function(req,res){
    res.render('index',{
        name: 'Le Do Cinema'
    });
});

app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);
app.use('/API/products', APIProductRoute);


app.listen(port, function(){
    console.log('Server listening on port ' + port);
});

