const Product = require('../models/product')

exports.getAddProduct = (req, res, next)=>{
    res.render('add-product', {pageTitle : 'Add Product', path: '/admin/add-product'}); //path can be written anything, its not necessary to write /add-product
    // res.sendFile(path.join(rootDir , 'views', 'add-product.html'));
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    // res.send('<form action="/admin/add-product" method= "POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
} 

exports.postAddProduct = (req, res, next)=>{
    // products.push({ title: req.body.title});
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) =>{
    Product.fetchAll((products =>{
        res.render('shop', {prods: products, pageTitle: 'Shop', path :'/'}); // using pug
    }));
    // console.log(adminData.products);
    // res.sendFile(path.join( rootDir , 'views', 'shop.html'));
}