const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db.js');
const productRoutes = require('./routes/ProductRoutes.js')

dotenv.config();

connectDB();

const app = express();

<<<<<<< HEAD
=======
const allowedOrigins = [
    'https://e-shopy-d22o1nxed-soumya-rayasts-projects.vercel.app/',
];
// middleware 
>>>>>>> cec9d5ca993084026a672c78112799610d90847f
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
