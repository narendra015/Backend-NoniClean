import Product from "../models/products.js";

// Create product controller
export const createProduct = async (req, res) => {
  const productData = req.body;
  try {
      const result = await Product.createProduct(productData);
      return res.status(201).json({ message: "Product created successfully", data: result });
  } catch (err) {
      return res.status(500).json({ message: err });
  }
};

// Update product controller
export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const productData = req.body;
  try {
      const result = await Product.updateProduct(id, productData);
      if (result.affectedRows === 0) return res.status(404).json({ message: "Product not found" });
      return res.status(200).json({ message: "Product updated successfully" });
  } catch (err) {
      return res.status(500).json({ message: err });
  }
};

// Delete product controller
export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
      const result = await Product.deleteProduct(id);
      if (result.affectedRows === 0) return res.status(404).json({ message: "Product not found" });
      return res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
      return res.status(500).json({ message: err });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.getAll();
    return res.status(200).json({ data: products });
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const getProductsBySearch = async (req, res) => {
  const search = req.params.search;
  try {
    const products = await Product.getBySearch(search);
    return res.status(200).json({ data: products });
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.getById(id);
    return res.status(200).json({ data: product });
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};
