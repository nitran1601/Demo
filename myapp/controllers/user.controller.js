var db = require('../db');
var shortid = require('shortid');  

module.exports.index = function(req, res) {
    res.render('users/index', {
        users: db.get('users').value()
    });
};

module.exports.search = function(req, res){
    var q = req.query.q;
    var users = db.get('users').value()
    var matchedUsers = users.filter(function(user) {
        return user.movie.toLowerCase().indexOf(q.toLowerCase()) !== -1 ;
    }); 
    res.render('users/index', {
        users: matchedUsers
    });
};
module.exports.create = function(req,res) {
    res.render('users/create');
};

module.exports.get = function(req,res) {
    var id = req.params.id;

    var user = db.get('users').find({ id: id}).value();

    res.render('users/view',{
        user: user
    });
};

module.exports.postCreate = function(req,res){
    req.body.id = shortid.generate();
    var errors = [];

    if (!req.body.movie){
        errors.push("Movie's name is required.");
    }
    if (!req.body.day){
        errors.push("Day is required.");
    }
    if(errors.length){
        res.render('users/create',{
            errors: errors,
            values: req.body
        });
        return;
    }
    db.get('users').push(req.body).write();
    res.redirect('/users');
};