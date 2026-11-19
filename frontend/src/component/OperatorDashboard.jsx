import React, { useState, useEffect } from "react";
import { getLowStock } from "../services/productservice.js";
import OperatorNavbar from "./OperatorNavbar";

const OperatorDashboard = () => {
    const [products, setProducts] = useState([]);

    const getLowStockData = async () => {
      const result = await getLowStock();
      console.log(result);
      setProducts(result);
            
    };

    useEffect(() => {
        getLowStockData();
    }, []);

    return (
        <>
            <OperatorNavbar />

            <div className="container mt-4">
                <h2>Operator Dashboard</h2>
                <h4 className="text-danger mt-3">Low Stock Products</h4>

                <div className="table-responsive">
                    <table className="table table-bordered table-striped mt-3">
                        <thead className="table-dark">
                            <tr>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Available Stock</th>
                                <th>Minimum Level</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                products.map((p) => (
                                    <tr key={p._id}>
                                        <td>{p.name}</td>
                                        <td>{p.category}</td>
                                        <td>{p.stock_on_hand}</td>
                                        <td>{p.min_level}</td>
                                        <td>
                                            <span className="badge bg-danger">
                                                Low Stock
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default OperatorDashboard;
