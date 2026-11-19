import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../services/productservice.js";
import AdminNavbar from "./AdminNavbar";

const AddProduct = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [minLevel, setMinLevel] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      category: category,
      price: price,
      description: description,
      stock_on_hand: stock,
      min_level: minLevel,
    };

    const result = await addProduct(data);

    console.log(result);

    alert("Product added successfully");

    navigate("/admin");
  };

  return (
    <div className="container mt-4">
      <AdminNavbar />

      <h2 className="mt-4">Add Product</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min="0"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Stock on Hand</label>
          <input
            type="number"
            className="form-control"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            min="0"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Minimum Stock Level</label>
          <input
            type="number"
            className="form-control"
            value={minLevel}
            onChange={(e) => setMinLevel(e.target.value)}
            min="0"
            required
          />
        </div>

        <button type="submit" className="btn btn-success me-2">
          Add Product
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate("/admin")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
