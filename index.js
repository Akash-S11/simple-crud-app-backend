const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.routes.js');
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended : false }));

// routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send("Hello there respose from API ")
});


mongoose.connect("mongodb+srv://akashs1132000:G6YqH65uf1qMsVTB@get.doe8o.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=Get")
.then( () => {
    console.log("connected to database!");
    app.listen(3000, () => {
        console.log("server is running on port 3000");
    });
})
.catch( () => {
    console.log("Not connected to database!");
});