import React from "react";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Products from "../../Pages/Products/Products";
import Order from "../../Pages/Order/Order";
import LabTest from "../../Pages/LabTest/labtest";
import Offers from "../../Pages/Offers/offers";
import Login from "../../Pages/Registration/Login/login";
import Signin from "../../Pages/Registration/Signin/signin";
import SingleProduct from "../../Pages/SingleProduct/SingleProduct";
import Cart from "../../Pages/Cart/Cart";

const AllRoutes = () =>{
    return <div>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/order" element={<Order/>}></Route>
                <Route path="/products" element={<Products/>}></Route> 
                <Route path="/labtest" element={<LabTest/>}></Route>
                <Route path="/offer" element={<Offers/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signin" element={<Signin/>}></Route>
                <Route path="/singleproducts" element={<SingleProduct/>}></Route>  
                <Route path="/cart" element={<Cart/>}></Route>  

            </Routes>
    </div>
}


export default AllRoutes;