var Product = require('../modejs/product.model');

module.exports.index = function(req, res){
    res.render('products/index',{
        products: db.get('products').value()
    });
};
