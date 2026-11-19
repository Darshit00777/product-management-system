import Product from "../model/Product.js";

// Add product
export const addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);

        res.json({
            message: "Product added successfully",
            data: product
        });
    }
    catch (error) {
        res.json({
            message: error.message
        });
    }
};

// View all products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.json(products);
    }
    catch (error) {
        res.json({
            message: error.message
        });
    }
};

// View one product
export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.json(product);
    }
    catch (error) {
        res.json({
            message: error.message
        });
    }
};

// Update product
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            //{ new: true, runValidators: true }
        );

        res.json({
            message: "Product updated successfully",
            data: product
        });
    }
    catch (error) {
        res.json({
            message: error.message
        });
    }
};

// Delete product
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        res.json({
            message: "Product deleted successfully",
            data: product
        });
    }
    catch (error) {
        res.json({
            message: error.message
        });
    }
};

// low stock
export const getLowStock = async(req, res) => {
    try {
        const result = await Product.find();

        const lowStock = result.filter((p) => {
            return p.stock_on_hand <= p.min_level;
        });

        res.json({
            message: "low stock products",
            data: lowStock
        });
    }
    catch(error) {
        res.json({
            message: error.message
        });
    }
};

// category report
export const getCategoryReport = async (req, res) => {
    try {
        const products = await Product.find({
            category: req.params.category
        });

        res.json(products);
    }
    catch (error) {
        res.json({ message: error.message });
    }
};