import StockTran from "../model/StockTran.js";
import Product from "../model/Product.js";

// Add receipt or issue
export const addTransaction = async(req, res) => {
    try {
        const result = await Product.findById(req.body.product);

        if(req.body.type === "Receipt") {
            result.stock_on_hand += req.body.quantity;
        }
        else {
            result.stock_on_hand -= req.body.quantity;
        }

        await result.save();

        const data = await StockTran.create(req.body);

        res.json({
            message: "transaction successfully",
            data: data
        });
    }
    catch(error) {
        res.json({
            message: error.message
        });
    }
};

// View all transactions
export const getTransactions = async (req, res) => {
    try {
        const transactions = await StockTran.find()
            .populate("product")
            .populate("operator");

        res.json(transactions);
    }
    catch (error) {
        res.json({
            message: error.message
        });
    }
};

// high moving product
export const getHighestMoving = async(req, res) => {
    try {
        const result = await StockTran.find().populate("product");

        const report = result.map((t) => {
            return {
                name: t.product.name,
                quantity: t.quantity
            };
        });

        report.sort((a, b) => b.quantity - a.quantity);

        res.json({
            message: "highest moving products",
            data: report
        });
    }
    catch(error) {
        res.json({
            message: error.message
        });
    }
};