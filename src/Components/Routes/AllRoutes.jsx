import React from "react";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Products from "../../Pages/Products/Products";
import Order from "../../Pages/Order/Order";
import LabTest from "../../Pages/LabTest/labtest";
import Offers from "../../Pages/Offers/offers";
import Login from "../../Pages/Registration/Login/login";
import Signup from "../../Pages/Registration/Signup/signup";
import SingleProduct from "../../Pages/SingleProduct/SingleProduct";
import Cart from "../../Pages/Cart/Cart";
import Footer from "../../Pages/Footer/footer";
import Category from "../../Pages/Category/Category";

const AllRoutes = () =>{
    return <div>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/order" element={<Order/>}></Route>
                <Route path="/category" element={<Category/>}></Route> 
                <Route path="/products" element={<Products/>}></Route> 
                <Route path="/labtest" element={<LabTest/>}></Route>
                <Route path="/offer" element={<Offers/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/singleproducts" element={<SingleProduct/>}></Route>  
                <Route path="/cart" element={<Cart/>}></Route>  
            </Routes>
            <Footer></Footer>
            
    </div>
}


export default AllRoutes;