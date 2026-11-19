
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 1
    },
    description: {
        type: String,
        required: true
    },
    stock_on_hand: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    min_level: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    }
});

const Product = mongoose.model("Product", productSchema);

export default Product;
