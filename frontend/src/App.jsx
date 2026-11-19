import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import AdminDashboard from './component/AdminDashboard'
import OperatorDashboard from './component/OperatorDashboard'
import AddProduct from "./component/AddProduct";
import EditProduct from "./component/EditProduct";
import HighMovingProducts from "./component/HighMovingProducts";
import StockTransaction from './component/StockTransaction'
import CategoryReport from './component/CategoryReport'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/operator" element={<OperatorDashboard />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/high-moving" element={<HighMovingProducts />} />
          <Route path="/stock-transaction" element={<StockTransaction />} />
          <Route path="/category-report" element={<CategoryReport />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
