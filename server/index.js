const express = require('express')
// const products = require('../products.json')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

const app = express()

const port = 4242

app.get('/api/products', getProducts)

app.get('/api/products/:id', getProduct)

// app.use(express.json())
app.listen(port, () => console.log('Server is running on 4242'))