import React, { useState, useEffect } from "react";
import { getProducts } from "../services/productservice.js";
import { addTransaction } from "../services/stocktranservice.js";
import OperatorNavbar from "./OperatorNavbar";

const StockTransaction = () => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState("");
    const [operator, setOperator] = useState("");
    const [type, setType] = useState("Receipt");
    const [quantity, setQuantity] = useState("");

    const getProductData = async () => {
            const result = await getProducts();
            setProducts(result);
    };

    useEffect(() => {
        getProductData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

            const data = {
                product: product,
                operator: operator,
                type: type,
                quantity: Number(quantity)
            };

            const result = await addTransaction(data);

            if (result.data) {
                alert("Stock transaction added successfully");
                setProduct("");
                setQuantity("");
                setType("Receipt");
                getProductData();
            } else {
                alert(result.message);
            }
    };

    return (
        <>
            <OperatorNavbar />

            <div className="container mt-4">
                <h2>Stock Receipt / Issue</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Select Product</label>

                        <select
                            className="form-select"
                            value={product}
                            onChange={(e) => setProduct(e.target.value)}
                            required
                        >
                            <option value="">Select Product</option>

                            {products.map((p) => (
                                <option key={p._id} value={p._id}>
                                    {p.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Operator ID</label>

                        <input
                            type="text"
                            className="form-control"
                            value={operator}
                            onChange={(e) => setOperator(e.target.value)}
                            placeholder="Enter operator MongoDB ID"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Transaction Type</label>

                        <select
                            className="form-select"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value="Receipt">Receipt</option>
                            <option value="Issue">Issue</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Quantity</label>

                        <input
                            type="number"
                            className="form-control"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            min="1"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-success">
                        Submit Transaction
                    </button>
                </form>
            </div>
        </>
    );
};

export default StockTransaction;
