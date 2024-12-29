const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db.js');
const productRoutes = require('./routes/ProductRoutes.js')

dotenv.config();

connectDB();

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<center><h1>Server Running Dudes...</h1></center>");
});

// product route
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})
