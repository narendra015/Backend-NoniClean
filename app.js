import express from 'express';
import dotenv from "dotenv";
import productRouter from "./routers/product.js";

dotenv.config();
const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Routes API untuk produk
app.use("/api/products", productRouter);

// Jika tidak ada route yang cocok, arahkan ke halaman utama (index.html)
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'Frontend', 'index.html'));
// });

const port = process.env.PORT || 3000;
// Jalankan server di port 3000
app.listen(port, "0.0.0.0", () => console.log(`Server app listening on port ${port}!`));
