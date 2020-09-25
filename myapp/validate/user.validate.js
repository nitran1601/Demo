module.exports.postCreate = function(req, res, next){
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
    res.locals.success = true;
    next();
};