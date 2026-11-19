import React, { useState, useEffect } from "react";
import { getProducts, getCategoryReport } from "../services/productservice.js";
import OperatorNavbar from "./OperatorNavbar";

const CategoryReport = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");

    const getCategoryData = async () => {
        const result = await getProducts();
        setCategories([...new Set(result.map((p) => p.category))]);
    };

    useEffect(() => {
        getCategoryData();
    }, []);

    const handleSearch = async () => {
    if (category === "") {
        alert("Please select category");
        return;
    }

    const result = await getCategoryReport(category);
        setProducts(result);
    };

    return (
        <>
            <OperatorNavbar />

            <div className="container mt-4">
                <h2>Category Report</h2>

                <div className="row mt-3">
                    <div className="col-md-5">
                        <label className="form-label">Select Category</label>

                        <select
                            className="form-select"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Select Category</option>

                            {categories.map((c, index) => (
                                <option key={index} value={c}>
                                    {c}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="col-md-3 d-flex align-items-end">
                        <button
                            className="btn btn-primary"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>

                <h4 className="mt-4">Product List</h4>

                <div className="table-responsive">
                    <table className="table table-bordered table-striped mt-3">
                        <thead className="table-dark">
                            <tr>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Available Stock</th>
                                <th>Minimum Level</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.map((p) => (
                                    <tr key={p._id}>
                                        <td>{p.name}</td>
                                        <td>{p.category}</td>
                                        <td>₹{p.price}</td>
                                        <td>{p.stock_on_hand}</td>
                                        <td>{p.min_level}</td>
                                        <td>
                                            {p.stock_on_hand }
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default CategoryReport;
