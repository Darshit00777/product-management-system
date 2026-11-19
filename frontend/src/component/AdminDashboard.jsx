import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts, deleteProduct } from "../services/productservice.js";
import AdminNavbar from "./AdminNavbar";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const loadProducts = async () => {
    const result = await getProducts();
    setProducts(result);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDelete = async (id) => {
    await deleteProduct(id);

    alert("Product deleted successfully");

    loadProducts();
  };

  return (
    <div className="container mt-4">
      <AdminNavbar />

      <h4 className="mt-4">Product List</h4>

      <div className="table-responsive">
        <table className="table table-bordered table-striped mt-3">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Minimum Level</th>
              <th>Description</th>
              <th>Action</th>
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
                <td>{p.description}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm me-3"
                    onClick={() => navigate(`/edit-product/${p._id}`)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(p._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
