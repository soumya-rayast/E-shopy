const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db.js');
const productRoutes = require('./routes/ProductRoutes.js')

dotenv.config();

connectDB();

const app = express();

const allowedOrigins = [
    'https://e-shopy-mu.vercel.app/',
];
// middleware 
app.use(cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true, 
  }));
app.use(express.json());

// product route
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})
