const express = require('express');
const cors = require('cors');
const products = require('./Products');
const app = express();
app.use(cors());

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/categories', (req, res) => {
    // Extract unique categories from products
    const categories = [...new Set(products.map(product => product.category))];
    res.json(categories);
});

app.get("/", (req, res) => {
    res.send("E-commerce Product API is running...");
});

app.listen(5000, () => {
    console.log("Server is running at http://localhost:5000");
});
