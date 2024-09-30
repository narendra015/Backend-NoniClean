import connection from "../db/connection.js";

export default class Product{
    constructor(
        id_product,
        nama_product,
        foto,
        harga,
        kategori,
        deskripsi,
        jumlah
    )
    {
        this.id_product = id_product;
        this.nama_product = nama_product;
        this.foto = foto;
        this.harga = harga;
        this.kategori = kategori;
        this.deskripsi = deskripsi;
        this.jumlah = jumlah;
    }

    // Create new product
    static createProduct(productData) {
      return new Promise((resolve, reject) => {
          const { id_product, nama_product, foto, harga, kategori, deskripsi, jumlah } = productData;
          const sqlQuery = `INSERT INTO product (id_product, nama_product, foto, harga, kategori, deskripsi, jumlah) VALUES (?, ?, ?, ?, ?, ?, ?)`;
          connection.query(sqlQuery, [id_product, nama_product, foto, harga, kategori, deskripsi, jumlah], (err, result) => {
              if (err) return reject(err);
              return resolve(result);
          });
      });
  }

  // Update product
  static updateProduct(id_product, productData) {
      return new Promise((resolve, reject) => {
          const { nama_product, foto, harga, kategori, deskripsi, jumlah } = productData;
          const sqlQuery = `UPDATE product SET nama_product = ?, foto = ?, harga = ?, kategori = ?, deskripsi = ?, jumlah = ? WHERE id_product = ?`;
          connection.query(sqlQuery, [nama_product, foto, harga, kategori, deskripsi, jumlah, id_product], (err, result) => {
              if (err) return reject(err);
              return resolve(result);
          });
      });
  }

// Delete product
static deleteProduct(id_product) {
  return new Promise((resolve, reject) => {
      const sqlQuery = `DELETE FROM product WHERE id_product = ?`;
      connection.query(sqlQuery, [id_product], (err, result) => {
          if (err) return reject(err);
          return resolve(result);
      });
  });
}

    static getById(id_product)
    {
        return new Promise((resolve, reject) => {
          const sqlQuery = `SELECT * FROM product WHERE id_product = '${id_product}' LIMIT 1`;
            connection.query(sqlQuery,(err,result) => {
                if(err) return reject(err);
                if(result.length === 0) return reject("Produk tidak tersedia");
                return resolve(
                    new Product(
                        result[0].id_product,
                        result[0].nama_product,
                        result[0].foto,
                        result[0].harga,
                        result[0].kategori,
                        result[0].deskripsi,
                        result[0].jumlah
                    )
                );
            });
        });
    }

    static getAll() {
        return new Promise((resolve, reject) => {
          const sqlQuery = `SELECT * FROM product`;
          connection.query(sqlQuery, (err, result) => {
            if (err) return reject(err);
            const products = [];
            result.forEach((product) => {
              products.push(
                new Product(
                  product.id_product,
                  product.nama_product,
                  product.foto,
                  product.harga,
                  product.deskripsi,
                  product.kategori,
                  product.deskripsi,
                  product.jumlah
                )
              );
            });
            return resolve(products);
          });
        });
      }

      static getAllByCategory(kategori) {
        return new Promise((resolve, reject) => {
          const sqlQuery = `SELECT * FROM product WHERE kategori = '${kategori}'`;
          connection.query(sqlQuery, (err, result) => {
            if (err) return reject(err);
            return resolve(result);
          });
        });
      }

      static getBySearch(search) {
        return new Promise((resolve, reject) => {
          const sqlQuery = `SELECT * FROM product WHERE name LIKE '%${search}%'`;
          connection.query(sqlQuery, (err, result) => {
            if (err) return reject(err);
            const products = [];
            result.forEach((product) => {
              products.push(
                new Product(
                    product.id_product,
                    product.nama_product,
                    product.foto,
                    product.harga,
                    product.deskripsi,
                    product.kategori,
                    product.deskripsi,
                    product.jumlah
                )
              );
            });
            return resolve(product);
          });
        });
      }
}