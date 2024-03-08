const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {config} = require('dotenv');
config()

const app = express();

const port = process.env.PORT || 3001;
// const MONGO_URL = "mongodb://127.0.0.1:27017/"
const dataBase = "tienda-db"; 
// const mongoDB = MONGO_URL+dataBase;
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL, { dbName: dataBase })
const db = mongoose.connection;

//AGREGAMOS ROUTES

const productRoutes = require('./routes/product.routes');
const authRoutes = require('./routes/auth.routes');
const pedidoRoutes = require('./routes/pedido.routes');

app.use('/api', productRoutes);
app.use('/api', pedidoRoutes);
app.use('/auth', authRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

 