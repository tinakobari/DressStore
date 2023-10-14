const Product = require('../models/productModel');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

const getProductById = async (req, res) => {
    const productId = req.params.id;

    try {
        const product = await Product.findById(productId);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.status(200).json(product);
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

const addNewProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(200).json(newProduct);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

const updateProductById = async (req, res) => {
    const productId = req.params.id;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });
        if (!updatedProduct) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.status(200).json(updatedProduct);
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

const removeProductById = async (req, res) => {
    const productId = req.params.id;

    try {
        const removedProduct = await Product.findByIdAndRemove(productId);
        if (!removedProduct) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.status(200).json({ message: 'Product deleted successfully' });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

const searchProductsByName = async (req, res) => {
    try {
        const { keyword } = req.params;
        const products = await Product.find({ name: { $regex: keyword, $options: 'i' } });

        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found' });
        }

        res.status(200).json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    addNewProduct,
    updateProductById,
    removeProductById,
    searchProductsByName,
};