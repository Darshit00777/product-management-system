import React from "react";
import { Link } from "react-router-dom";

const OperatorNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/operator">
                    Operator Panel
                </Link>

                <div className="navbar-nav">
                    <Link className="nav-link" to="/operator">
                        Dashboard
                    </Link>

                    <Link className="nav-link" to="/operator">
                        Low Stock
                    </Link>

                    <Link className="nav-link" to="/stock-transaction">
                        Stock Receipt / Issue
                    </Link>

                    <Link className="nav-link" to="/category-report">
                        Category Report
                    </Link>

                    <Link className="nav-link" to="/login">
                        Logout
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default OperatorNavbar;
