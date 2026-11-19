import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/admin">
                    Admin Panel
                </Link>

                <div className="navbar-nav">
                    <Link className="nav-link" to="/admin">
                        Dashboard
                    </Link>

                    <Link className="nav-link" to="/add-product">
                        Add Product
                    </Link>

                    <Link className="nav-link" to="/high-moving">
                        High-Moving Products
                    </Link>

                    <Link className="nav-link" to="/login">
                        Logout
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default AdminNavbar;