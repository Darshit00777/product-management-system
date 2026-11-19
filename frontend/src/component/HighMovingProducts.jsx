
import React, { useState, useEffect } from "react";
//import axios from "axios";
import AdminNavbar from "./AdminNavbar";
import { getHighMoving } from "../services/stocktranservice.js";

const HighMovingProducts = () => {
    const [products, setProducts] = useState([]);

    const getHighMovingData = async () => {
    const result = await getHighMoving();

    setProducts(result);
    };

    useEffect(() => {
        getHighMovingData();
    }, []);

    return (
        <div className="container mt-4">
            <AdminNavbar />

            <h2 className="mt-4">High-Moving Products</h2>

            <table className="table table-bordered table-striped mt-3">
                <thead className="table-dark">
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity Sold / Issued</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((p, index) => (
                        <tr key={index}>
                            <td>{p.name}</td>
                            <td>{p.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HighMovingProducts;
