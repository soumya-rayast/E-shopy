const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db.js');
const productRoutes = require('./routes/ProductRoutes.js')

dotenv.config();

connectDB();

const app = express();

// middleware 
app.use(cors());
app.use(express.json());

// product route
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})