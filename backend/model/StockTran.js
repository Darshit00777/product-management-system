import mongoose from "mongoose"

const stockTranSchema = mongoose.Schema(
    {
        product : {
            type : mongoose.Schema.ObjectId,
            ref : "Product",
            required : true
        },

        operator : {
            type : mongoose.Schema.ObjectId,
            ref : "User",
            required : true
        },

        type: {
            type: String,
            enum: ["Receipt", "Issue"],
            required: true
        },

        quantity: {
            type: Number,
            required: true,
            min: 1
        },

        date: {
            type: Date,
        }
    }
);

const StockTran = mongoose.model("StockTran", stockTranSchema);
export default StockTran;