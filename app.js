import express from 'express';
import dotenv from "dotenv";
import productRouter from "./routers/product.js";

dotenv.config();
const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Middleware CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Mengizinkan semua origin
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE'); // Mengizinkan method tertentu
  res.header('Access-Control-Allow-Headers', 'Content-Type'); // Mengizinkan header tertentu
  next();
});

// Routes API untuk produk
app.use("/api/products", productRouter);

const port = process.env.PORT || 3000;
// Jalankan server di port 3000
app.listen(port, "0.0.0.0", () => console.log(`Server app listening on port ${port}!`));
