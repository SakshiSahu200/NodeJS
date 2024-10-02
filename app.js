const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./util/database');

const errorController = require('./controllers/error.js')
const app = express();

// app.set('view engine', 'pug'); //to let know express that we are using pug for templates
app.set('view engine', 'ejs');
app.set('views', 'views') // and where we can find it

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

db.execute('SELECT * FROM products')
.then(result =>{
    console.log(result);
})
.catch(err =>{
    console.log(err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
app.listen(3000);